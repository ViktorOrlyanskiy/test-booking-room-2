import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { StackBaseProps } from "@mui/system";
import { FC, ReactNode } from "react";

const StContainer = styled.div`
    display: flex;
    gap: 16px;
    align-items: ${(p: { startItems?: boolean; column?: boolean }) => (p.startItems ? "flex-start" : "center")};
    justify-content: space-between;
    margin-bottom: 24px;

    @media (max-width: 500px) {
        flex-direction: ${(p: { startItems?: boolean; column?: boolean }) => (p.column ? "column" : "row")};

        gap: 8px;
    }
`;

const StItem = styled.div`
    width: 100%;
`;

interface FieldProps extends StackBaseProps {
    label: string;
    children: ReactNode;
    column?: boolean;
    startItems?: boolean;
}

export const Field: FC<FieldProps> = ({ label, children, column = true, startItems = false }) => {
    return (
        <StContainer column={column} startItems={startItems}>
            <StItem>
                <Typography fontSize={16}>{label}</Typography>
            </StItem>
            <StItem>{children}</StItem>
        </StContainer>
    );
};
