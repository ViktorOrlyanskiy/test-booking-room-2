import * as yup from 'yup';

export const orderValidationScheme = yup.object().shape({
    adultCount: yup.number().typeError('Обязательное числовое поле'),
    teenagerCount: yup.number().typeError('Обязательное числовое поле'),
    childrenCount: yup.number().typeError('Обязательное числовое поле'),
    nightCount: yup.number().typeError('Обязательное числовое поле'),
});
