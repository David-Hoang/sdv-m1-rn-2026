import Profile from "@/components/profile/Profile";
import { Stack } from "expo-router";
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

            <Stack.Screen options={{ title: "Profil"}} />
            <Profile />
        </>
    );
}