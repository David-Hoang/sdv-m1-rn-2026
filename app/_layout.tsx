import { Stack } from "expo-router";
import { TodoProvider } from "../contexts/TodoContext";

export default function RootLayout() {
    
    return (
        <TodoProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </TodoProvider>
    );
}
