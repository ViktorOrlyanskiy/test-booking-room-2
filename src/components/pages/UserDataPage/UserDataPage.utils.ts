import * as yup from 'yup';
const phoneRegExp = /^\+7\d{3}\d{3}\d{2}\d{2}$/;

export const userValidationScheme = yup.object().shape({
    surname: yup.string().required('Обязательное поле'),
    name: yup.string().required('Обязательное поле'),
    phone: yup
        .string()
        .matches(phoneRegExp, 'Некорректный номер телефона')
        .required('Обязательное поле'),
    dateBirth: yup.string().required('Обязательное поле'),
});
