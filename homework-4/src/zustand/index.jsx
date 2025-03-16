import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUsersStore = create(
    persist(
        (set) => ({
            users: [],
            setUsers: (users) => set({ users }),
        }),
        {
            name: 'users-storage',
        },
    ),
);
