import styled from '@emotion/styled';
import { Button, CircularProgress, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRouteUserData } from 'shared/consts/routes';
import { getNightWord } from 'shared/lib/getNightWord';
import { getAdultWord } from 'shared/lib/getAdultWord';
import { getChildrenWord } from 'shared/lib/getChildrenWord';
import { ROOM_TYPE_LABELS } from 'domain/room';
import {
    useOrderStoreOrderDetails,
    useOrderStoreOrderRate,
    useOrderStoreUser,
    usePlaceOrder,
} from 'application/order';

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
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 500px) {
        flex: 1 1 auto;
        flex-direction: column-reverse;
        justify-content: flex-start;
    }
`;

const StButton = styled(Button)`
    padding: 5px 30px;
    margin-top: auto;

    @media (max-width: 500px) {
        width: 100%;
        padding: 5px 10px;
        margin-left: 0;
        margin-top: 0;
    }
`;

const StLastButton = styled(Button)`
    padding: 5px 30px;
    margin-top: auto;

    @media (max-width: 500px) {
        width: 100%;
        padding: 5px 10px;
        margin-top: 10px;
    }
`;

const ConfirmationPage: FC = () => {
    const navigate = useNavigate();

    const user = useOrderStoreUser();
    const orderRate = useOrderStoreOrderRate();
    const orderDetails = useOrderStoreOrderDetails();

    const {
        adultCount,
        teenagerCount,
        childrenCount,
        roomType,
        nightCount,
        isInsurance,
    } = orderDetails;

    const { handlePlaceOrder, loading } = usePlaceOrder();

    const handleClickBack = () => {
        navigate(getRouteUserData());
    };

    const teenagersStr =
        teenagerCount !== 0
            ? `, ${teenagerCount} ${getChildrenWord(
                  teenagerCount
              )} от 5 до 12 лет`
            : '';

    const childrenStr =
        childrenCount !== 0
            ? ` и ${childrenCount} ${getChildrenWord(childrenCount)} до 5 лет`
            : '';

    return (
        <StContainer
            direction="column"
            sx={{ position: loading ? 'relative' : 'inherit' }}
        >
            <Typography fontSize={32} fontWeight={700}>
                Бронирование номера
            </Typography>
            <Typography fontSize={18} mb={3}>
                Подверждение заказа
            </Typography>
            <Typography mb={0.5} fontWeight={700}>
                {user.surname} {user.name} {user.middleName}
            </Typography>
            <Typography mb={0.5}>
                {user.phone.replace(
                    /^(\+7)(\d{3})(\d{3})(\d{2})/g,
                    '$1 $2 $3 $4-'
                )}
            </Typography>
            <Typography mb={0.5}>
                Номер «{ROOM_TYPE_LABELS[roomType]}» на {nightCount}{' '}
                {getNightWord(nightCount)}
            </Typography>
            <Typography mb={0.5}>
                {adultCount} {getAdultWord(adultCount)}
                {teenagersStr} {childrenStr}
            </Typography>
            <Typography mb={0.5}>
                Страховка {isInsurance ? 'включена' : 'не включена'}
            </Typography>
            <Typography mb={0.5}>
                К оплате <b>{orderRate.toLocaleString()} ₽</b>
            </Typography>
            <StButtonContainer>
                <StLastButton variant="outlined" onClick={handleClickBack}>
                    Назад к данным покупателя
                </StLastButton>
                <StButton variant="contained" onClick={handlePlaceOrder}>
                    Оплатить
                </StButton>
            </StButtonContainer>
            {loading && (
                <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        position: 'absolute',
                        width: '95%',
                        height: '95%',
                    }}
                >
                    <CircularProgress />
                </Stack>
            )}
        </StContainer>
    );
};

export default ConfirmationPage;
