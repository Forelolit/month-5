import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useTodoStore = create(
    persist(
        (set) => ({
            todos: [],
            addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
            removeTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
            updateTodo: (id, newText) =>
                set((state) => ({
                    todos: state.todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
                })),
            resetStorage: () => {
                useTodoStore.persist.clearStorage();
                set({ todos: [] });
            },
            done: false,
            toggleTodo: (id) =>
                set((state) => ({
                    todos: state.todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
                })),
        }),
        {
            name: 'todo-storage',
        },
    ),
);
