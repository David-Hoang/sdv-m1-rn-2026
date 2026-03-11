import { createContext, FC, PropsWithChildren, useState } from "react";
import { TodoType, Todos } from "../datas/todos";

export type TodoContextType = {
    todo: TodoType[];
    addTodo: (newTodo: TodoType) => void;
    updateTodo: (id: number, updatedTodo: TodoType) => void;
    getSingleTodo: (id: number) => TodoType | undefined;
};

export const TodoContext = createContext<TodoContextType>({
    todo: [],
    addTodo: () => {},
    updateTodo: () => {},
    getSingleTodo: () => undefined,
});

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
    const [todo, setTodo] = useState<TodoType[]>(Todos);

    const getSingleTodo = (id: number) => {
        return todo.find((t) => t.id === id);
    };

    const addTodo = (newTodo: TodoType) => {
        setTodo([...todo, newTodo]);
    };

    const updateTodo = (id: number, updatedTodo: TodoType) => {
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

