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
