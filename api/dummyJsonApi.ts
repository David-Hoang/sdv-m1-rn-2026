import { TodoResponse } from "@/types/TodoType";
const url = "https://dummyjson.com/todos";

export const fetchTodos = async (): Promise<TodoResponse | null> => {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error("Erreur lors de la récupération des tâches");
        }
        return await response.json() as TodoResponse;
    } catch (error) {
        console.error("Erreur lors du chargement des tâches:", error);
    }
    return null;
};

