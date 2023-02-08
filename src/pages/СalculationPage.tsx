import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { FC, useState } from "react";
import { CheckboxField } from "shared/ui/CheckboxField";
import { Field } from "shared/ui/Field";
import { Input } from "shared/ui/Input";
import { RadioField } from "shared/ui/RadioField";
import { useMatchMedia } from "shared/hooks/useMatchMedia";
import { useNavigate } from "react-router-dom";
import { getRouteUserData } from "shared/consts/routes";

const StContainer = styled(Stack)`
    max-width: 640px;
    width: 100%;
    height: 700px;
    padding: 16px 20px;
    border: 1px solid green;

    @media (max-width: 500px) {
        height: auto;
        padding: 10px;
    }
`;

const StButtonContainer = styled(Stack)`
    margin-top: auto;
    flex: 1 1 auto;

    @media (max-width: 500px) {
        flex: 0 1 auto;
        margin-top: 0;
        padding-bottom: 10px;
    }
`;

const StField = styled.div`
    @media (max-width: 500px) {
        flex: 1 1 auto;
        display: flex;

        div {
            margin-top: auto;
            width: 100%;
            margin-bottom: 5px;
        }
    }
`;

const StButton = styled(Button)`
    padding: 5px 30px;
    margin-left: auto;
    margin-top: auto;

    @media (max-width: 500px) {
        margin-left: 0;
    }
`;

const СalculationPage: FC = () => {
    const navigate = useNavigate();
    const [age, setAge] = useState("1");
    const { isMobile } = useMatchMedia();

    const handleChange = (v: any) => {
        setAge(v.target.value);
    };

    const handleClickNext = () => {
        navigate(getRouteUserData());
    };

    return (
        <StContainer direction="column">
            <Typography fontSize={32} fontWeight={700}>
                Бронирование номера
            </Typography>
            <Typography fontSize={18} mb={3}>
                Расчет стоимости
            </Typography>
            <Field label="Количество взрослых">
                <Input value={age} onChange={handleChange} />
            </Field>
            <Field label="Количество детей от 5 до 12 лет">
                <Input value={age} onChange={handleChange} />
            </Field>
            <Field label="Количество детей до 5 лет">
                <Input value={age} onChange={handleChange} />
            </Field>
            <Field label="Тип номера" startItems>
                <RadioField value={age} onChange={handleChange} />
            </Field>
            <Field label="Количество ночей">
                <Input value={age} onChange={handleChange} />
            </Field>
            <Field column={false} label="Страховка">
                <CheckboxField value={age} onChange={handleChange} />
            </Field>
            <StField>
                <Field column={false} label="Итого">
                    <Typography textAlign={isMobile ? "right" : undefined} fontWeight="700">
                        1234 руб
                    </Typography>
                </Field>
            </StField>

            <StButtonContainer>
                <StButton variant="contained" onClick={handleClickNext}>
                    Далее
                </StButton>
            </StButtonContainer>
        </StContainer>
    );
};

export default СalculationPage;
