
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Todo } from "@/types/TodoType";
import { router } from "expo-router";

interface CardProps {
    task: Todo;
    children?: React.ReactNode;
}

export default function Card({ task, children }: CardProps) {
    return (
        <Pressable onPress={() => router.push(`/list/${task.id}`)}>
            <View style={[styles.card,task.completed ? styles.cardDone : undefined]}>
                {task.todo && 
                    <Text style={[styles.title, task.completed ? styles.titleDone : undefined]}>
                        {task.todo}
                    </Text>
                }
                <Text style={styles.status}>
                    {task.completed ? "Fait" : "À faire"}
                </Text>
                {children}
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 12,
        backgroundColor: "#ffffff",
        padding: 20,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    cardDone: {
        opacity: 0.5,
        backgroundColor: "#f9fafb",
    },
    title: {
        fontSize: 17,
        fontWeight: "500",
        color: "#1a1a1a",
        letterSpacing: -0.3,
    },
    titleDone: {
        color: "#9ca3af",
        textDecorationLine: "line-through",
    },
    status: {
        fontSize: 13,
        color: "#6b7280",
        fontWeight: "400",
    }
});
