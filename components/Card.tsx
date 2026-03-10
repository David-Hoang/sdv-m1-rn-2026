import { useState } from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle, Pressable } from "react-native";

interface CardProps {
    title: string;
    done?: boolean;
    children?: React.ReactNode;
}
export default function Card(
    { children, title, done }: CardProps) {
    const [isDone, setIsDone] = useState(done);
    return (
        <Pressable onPress={() => setIsDone(!isDone)}>
            <View style={[styles.card,isDone ? styles.cardDone : undefined]}>
                {title && 
                    <Text style={[styles.title, isDone ? styles.titleDone : undefined]}>
                        {title}
                    </Text>
                }
                <Text>
                    {isDone ? "Fait" : "A faire"}
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
