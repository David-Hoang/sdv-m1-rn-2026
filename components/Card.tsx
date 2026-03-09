import { View, Text, StyleSheet } from "react-native";

export default function Card(
    { children, title, isDone }: 
    { 
        children: React.ReactNode; 
        title: string;
        isDone: boolean;
    }) {

    return (
            <View style={isDone ? styles.cardDone : styles.card}>
                {title && 
                    <Text style={isDone ? styles.titleDone : styles.title}>
                        {title}
                    </Text>
                }
                {children}
            </View>
        );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#a5a5a5",
        backgroundColor: "#cecece",
        padding: 8,
        width : '100%',
        display : 'flex',
        gap: 10
    },
    cardDone: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#a5a5a5",
        backgroundColor: "#cecece",
        padding: 8,
        width : '100%',
        opacity: 0.6,
        display : 'flex',
        gap: 10
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    titleDone: {
        fontSize: 18,
        fontWeight: "bold",
        textDecorationLine: "line-through",
    }

});
