import { calcOrderRate, createInitOrderDetails } from 'domain/order';
import { useEffect } from 'react';
import { useOrderStore } from 'services/store/order';

export function useInitOrderRate() {
    const setOrderRate = useOrderStore((state) => state.setOrderRate);

    useEffect(() => {
        setOrderRate(calcOrderRate(createInitOrderDetails()));
    }, []);
}
