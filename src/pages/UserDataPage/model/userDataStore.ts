import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserDataState {
    surname: string;
    name: string;
    fullName: string;
    phone: string;
    dateBirth: any;

    setValues: (v: any) => void;
}
const initState = {
    surname: '',
    name: '',
    fullName: '',
    phone: '',
    dateBirth: new Date(),
};

export const useUserDataStore = create<UserDataState>()(
    persist(
        (set) => ({
            ...initState,
            setValues: (values) =>
                set((state) => {
                    return {
                        ...state,
                        ...values,
                    };
                }),
        }),
        {
            name: 'userData-storage',
        }
    )
);
