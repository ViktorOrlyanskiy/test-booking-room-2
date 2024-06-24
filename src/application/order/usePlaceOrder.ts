import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrderStore } from 'services/store/order';
import { getRouteSuccess } from 'shared/consts/routes';

export function usePlaceOrder() {
    const navigate = useNavigate();
    const { resetStore } = useOrderStore((state) => state);

    const [loading, setLoading] = useState(false);

    const handlePlaceOrder = () => {
        setLoading(true);

        setTimeout(() => {
            resetStore();
            setLoading(false);
            navigate(getRouteSuccess());
        }, 1500);
    };

    return { handlePlaceOrder, loading };
}
