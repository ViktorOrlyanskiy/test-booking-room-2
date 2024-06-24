import { User } from './user.types';

export function crateInitUser(): User {
    return {
        surname: '',
        name: '',
        middleName: '',
        phone: '',
        dateBirth: new Date().toISOString(),
    };
}
