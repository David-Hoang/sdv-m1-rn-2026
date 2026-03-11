import { Todo } from "@/types/TodoType";
import { useContext, useState } from "react";
import { TextInput, View, StyleSheet, Pressable, Text } from "react-native";
import { router } from "expo-router";
import { TodoContext } from "@/contexts/TodoContext";

export default function TodoEdit({selectedTask}: {selectedTask?: Todo}) {
    const { updateTodo, getSingleTodo } = useContext(TodoContext);
    const [ title, setTitle ] = useState(selectedTask?.todo ?? "")
    
    const updateTitle = () => {
        if (!selectedTask) return;
        const task = getSingleTodo(selectedTask.id);
        if (task) {
            updateTodo(selectedTask.id, { ...task, todo: title });
        }
        router.push('/list');
    }

    return (
        <View style={styles.container}>
            <TextInput 
                value={title} 
                onChangeText={setTitle}
                style={styles.input}
                placeholder="Titre de la tâche"
                placeholderTextColor="#9ca3af"
            />
            <Pressable style={styles.button} onPress={() => updateTitle()}>
                <Text style={styles.buttonText}>Enregistrer</Text>
            </Pressable>
        </View>
    )
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