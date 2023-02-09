export const getChildrenWord = (children) => {
    const lastChar = Number(children.substr(children.length - 1));

    if (lastChar === 1) {
        return 'ребенок';
    }
    if (lastChar < 5) {
        return 'ребенка';
    }
    return 'детей';
};
