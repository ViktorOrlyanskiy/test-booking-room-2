export const getAdultWord = (adults) => {
    const lastChar = Number(adults.substr(adults.length - 1));

    if (lastChar < 1) {
        return 'взрослый';
    }
    return 'взрослых';
};
