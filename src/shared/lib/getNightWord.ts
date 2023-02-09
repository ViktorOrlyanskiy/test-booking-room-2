export const getNightWord = (nights) => {
    const lastChar = nights.substr(nights.length - 1);

    switch (lastChar) {
        case '1':
            return 'ночь';
        case '2':
            return 'ночи';
        case '3':
            return 'ночи';
        case '4':
            return 'ночи';

        default:
            return 'ночей';
    }
};
