import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface IGuestCartItem {
  productId: string;
  name: string;
  quantity: number;
}

interface IGuestCartStore {
  items: IGuestCartItem[];
  addItem: (item: Omit<IGuestCartItem, 'quantity'>) => void;
  clear: () => void;
}

export const useGuestCartStore = create<IGuestCartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const exists = state.items.some((cartItem) => cartItem.productId === item.productId);
          return {
            items: exists
              ? state.items.map((cartItem) =>
                  cartItem.productId === item.productId
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem,
                )
              : [...state.items, { ...item, quantity: 1 }],
          };
        }),
      clear: () => set({ items: [] }),
    }),
    { name: 'guest-cart', skipHydration: true },
  ),
);

export const selectGuestCartQuantity = (state: IGuestCartStore) =>
  state.items.reduce((total, item) => total + item.quantity, 0);
