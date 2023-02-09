import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { FC, forwardRef } from 'react';

const StInput = styled(TextField)`
    width: 100%;
`;

interface InputProps {
    error: boolean;
    placeholder?: any;
    type?: any;
}

export const Input: FC<InputProps> = forwardRef(
    ({ error, placeholder, type, ...otherProps }, ref) => {
        return (
            <StInput
                inputRef={ref}
                type={type}
                error={error}
                size="small"
                placeholder={placeholder}
                {...otherProps}
            />
        );
    }
);
