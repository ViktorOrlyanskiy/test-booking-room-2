import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRouteConfirmation, getRouteSuccess, getRouteUserData } from "shared/consts/routes";
import { useMatchMedia } from "shared/hooks/useMatchMedia";
import { Field } from "shared/ui/Field";
import { Input } from "shared/ui/Input";

const StContainer = styled(Stack)`
    max-width: 640px;
    width: 100%;
    height: 700px;
    padding: 16px 20px;
    border: 1px solid green;

    @media (max-width: 500px) {
        height: 100%;
        padding: 10px;
    }
`;

const StButtonContainer = styled(Stack)`
    margin-top: auto;
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 500px) {
        flex: 1 1 auto;
        flex-direction: column-reverse;
        justify-content: flex-start;
        gap: 10px;
    }
`;

const StButton = styled(Button)`
    padding: 5px 30px;
    margin-top: auto;

    @media (max-width: 500px) {
        width: 100%;
        margin-left: 0;

        margin-top: 0;
    }
`;

const ConfirmationPage: FC = () => {
    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate(getRouteUserData());
    };

    const handleClickNext = () => {
        navigate(getRouteSuccess());
    };

    return (
        <StContainer direction="column">
            <Typography fontSize={32} fontWeight={700}>
                Бронирование номера
            </Typography>
            <Typography fontSize={18} mb={3}>
                Подверждение заказа
            </Typography>

            <StButtonContainer>
                <StButton variant="outlined" onClick={handleClickBack}>
                    Назад к данным покупателя
                </StButton>
                <StButton variant="contained" onClick={handleClickNext}>
                    Оплатить
                </StButton>
            </StButtonContainer>
        </StContainer>
    );
};

export default ConfirmationPage;
