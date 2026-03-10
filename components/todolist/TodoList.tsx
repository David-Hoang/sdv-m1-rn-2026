import { Stack, useRouter } from "expo-router";
import Card from "@/components/Card";
import { TouchableOpacity, View, Text } from "react-native";

export default function TodoList() {

    const router = useRouter();

    return (
        <>
            <View
                style={{
                    paddingLeft: 16,
                    paddingRight: 16,
                    flex: 1,
                    justifyContent: "center",
                    gap: 16,
                }}
                >
                <Card title="Tâche 1"/>
                <Card done title="Tâche 2"/>
                <Card title="Tâche 3"/>
                <Card done title="Tâche 4"/>
            </View>
        </>
    );
}
