import {
    FormControlLabel,
    RadioGroup,
    Radio,
    MenuItem,
    Select,
    FormControl,
} from '@mui/material';
import { FC, useState } from 'react';
import { useMatchMedia } from 'shared/hooks/useMatchMedia';

interface Props {
    name: string;
    value: string;
    onChange: any;
}

export const RadioField: FC<Props> = ({ name, value, onChange }) => {
    const { isMobile } = useMatchMedia();
    const [currentValue, setCurrentValue] = useState(value);

    const handleChangeValue = (e: any) => {
        setCurrentValue(e.target.value);
        onChange(e.target.value);
    };

    return isMobile ? (
        <FormControl fullWidth size="small">
            <Select
                name={name}
                value={currentValue}
                onChange={handleChangeValue}
            >
                <MenuItem value="economy">Эконом</MenuItem>
                <MenuItem value="standart">Стандарт</MenuItem>
                <MenuItem value="luxury">Люкс</MenuItem>
            </Select>
        </FormControl>
    ) : (
        <RadioGroup
            name={name}
            value={currentValue}
            onChange={handleChangeValue}
        >
            <FormControlLabel
                value="economy"
                control={<Radio size="small" />}
                label="Эконом"
            />
            <FormControlLabel
                value="standart"
                control={<Radio size="small" />}
                label="Стандарт"
            />
            <FormControlLabel
                value="luxury"
                control={<Radio size="small" />}
                label="Люкс"
            />
        </RadioGroup>
    );
};
