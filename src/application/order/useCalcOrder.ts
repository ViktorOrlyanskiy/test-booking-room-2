import { OrderDetails, calcOrderRate } from 'domain/order';
import { useCallback, useEffect } from 'react';
import { UseFormWatch } from 'react-hook-form';
import { useOrderStore } from 'services/store/order';

export function useCalcOrder(watch: UseFormWatch<OrderDetails>) {
    const setOrderDetails = useOrderStore((state) => state.setOrderDetails);
    const setOrderRate = useOrderStore((state) => state.setOrderRate);

    const handleCalcOrder = useCallback(
        (orderDetails: OrderDetails) => {
            setOrderDetails(orderDetails);
            setOrderRate(calcOrderRate(orderDetails));
        },
        [setOrderDetails, setOrderRate]
    );

    useEffect(() => {
        const subscription = watch(handleCalcOrder);

        return () => subscription.unsubscribe();
    }, [handleCalcOrder, watch]);
}
