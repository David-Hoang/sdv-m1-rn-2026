import Card from "@/components/Card";
import { ScrollView, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { TodoContext } from "@/contexts/TodoContext";
import { TodoType } from "@/datas/todos";

export default function TodoList() {

    const { todo } = useContext(TodoContext);
    return (
        <>
            <ScrollView
                style={{
                    paddingLeft: 16,
                    paddingRight: 16,
                    flex: 1,
                }}
                contentContainerStyle={{
                    gap: 20,
                }}
                >
                
                {todo.length > 1 
                    ? todo.map((task: TodoType) => (
                        <Card key={task.id} task={task} /> 
                    )
                    ) : <Text style={styles.noTasks}>Aucune tâche à afficher</Text>
                }
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    noTasks: {
        textAlign: "center",
        padding: 20
    }
});
