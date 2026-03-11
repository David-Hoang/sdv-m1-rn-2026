import { TextInput, StyleSheet, View, Pressable, Text } from "react-native";
import { useContext, useState } from "react";
import { router } from "expo-router";
import { TodoContext } from "@/contexts/TodoContext";
import { addNewTodo } from "@/api/dummyJsonApi";
export default function TodoNew() {

    const [ title, setTitle ] = useState("");
    const { addTodo, todo } = useContext(TodoContext);

    const newTodo = () => {
        const newId = todo.length > 0 ? Math.max(...todo.map(t => t.id)) + 1 : 1;
        addTodo({ id: newId, todo: title, completed: false, userId: 1 });
        router.push('/list');

        const newTodo = async () => addNewTodo({ id: newId, todo: title, completed: false, userId: 1 });
    }
    return (
        <View style={styles.container}>
            <TextInput 
                value={title} 
                onChangeText={setTitle} 
                placeholder="Nouvelle tâche" 
                placeholderTextColor="#9ca3af"
                style={styles.input}
            />
            <Pressable style={styles.button} onPress={() => newTodo()}>
                <Text style={styles.buttonText}>Créer</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 24,
        gap: 16,
    },
    input: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        color: '#1a1a1a',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    button: {
        backgroundColor: '#1a1a1a',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500',
    },
});
