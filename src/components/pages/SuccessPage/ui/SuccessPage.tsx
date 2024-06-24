import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRouteCalculation } from 'shared/consts/routes';
import { SuccessIcon } from 'shared/assets/successIcon';

const StContainer = styled(Stack)`
    max-width: 640px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 700px;
    padding: 16px 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 6px 1px rgba(36, 72, 99, 0.2);

    @media (max-width: 500px) {
        position: relative;
        height: 100vh;
        padding: 10px;
        border-radius: none;
        box-shadow: none;
    }
`;

const StButtonContainer = styled(Stack)`
    @media (max-width: 500px) {
        position: absolute;
        bottom: 10px;
        width: 90%;
    }
`;

const StButton = styled(Button)`
    padding: 5px 30px;
    @media (max-width: 500px) {
        padding: 5px 10px;
    }
`;

const SuccessPage: FC = () => {
    const navigate = useNavigate();
    const handleClickNext = () => {
        navigate(getRouteCalculation());
    };
    return (
        <StContainer direction="column">
            <SuccessIcon />
            <Typography fontSize={20} fontWeight={700}>
                Заказ успешно оплачен.
            </Typography>

            <StButtonContainer>
                <StButton variant="contained" onClick={handleClickNext}>
                    Забронировать еще
                </StButton>
            </StButtonContainer>
        </StContainer>
    );
};

export default SuccessPage;
