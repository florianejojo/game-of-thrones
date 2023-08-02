import React, { ReactNode } from "react";
import styled from "styled-components";

interface CharacteristicsLayoutProps {
    label: string;
    children: ReactNode;
}

const CharacteristicsLayout = ({
    label,
    children,
}: CharacteristicsLayoutProps) => {
    return (
        <StyledCharacteristicsLayout>
            <Label>{label}</Label>
            <Value>{children}</Value>
        </StyledCharacteristicsLayout>
    );
};

export default CharacteristicsLayout;

export const StyledCharacteristicsLayout = styled.div``;

const Label = styled.p`
    font-weight: bold;
    margin-right: 5px;
`;

const Value = styled.p`
    color: brown;
`;
