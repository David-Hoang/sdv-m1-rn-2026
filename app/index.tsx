import Card from "@/components/Card";
import { Text, View } from "react-native";

export default function Index() {
    return (
        <View
            style={{
                paddingLeft: 16,
                paddingRight: 16,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                gap: 16,
            }}
        >
            <Text>Hello world</Text>
            <Card isDone={false} title="Tâche 1">
                <Text> A faire </Text>
            </Card>

            <Card isDone={true} title="Tâche 2">
                <Text> A faire </Text>
            </Card>
            <Card isDone={false} title="Tâche 3">
                <Text> A faire </Text>
            </Card>

            <Card isDone={true} title="Tâche 4">
                <Text> A faire </Text>
            </Card>
        </View>
    );
}
