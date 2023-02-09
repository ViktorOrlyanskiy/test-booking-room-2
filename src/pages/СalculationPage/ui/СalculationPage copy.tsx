import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { FC, useState } from 'react';
import { CheckboxField } from 'shared/ui/CheckboxField';
import { Field } from 'shared/ui/Field';
import { Input } from 'shared/ui/Input';
import { RadioField } from 'shared/ui/RadioField';
import { useMatchMedia } from 'shared/hooks/useMatchMedia';
import { useNavigate } from 'react-router-dom';
import { getRouteUserData } from 'shared/consts/routes';
import { useCalculationStore } from '../model/store/calculationStore';
import { useForm } from 'react-hook-form';
import { CalculationSchema } from '../model/types/calculationSchema';
import { validationScheme } from '../lib/validationScheme';
import { yupResolver } from '@hookform/resolvers/yup';

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
    const { isMobile } = useMatchMedia();
    const setValues = useCalculationStore((state) => state.setValues);
    const {
        register,
        getValues,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<CalculationSchema>({
        mode: 'onChange',
        defaultValues: {
            adults: '',
            teenagers: '',
            children: '',
            roomType: 'economy',
            nights: '',
            insurance: true,
        },
        resolver: yupResolver(validationScheme),
    });

    const changeRoomType = (value: any) => {
        setValue('roomType', value);
    };
    const handleClickNext = (values: CalculationSchema) => {
        console.log(values);
        setValues(values);
        // navigate(getRouteUserData());
    };

    return (
        <StContainer direction="column">
            <Typography fontSize={32} fontWeight={700}>
                Бронирование номера
            </Typography>
            <Typography fontSize={18} mb={3}>
                Расчет стоимости
            </Typography>
            <Field
                label="Количество взрослых"
                errorMessage={errors?.adults?.message}
            >
                <Input
                    error={!!errors?.adults?.message}
                    {...register('adults')}
                />
            </Field>
            <Field
                label="Количество детей от 5 до 12 лет"
                errorMessage={errors?.teenagers?.message}
            >
                <Input
                    error={!!errors?.teenagers?.message}
                    {...register('teenagers')}
                />
            </Field>
            <Field
                label="Количество детей до 5 лет"
                errorMessage={errors?.children?.message}
            >
                <Input
                    error={!!errors?.children?.message}
                    {...register('children')}
                />
            </Field>
            <Field label="Тип номера" startItems>
                <RadioField
                    name="roomType"
                    value={getValues('roomType')}
                    onChange={changeRoomType}
                />
            </Field>
            <Field
                label="Количество ночей"
                errorMessage={errors?.nights?.message}
            >
                <Input
                    error={!!errors?.nights?.message}
                    {...register('nights')}
                />
            </Field>
            <Field column={false} label="Страховка">
                <CheckboxField {...register('insurance')} />
            </Field>
            <StField>
                <Field column={false} label="Итого">
                    <Typography
                        textAlign={isMobile ? 'right' : undefined}
                        fontWeight="700"
                    >
                        1234 руб
                    </Typography>
                </Field>
            </StField>

            <StButtonContainer>
                <StButton
                    variant="contained"
                    onClick={handleSubmit(handleClickNext)}
                >
                    Далее
                </StButton>
            </StButtonContainer>
        </StContainer>
    );
};

export default СalculationPage;
