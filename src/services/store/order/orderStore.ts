import { Order, OrderDetails, OrderRate } from 'domain/order';
import { User } from 'domain/user';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface OrderState extends Partial<Order> {
    setUser: (user: User) => void;
    setOrderDetails: (orderDetails: OrderDetails) => void;
    setOrderRate: (orderRate: OrderRate) => void;
    resetStore: () => void;
}
const initState: Order = {
    user: null,
    orderDetails: null,
    orderRate: null,
};

export const useOrderStore = create<OrderState>()(
    persist(
        (set) => ({
            ...initState,
            setUser: (payload) =>
                set((state) => {
                    return {
                        ...state,
                        user: payload,
                    };
                }),

            setOrderDetails: (payload) =>
                set((state) => {
                    return {
                        ...state,
                        orderDetails: payload,
                    };
                }),

            setOrderRate: (payload) =>
                set((state) => {
                    return {
                        ...state,
                        orderRate: payload,
                    };
                }),

            resetStore: () =>
                set((state) => {
                    return {
                        ...state,
                        ...initState,
                    };
                }),
        }),
        {
            name: 'order-storage',
        }
    )
);
