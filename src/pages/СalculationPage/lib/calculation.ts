import { CalculationSchema } from '../model/types/calculationSchema';

const ROMM_RATE_ECONOMY = 1800;
const ROMM_RATE_STANDART = 2800;
const ROMM_RATE_LUXURY = 4000;

// const PRICE_FOR_ADULT = 1;
// const PRICE_FOR_TEENAGERS = 0.5;
// const PRICE_FOR_CHILDREN = 0;

const INSURANCE = 1.1;

export const calculation = (values: CalculationSchema) => {
    const { adults, children, teenagers, roomType, insurance, nights } = values;

    const getRommRate = (roomType) => {
        switch (roomType) {
            case 'economy':
                return ROMM_RATE_ECONOMY;
            case 'standart':
                return ROMM_RATE_STANDART;
            case 'luxury':
                return ROMM_RATE_LUXURY;
        }
    };

    const calcAdults = (adults, rommRate) => {
        return Number(adults) * rommRate;
    };

    const calcTeenagers = (teenagers, rommRate) => {
        return !!teenagers ? Number(teenagers) * (rommRate / 2) : 0;
    };

    const calcChildren = (adults, children, rommRate) => {
        if (!children) return 0;
        const freeChildren = Number(adults) * 3;
        const paidChildren = children - freeChildren;
        return paidChildren > 0 ? Number(paidChildren) * (rommRate / 2) : 0;
    };

    const calcNights = (priceOneNight, nights) => {
        return priceOneNight * nights;
    };

    const calcResult = (priceAllNight, insurance) => {
        return insurance ? priceAllNight * INSURANCE : priceAllNight;
    };

    // расчет
    const rommRate = getRommRate(roomType);

    const priceOneNight =
        calcAdults(adults, rommRate) +
        calcTeenagers(teenagers, rommRate) +
        calcChildren(adults, children, rommRate);

    const priceAllNight = calcNights(priceOneNight, nights);
    const result = Math.round(calcResult(priceAllNight, insurance));
    return isNaN(result) ? 0 : result;
};
