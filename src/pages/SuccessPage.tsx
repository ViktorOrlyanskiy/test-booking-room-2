import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { getRouteСalculation } from "shared/consts/routes";
import { SuccessIcon } from "shared/assets/successIcon";

const StContainer = styled(Stack)`
    max-width: 640px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
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
    @media (max-width: 500px) {
        position: absolute;
        bottom: 10px;
        width: 90%;
    }
`;

const StButton = styled(Button)`
    padding: 5px 30px;
`;

const SuccessPage: FC = () => {
    const navigate = useNavigate();
    const handleClickNext = () => {
        navigate(getRouteСalculation());
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
