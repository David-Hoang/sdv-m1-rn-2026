
import { View, Text, StyleSheet, Pressable } from "react-native";
import { TodoType } from "@/types/TodoType";
import { router } from "expo-router";

interface CardProps {
    task: TodoType;
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
                <Text>
                    {task.completed ? "Fait" : "A faire"}
                </Text>
                {children}
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#a5a5a5",
        backgroundColor: "#cecece",
        padding: 20,
        width : '100%',
        display : 'flex',
        gap: 10
    },
    cardDone: {
        opacity: 0.6,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    titleDone: {
        fontStyle: "italic",
        textDecorationLine: "line-through",
    }

});
