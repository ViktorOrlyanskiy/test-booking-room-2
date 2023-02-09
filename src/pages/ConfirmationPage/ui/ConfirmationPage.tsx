import styled from '@emotion/styled';
import { Button, CircularProgress, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRouteSuccess, getRouteUserData } from 'shared/consts/routes';
import { useCalculationStore } from '../../СalculationPage/model/store/calculationStore';
import { useUserDataStore } from '../../UserDataPage/model/userDataStore';
import { mapTypeRoom } from 'shared/lib/mapTypeRoom';
import { getNightWord } from 'shared/lib/getNightWord';
import { getAdultWord } from 'shared/lib/getAdultWord';
import { getChildrenWord } from 'shared/lib/getChildrenWord';

const StContainer = styled(Stack)`
    max-width: 640px;
    width: 100%;
    height: 700px;
    padding: 16px 20px;
    border: 1px solid green;

    @media (max-width: 500px) {
        height: 100vh;
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
    const [loading, setLoading] = useState(false);
    const {
        surname,
        name,
        fullName,
        phone,
        resetStore: resetUserDataStore,
    } = useUserDataStore((state) => state);
    const {
        adults,
        teenagers,
        children,
        roomType,
        nights,
        insurance,
        fullCost,
        resetStore: resetCalculationStore,
    } = useCalculationStore((state) => state);

    const handleClickBack = () => {
        navigate(getRouteUserData());
    };

    const handleClickNext = () => {
        setLoading(true);
        setTimeout(() => {
            resetCalculationStore();
            resetUserDataStore();
            setLoading(false);
            navigate(getRouteSuccess());
        }, 1500);
    };

    const teenagersStr =
        teenagers !== '0'
            ? `${teenagers} ${getChildrenWord(teenagers)} от 5 до 12 лет`
            : '';
    const childrenStr =
        children !== '0'
            ? `${children} ${getChildrenWord(children)} до 5 лет`
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
                {surname} {name} {fullName}
            </Typography>
            <Typography mb={0.5}>
                {phone.replace(/^(\+7)(\d{3})(\d{3})(\d{2})/g, '$1 $2 $3 $4-')}
            </Typography>
            <Typography mb={0.5}>
                Номер «{mapTypeRoom(roomType)}» на {nights}{' '}
                {getNightWord(nights)}
            </Typography>
            <Typography mb={0.5}>
                {adults} {getAdultWord(adults)} {teenagersStr} {childrenStr}
            </Typography>
            <Typography mb={0.5}>
                Страховка {insurance ? 'включена' : 'не включена'}
            </Typography>
            <Typography mb={0.5}>
                К оплате <b>{Number(fullCost).toLocaleString()} ₽</b>
            </Typography>
            <StButtonContainer>
                <StButton variant="outlined" onClick={handleClickBack}>
                    Назад к данным покупателя
                </StButton>
                <StButton variant="contained" onClick={handleClickNext}>
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
