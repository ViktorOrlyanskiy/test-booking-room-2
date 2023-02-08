import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ru } from "date-fns/locale";
import { useState } from "react";

export const MuiDateTimePicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
            <DatePicker
                value={selectedDate}
                onChange={(newValue: any) => {
                    setSelectedDate(newValue);
                }}
                renderInput={(params: any) => <TextField size="small" sx={{ width: "100%" }} {...params} />}
            />
        </LocalizationProvider>
    );
};
