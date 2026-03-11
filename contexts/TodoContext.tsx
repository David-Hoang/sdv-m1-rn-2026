import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import { Todo } from "@/types/TodoType";
import { fetchTodos } from "@/api/dummyJsonApi";

export type TodoContextType = {
    todo: Todo[];
    addTodo: (newTodo: Todo) => void;
    updateTodo: (id: number, updatedTodo: Todo) => void;
    getSingleTodo: (id: number) => Todo | undefined;
};

export const TodoContext = createContext<TodoContextType>({
    todo: [],
    addTodo: () => {},
    updateTodo: () => {},
    getSingleTodo: () => undefined,
});

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
    const [todo, setTodo] = useState<Todo[]>([]);
        
    useEffect(() => {
        const getTodos = async () => {
            const data = await fetchTodos();
            if (data) {
                setTodo(data.todos);
            }
        };
        getTodos();
    }, []);

    const getSingleTodo = (id: number) => {
        return todo.find((t) => t.id === id);
    };

    const addTodo = (newTodo: Todo) => {
        setTodo([...todo, newTodo]);
    };

    const updateTodo = (id: number, updatedTodo: Todo) => {
        setTodo(todo.map((t) => (t.id === id ? updatedTodo : t)));
    }
    return (
        <TodoContext.Provider
            value={{
                todo,
                addTodo,
                getSingleTodo,
                updateTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

