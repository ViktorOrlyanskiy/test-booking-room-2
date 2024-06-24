import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useCalcOrder } from 'application/order/useCalcOrder';
import { useInitOrderRate } from 'application/order/useInitOrderRate';
import { CheckboxField } from 'components/common/CheckboxField';
import { Field } from 'components/common/Field';
import { Input } from 'components/common/Input';
import { RadioField } from 'components/common/RadioField';
import { OrderDetails, createInitOrderDetails } from 'domain/order';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getRouteUserData } from 'shared/consts/routes';
import { useMatchMedia } from 'shared/hooks/useMatchMedia';
import { orderValidationScheme } from './СalculationPage.utils';
import { useOrderStoreOrderRate } from 'application/order';

const StContainer = styled(Stack)`
    max-width: 640px;
    width: 100%;
    height: 700px;
    padding: 16px 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 6px 1px rgba(36, 72, 99, 0.2);

    @media (max-width: 500px) {
        height: 100vh;
        padding: 10px;
        border-radius: none;
        box-shadow: none;
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
        margin-top: 0;
        margin-left: 0;
        padding: 5px 10px;
    }
`;

const СalculationPage: FC = () => {
    const navigate = useNavigate();
    const { isMobile } = useMatchMedia();

    const orderRate = useOrderStoreOrderRate();

    const {
        register,
        getValues,
        setValue,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<OrderDetails>({
        mode: 'onChange',
        defaultValues: createInitOrderDetails(),
        resolver: yupResolver(orderValidationScheme),
    });

    const changeRoomType = (value: any) => {
        setValue('roomType', value);
    };

    const handleClickNext = () => {
        navigate(getRouteUserData());
    };

    useInitOrderRate();
    useCalcOrder(watch);

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
                errorMessage={errors?.adultCount?.message}
            >
                <Input
                    type="number"
                    error={!!errors?.adultCount?.message}
                    {...register('adultCount')}
                />
            </Field>
            <Field
                label="Количество детей от 5 до 12 лет"
                errorMessage={errors?.teenagerCount?.message}
            >
                <Input
                    type="number"
                    error={!!errors?.teenagerCount?.message}
                    {...register('teenagerCount')}
                />
            </Field>
            <Field
                label="Количество детей до 5 лет"
                errorMessage={errors?.childrenCount?.message}
            >
                <Input
                    type="number"
                    error={!!errors?.childrenCount?.message}
                    {...register('childrenCount')}
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
                errorMessage={errors?.nightCount?.message}
            >
                <Input
                    type="number"
                    error={!!errors?.nightCount?.message}
                    {...register('nightCount')}
                />
            </Field>
            <Field column={false} label="Страховка">
                <CheckboxField {...register('isInsurance')} />
            </Field>
            <StField>
                <Field column={false} label="Итого">
                    <Typography
                        textAlign={isMobile ? 'right' : undefined}
                        fontWeight="700"
                    >
                        {orderRate} ₽
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
