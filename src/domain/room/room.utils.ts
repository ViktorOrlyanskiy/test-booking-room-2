import { RoomType } from './room.types';

export function getRoomRate(roomType: RoomType): number {
    switch (roomType) {
        case 'ECON':
            return 1800;
        case 'STD':
            return 2800;
        case 'LUX':
            return 4000;

        default:
            return 1800;
    }
}

export const mapTypeRoom = (typeRoom) => {
    switch (typeRoom) {
        case 'economy':
            return 'Эконом';
        case 'standart':
            return 'Стандарт';
        case 'luxury':
            return 'Люкс';
    }
};
