import TodoEdit from "@/components/todoedit/TodoEdit";
import { Stack } from "expo-router";
export default function TodoEditScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Modifier la tâche" }} />
            <TodoEdit />
        </>
    );
}