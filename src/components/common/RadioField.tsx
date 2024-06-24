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
                <MenuItem value="ECON">Эконом</MenuItem>
                <MenuItem value="STD">Стандарт</MenuItem>
                <MenuItem value="LUX">Люкс</MenuItem>
            </Select>
        </FormControl>
    ) : (
        <RadioGroup
            name={name}
            value={currentValue}
            onChange={handleChangeValue}
        >
            <FormControlLabel
                value="ECON"
                control={<Radio size="small" />}
                label="Эконом"
            />
            <FormControlLabel
                value="STD"
                control={<Radio size="small" />}
                label="Стандарт"
            />
            <FormControlLabel
                value="LUX"
                control={<Radio size="small" />}
                label="Люкс"
            />
        </RadioGroup>
    );
};
