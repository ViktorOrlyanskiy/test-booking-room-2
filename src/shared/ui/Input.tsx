import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { FC, ChangeEvent } from "react";

const StInput = styled(TextField)`
    width: 100%;
`;

interface InputProps {
    value: string;
    onChange: (v: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({ value, onChange }) => {
    return <StInput size="small" value={value} onChange={onChange} />;
};
