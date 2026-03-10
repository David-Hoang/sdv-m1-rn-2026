import Card from "@/components/Card";
import { ScrollView } from "react-native";

export default function TodoList() {

    return (
        <>
            <ScrollView
                style={{
                    paddingLeft: 16,
                    paddingRight: 16,
                    flex: 1,
                }}
                contentContainerStyle={{
                    gap: 20,
                }}
                >
                <Card title="Tâche 1"/>
                <Card done title="Tâche 2"/>
                <Card title="Tâche 3"/>
                <Card done title="Tâche 4"/>
                <Card done title="Tâche 5"/>
                <Card title="Tâche 6"/>
                <Card title="Tâche 7"/>
                <Card done title="Tâche 8"/>
                <Card done title="Tâche 9"/>
            </ScrollView>
        </>
    );
}
