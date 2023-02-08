import { useState, useLayoutEffect } from "react";

interface ReturnType {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
}

// кастомизировать под проект
const queries = ["(max-width: 500px)", "(min-width: 499px) and (max-width: 990px)", "(min-width: 991px)"];

/**
 * Определяет тип устройства пользователя
 * @returns объект типа {isMobile: boolean; isTablet: boolean; isDesktop: boolean;}
 */

export function useMatchMedia(): ReturnType {
    const mediaQueryLists = queries.map((query) => matchMedia(query));

    const getValues = () => mediaQueryLists.map((list) => list.matches);

    const [values, setValues] = useState(getValues);

    useLayoutEffect(() => {
        const handler = () => setValues(getValues);

        mediaQueryLists.forEach((list) => list.addEventListener("change", handler));

        return () => mediaQueryLists.forEach((list) => list.removeEventListener("change", handler));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return ["isMobile", "isTablet", "isDesktop"].reduce(
        (acc, screen, index) => ({
            ...acc,
            [screen]: values[index],
        }),
        {} as ReturnType
    );
}
