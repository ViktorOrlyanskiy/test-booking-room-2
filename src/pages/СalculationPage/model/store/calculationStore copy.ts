import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface CalculationState {
    adults: string;
    teenagers: string;
    children: string;
    roomType: string;
    nights: string;
    insurance: boolean;
    setValues: (v: any) => void;
}

export const useCalculationStore = create<CalculationState>()(
    persist(
        immer((set) => ({
            adults: '',
            teenagers: '',
            children: '',
            roomType: 'economy',
            nights: '',
            insurance: true,

            setValues: (values) =>
                set((state) => {
                    state = { ...values };
                }),
        })),
        {
            name: 'calculation-storage',
        }
    )
);
