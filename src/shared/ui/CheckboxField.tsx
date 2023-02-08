import { Checkbox, Switch } from '@mui/material';
import { FC, forwardRef } from 'react';
import { useMatchMedia } from 'shared/hooks/useMatchMedia';

interface Props {}

export const CheckboxField: FC<Props> = forwardRef<any>(
    ({ ...otherProps }, ref) => {
        const { isMobile } = useMatchMedia();

        return isMobile ? (
            <div style={{ textAlign: 'right' }}>
                <Switch
                    inputRef={ref}
                    defaultChecked
                    sx={{ margin: 0 }}
                    {...otherProps}
                />
            </div>
        ) : (
            <Checkbox
                inputRef={ref}
                defaultChecked
                sx={{ padding: 0 }}
                {...otherProps}
            />
        );
    }
);
