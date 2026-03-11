import { TodoType } from "@/datas/todos";
import { useContext, useState } from "react";
import { TextInput, View, Button } from "react-native";
import { router } from "expo-router";
import { TodoContext } from "@/contexts/TodoContext";

export default function TodoEdit({selectedTask}: {selectedTask?: TodoType}) {
    const { updateTodo, todo, getSingleTodo } = useContext(TodoContext);
    const [ title, setTitle ] = useState(selectedTask?.title ?? "")
    
    const updateTitle = () => {
        if (!selectedTask) return;
        const task = getSingleTodo(selectedTask.id);
        if (task) {
            updateTodo(selectedTask.id, { ...task, title });
        }
        router.push('/list');
    }

    return (
        <View>
            <TextInput value={title} onChangeText={setTitle} />
            <Button title="Enregistrer" onPress={() => updateTitle()} />
        </View>
    )
}