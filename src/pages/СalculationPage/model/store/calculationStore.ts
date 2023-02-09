import { calculation } from '../../lib/calculation';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CalculationSchema } from '../types/calculationSchema';

interface CalculationState {
    adults: string;
    teenagers: string;
    children: string;
    roomType: string;
    nights: string;
    insurance: boolean;
    fullCost: number;
    setValues: (v: any) => void;
    setFullCost: (v: any) => void;
    resetStore: () => void;
}
const initState = {
    adults: '1',
    teenagers: '',
    children: '',
    roomType: 'economy',
    nights: '1',
    insurance: true,
    fullCost: 1980,
};

export const useCalculationStore = create<CalculationState>()(
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
            setFullCost: (values) =>
                set((state) => ({ ...state, fullCost: calculation(values) })),
            resetStore: () =>
                set((state) => {
                    return {
                        ...state,
                        ...initState,
                    };
                }),
        }),
        {
            name: 'calculation-storage',
        }
    )
);
