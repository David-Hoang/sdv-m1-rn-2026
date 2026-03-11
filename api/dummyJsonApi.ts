import { TodoResponse, Todo } from "@/types/TodoType";
const urlGetList = "https://dummyjson.com/todos";

export const fetchTodos = async (): Promise<TodoResponse | null> => {
    try {
        const response = await fetch(urlGetList);
        if(!response.ok) {
            throw new Error("Erreur lors de la récupération des tâches");
        }
        return await response.json() as TodoResponse;
    } catch (error) {
        console.error("Erreur lors du chargement des tâches:", error);
    }
    return null;
};

const urlAddTodo = "https://dummyjson.com/todos/add";
export const addNewTodo = async (newTask : Partial<Todo | null>) => {
    try {
        const response = await fetch(urlAddTodo, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({newTask})
        });
        if (!response.ok) {
            throw new Error("Erreur lors de l'ajout de la tâche");
        }
        
        return await response.json() as Todo;
        
    }catch (error) {
        console.error("Erreur lors de l'ajout de la tâche:", error);
    }

    return null
};
