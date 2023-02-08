import * as yup from 'yup';

export const validationScheme = yup.object().shape({
    adults: yup.number().typeError('Обязательное числовое поле'),
    teenagers: yup.number().typeError('Обязательное числовое поле'),
    children: yup.number().typeError('Обязательное числовое поле'),
    nights: yup.number().typeError('Обязательное числовое поле'),
});
