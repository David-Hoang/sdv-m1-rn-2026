import { router, Stack } from "expo-router";
import TodoList from "@/components/todolist/TodoList";
import { Button } from "react-native";

export default function index() {
    return (
        <>        
            <Stack
                screenOptions={{
                    headerTitleStyle: {
                    fontWeight: "bold",
                    },
                }}
            />
            <Stack.Screen options={{ title: "Liste de tâches", 
                headerRight: () => 
                    <Button 
                        title="Ajouter"
                        onPress={() => router.push('/list/new')}
                    /> 
                }} />
            <TodoList />
        </>
    );
}
