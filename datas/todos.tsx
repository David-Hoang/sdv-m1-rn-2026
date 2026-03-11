export type TodoType = {
    id: number;
    title: string;
    done: boolean;
};

export const Todos: TodoType[] = [
    { id: 1, title: "Faire les courses", done: true },
    { id: 2, title: "Réviser React Native", done: false },
    { id: 3, title: "Aller à la salle", done: false },
    { id: 4, title: "Préparer le dîner", done: true },
    { id: 5, title: "Lire un livre", done: false },
    { id: 6, title: "Envoyer un email", done: true },
    { id: 7, title: "Promener le chien", done: false },
    { id: 8, title: "Nettoyer la cuisine", done: true },
    { id: 9, title: "Appeler le médecin", done: false },
    { id: 10, title: "Faire la lessive", done: true },
];
