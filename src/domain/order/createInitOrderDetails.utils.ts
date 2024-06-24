import { OrderDetails } from './order.types';

export function createInitOrderDetails(): OrderDetails {
    return {
        adultCount: 1,
        teenagerCount: 0,
        childrenCount: 0,
        nightCount: 1,
        roomType: 'ECON',
        isInsurance: false,
    };
}
