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

export const useAuthStore = create((set, get) => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    return {
        user: null,
        users: storedUsers,

        register: (newUser) => {
            const { users } = get();
            const userExists = users.some((user) => user.username === newUser.username || user.email === newUser.email);

            if (userExists) {
                alert('User with this username or email already exists');
                return null;
            }

            const userWithId = { ...newUser, id: Date.now() };

            const updatedUsers = [...users, userWithId];
            localStorage.setItem('users', JSON.stringify(updatedUsers));

            set({ users: updatedUsers });
            return null;
        },

        login: (username, password) => {
            const { users } = get();
            const foundUser = users.find((user) => user.username === username && user.password === password);

            if (!foundUser) {
                alert('Incorrect login or password');
                return null;
            }

            set({ user: foundUser });
            return null;
        },

        logout: () => set({ user: null }),
    };
});

export const useOrderStore = create((set, get) => {
    const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');

    return {
        orders: storedOrders,

        addOrder: (newOrder) => {
            const { user } = useAuthStore.getState();
            if (!user) {
                alert('You must be logged in to place an order');
                return null;
            }

            const updatedOrders = [...get().orders, { ...newOrder, userId: user.id, id: Date.now() }];
            localStorage.setItem('orders', JSON.stringify(updatedOrders));

            set({ orders: updatedOrders });
            return newOrder;
        },

        getUserOrders: () => {
            const { user } = useAuthStore.getState();
            if (!user) return [];

            return get().orders.filter((order) => order.userId === user.id);
        },
    };
});
