import { create } from 'zustand';

//Хранилище zustand

//Создание состояния и функций происходит в одном месте.

export const useStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    decreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
}));
