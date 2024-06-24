import { RoomType } from 'domain/room';
import { User } from 'domain/user';

export type OrderDetails = {
    adultCount: number;
    teenagerCount: number;
    childrenCount: number;
    roomType: RoomType;
    nightCount: number;
    isInsurance: boolean;
};

export type OrderRate = number;

export type Order = {
    user: User;
    orderDetails: OrderDetails;
    orderRate: OrderRate;
};
