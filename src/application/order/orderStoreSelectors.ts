import { useOrderStore } from 'services/store/order';

export const useOrderStoreOrderRate = () =>
    useOrderStore((state) => state.orderRate);

export const useOrderStoreUser = () => useOrderStore((state) => state.user);

export const useOrderStoreOrderDetails = () =>
    useOrderStore((state) => state.orderDetails);
