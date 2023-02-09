import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import {
    getRouteConfirmation,
    getRouteСalculation,
} from 'shared/consts/routes';
import { Field } from 'shared/ui/Field';
import { Input } from 'shared/ui/Input';
import { MuiDateTimePicker } from 'shared/ui/MuiDatePicker';
import { UserDataSchema } from '../model/userDataSchema';
import { useUserDataStore } from '../model/userDataStore';
import { validationScheme } from '../lib/validationScheme';

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

const UserDataPage: FC = () => {
    const navigate = useNavigate();
    const setValues = useUserDataStore((state) => state.setValues);
    const {
        register,
        getValues,
        setValue,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<UserDataSchema>({
        mode: 'onChange',
        defaultValues: {
            surname: useUserDataStore((state) => state.surname),
            name: useUserDataStore((state) => state.name),
            fullName: useUserDataStore((state) => state.fullName),
            phone: useUserDataStore((state) => state.phone),
            dateBirth: useUserDataStore((state) => state.dateBirth),
        },
        resolver: yupResolver(validationScheme),
    });

    const handleChangeDatePicker = (value: any) => {
        setValue('dateBirth', value);
    };

    const handleClickBack = () => {
        navigate(getRouteСalculation());
    };

    const handleClickNext = () => {
        navigate(getRouteConfirmation());
    };

    useEffect(() => {
        const subscription = watch((values: UserDataSchema) => {
            setValues(values);
        });
        return () => subscription.unsubscribe();
    }, [setValues, watch]);

    return (
        <StContainer direction="column">
            <Typography fontSize={32} fontWeight={700}>
                Бронирование номера
            </Typography>
            <Typography fontSize={18} mb={3}>
                Данные покупателя
            </Typography>
            <Field label="Фамилия" errorMessage={errors?.surname?.message}>
                <Input
                    error={!!errors?.surname?.message}
                    {...register('surname')}
                />
            </Field>
            <Field label="Имя" errorMessage={errors?.name?.message}>
                <Input error={!!errors?.name?.message} {...register('name')} />
            </Field>
            <Field label="Отчество">
                <Input error={false} {...register('fullName')} />
            </Field>
            <Field label="Номер телефона" errorMessage={errors?.phone?.message}>
                <Input
                    placeholder="+7 XXX-XXX-XX-XX"
                    error={!!errors?.phone?.message}
                    {...register('phone')}
                />
            </Field>
            <Field label="Дата рождения">
                <MuiDateTimePicker
                    selectedDate={getValues('dateBirth')}
                    setSelectedDate={handleChangeDatePicker}
                />
            </Field>

            <StButtonContainer>
                <StButton variant="outlined" onClick={handleClickBack}>
                    Назад к расчету стоимости
                </StButton>
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

export default UserDataPage;
