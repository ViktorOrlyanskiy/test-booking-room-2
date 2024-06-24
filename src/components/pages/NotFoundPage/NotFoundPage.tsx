import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRouteConfirmation } from 'shared/consts/routes';

const NotFoundPage: FC = () => {
    const navigate = useNavigate();

    const handleClickNext = () => {
        navigate(getRouteConfirmation());
    };
    return (
        <div>
            <Typography fontSize={20} fontWeight="bold">
                Страница не найдена
            </Typography>

            <Button variant="outlined" onClick={handleClickNext}>
                На главную
            </Button>
        </div>
    );
};

export default NotFoundPage;
