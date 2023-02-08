import { Checkbox, Switch } from "@mui/material";
import { FC } from "react";
import { useMatchMedia } from "shared/hooks/useMatchMedia";

interface Props {
    value: any;
    onChange: any;
}

export const CheckboxField: FC<Props> = ({ value, onChange }) => {
    const { isMobile } = useMatchMedia();

    return isMobile ? (
        <div style={{ textAlign: "right" }}>
            <Switch defaultChecked value={value} onChange={onChange} sx={{ margin: 0 }} />
        </div>
    ) : (
        <Checkbox defaultChecked sx={{ padding: 0 }} value={value} onChange={onChange} />
    );
};
