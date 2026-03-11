import { TextInput, Button } from "react-native";
import { useContext, useState } from "react";
import { router } from "expo-router";
import { TodoContext } from "@/contexts/TodoContext";
export default function TodoNew() {

    const [ title, setTitle ] = useState("");
    const { addTodo, todo } = useContext(TodoContext);

    const newTodo = () => {
        const newId = todo.length > 0 ? Math.max(...todo.map(t => t.id)) + 1 : 1;
        addTodo({ id: newId, title, done: false });
        router.push('/list');
    }
    return (
        <>
            <TextInput value={title} onChangeText={setTitle} placeholder="Titre" />
            <Button title="Enregistrer" onPress={() => newTodo()} />
        </>
    );
}
