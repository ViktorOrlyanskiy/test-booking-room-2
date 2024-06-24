import { User } from 'domain/user';
import { useNavigate } from 'react-router-dom';
import { useOrderStore } from 'services/store/order';
import { getRouteConfirmation } from 'shared/consts/routes';

export function useSetUser() {
    const navigate = useNavigate();

    const { setUser } = useOrderStore((state) => state);

    const handleSetUser = (user: User) => {
        setUser(user);
        navigate(getRouteConfirmation());
    };

    return handleSetUser;
}
