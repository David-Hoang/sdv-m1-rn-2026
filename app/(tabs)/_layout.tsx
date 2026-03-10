import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
            <Tabs.Screen
                name="list"
                options={{
                    title: "Liste de tâche",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={28} name="list" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={28} name="user" color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
