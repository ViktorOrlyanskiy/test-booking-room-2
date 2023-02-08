import { FormControlLabel, RadioGroup, Radio, MenuItem, Select, FormControl } from "@mui/material";
import { FC } from "react";
import { useMatchMedia } from "shared/hooks/useMatchMedia";

interface Props {
    value: string;
    onChange: any;
}

export const RadioField: FC<Props> = ({ value, onChange }) => {
    const { isMobile } = useMatchMedia();

    return isMobile ? (
        <FormControl fullWidth size="small">
            <Select value={value} onChange={onChange}>
                <MenuItem value="economy">Эконом</MenuItem>
                <MenuItem value="standart">Стандарт</MenuItem>
                <MenuItem value="luxury">Люкс</MenuItem>
            </Select>
        </FormControl>
    ) : (
        <RadioGroup defaultValue="economy" value={value} onChange={onChange}>
            <FormControlLabel value="economy" control={<Radio size="small" />} label="Эконом" />
            <FormControlLabel value="standart" control={<Radio size="small" />} label="Стандарт" />
            <FormControlLabel value="luxury" control={<Radio size="small" />} label="Люкс" />
        </RadioGroup>
    );
};
