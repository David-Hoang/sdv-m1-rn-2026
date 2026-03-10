import { router, Stack } from "expo-router";
import TodoList from "@/components/todolist/TodoList";
import { Button } from "react-native";

export default function Index() {
    return (
        <>
            <Stack.Screen options={{ title: "Accueil", 
                headerRight: () => 
                    <Button 
                        title="Ajouter"
                        onPress={() => router.push('/todo-edit')}
                    /> 
                }} />
            <TodoList />
        </>
    );
}
