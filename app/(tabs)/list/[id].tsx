import TodoEdit from "@/components/todoedit/TodoEdit";
import { Stack, useLocalSearchParams } from "expo-router";
import { TodoType } from "@/datas/todos";
import TodoNew from "@/components/todonew/TodoNew";
import { useContext } from "react";
import { TodoContext } from "@/contexts/TodoContext";
export default function TodoAddOrEdit() {
    const { id } = useLocalSearchParams();
    const { getSingleTodo } = useContext(TodoContext);

    if(id === "new") return (
        <>
            <Stack.Screen options={{ title: "Ajouter une tâche" }} />
            <TodoNew />
        </>
    );

    if(id){
        const selectedTask = getSingleTodo(Number(id));
        return (
            <>
                <Stack.Screen options={{ title: "Modifier la tâche" }} />
                <TodoEdit selectedTask={selectedTask} />
            </>
        );
    } 
}
