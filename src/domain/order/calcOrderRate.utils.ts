import { RoomRate, getRoomRate } from 'domain/room';
import { OrderRate, OrderDetails } from './order.types';

export function calcOrderRate(orderDetails: OrderDetails): OrderRate {
    const {
        adultCount,
        teenagerCount,
        childrenCount,
        nightCount,
        isInsurance,
        roomType,
    } = orderDetails;

    const roomRate = getRoomRate(roomType);

    const rateOneNight =
        calcRateForAdults(adultCount, roomRate) +
        calcRateForTeenagers(teenagerCount, roomRate) +
        calcRateForChildren(adultCount, childrenCount, roomRate);

    const rateAllNight = calcRateForNights(nightCount, rateOneNight);
    const orderRate = Math.round(
        calcRateForInsurance(rateAllNight, isInsurance)
    );

    return orderRate;
}

const calcRateForAdults = (adultCount: number, roomRate: RoomRate): number => {
    return adultCount * roomRate;
};

const calcRateForTeenagers = (
    teenagerCount: number,
    roomRate: RoomRate
): number => {
    return teenagerCount * (roomRate / 2);
};

const calcRateForChildren = (
    adultCount: number,
    childrenCount: number,
    roomRate: RoomRate
): number => {
    if (!childrenCount) return 0;

    const freeChildren = adultCount * 3;
    const paidChildren = childrenCount - freeChildren;
    return paidChildren > 0 ? paidChildren * (roomRate / 2) : 0;
};

const calcRateForNights = (
    nightCount: number,
    priceOneNight: number
): number => {
    return priceOneNight * nightCount;
};

const calcRateForInsurance = (
    rateAllNight: number,
    isInsurance: boolean
): number => {
    const INSURANCE = 1.1;

    return isInsurance ? rateAllNight * INSURANCE : rateAllNight;
};
