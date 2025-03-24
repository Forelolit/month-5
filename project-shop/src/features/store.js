import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFilters = create((set) => ({
    type: 'all',
    setType: (type) => set({ type }),
    priceRange: [0, 10000],
    updatePriceRange: (newRange) => set(() => ({ priceRange: newRange })),
}));

export const useStoreProject = create(
    persist(
        (set) => ({
            cart: [],
            favorites: [],
            addToCart: (product) =>
                set((state) => ({
                    cart: state.cart.some((item) => item.id === product.id)
                        ? state.cart.filter((item) => item.id !== product.id)
                        : [...state.cart, product],
                })),
            addToFavorites: (product) =>
                set((state) => ({
                    favorites: state.favorites.some((item) => item.id === product.id)
                        ? state.favorites.filter((item) => item.id !== product.id)
                        : [...state.favorites, product],
                })),
        }),
        { name: 'store' },
    ),
);
