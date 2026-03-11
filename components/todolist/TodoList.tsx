import Card from "@/components/Card";
import { ScrollView, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { TodoContext } from "@/contexts/TodoContext";
import { Todo } from "@/types/TodoType";

export default function TodoList() {

    const { todo } = useContext(TodoContext);
    return (
        <>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                {todo.length > 1 
                    ? todo.map((task: Todo) => (
                        <Card key={task.id} task={task} /> 
                    )
                    ) : <Text style={styles.noTasks}>Aucune tâche à afficher</Text>
                }
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingHorizontal: 20,
    },
    contentContainer: {
        gap: 12,
        paddingVertical: 20,
    },
    noTasks: {
        textAlign: "center",
        padding: 40,
        fontSize: 15,
        color: '#9ca3af',
        fontWeight: '400',
    }
});
