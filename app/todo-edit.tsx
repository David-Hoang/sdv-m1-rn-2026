import TodoEdit from "@/components/todoedit/TodoEdit";
import { Stack, router } from "expo-router";
import { Button } from "react-native";
export default function TodoEditScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Modifier la tâche" }} />
            <TodoEdit />
        </>
    );
}