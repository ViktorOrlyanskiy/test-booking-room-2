import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getRouteUserData } from 'shared/consts/routes';
import { useMatchMedia } from 'shared/hooks/useMatchMedia';
import { CheckboxField } from 'shared/ui/CheckboxField';
import { Field } from 'shared/ui/Field';
import { Input } from 'shared/ui/Input';
import { RadioField } from 'shared/ui/RadioField';
import { validationScheme } from '../lib/validationScheme';
import { useCalculationStore } from '../model/store/calculationStore';
import { CalculationSchema } from '../model/types/calculationSchema';

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
    const fullCost = useCalculationStore((state) => state.fullCost);
    const setValues = useCalculationStore((state) => state.setValues);
    const setFullCost = useCalculationStore((state) => state.setFullCost);
    const {
        register,
        getValues,
        setValue,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<CalculationSchema>({
        mode: 'onChange',
        defaultValues: {
            adults: useCalculationStore((state) => state.adults),
            teenagers: useCalculationStore((state) => state.teenagers),
            children: useCalculationStore((state) => state.children),
            roomType: useCalculationStore((state) => state.roomType),
            nights: useCalculationStore((state) => state.nights),
            insurance: useCalculationStore((state) => state.insurance),
        },
        resolver: yupResolver(validationScheme),
    });

    const changeRoomType = (value: any) => {
        setValue('roomType', value);
    };

    const handleClickNext = () => {
        navigate(getRouteUserData());
    };

    useEffect(() => {
        const subscription = watch((values: CalculationSchema) => {
            setValues(values);
            setFullCost(values);
        });
        return () => subscription.unsubscribe();
    }, [setFullCost, setValues, watch]);

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
                        {fullCost} ₽
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
