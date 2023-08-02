import React from "react";
import styled from "styled-components";

interface CharacteristicsLayoutProps {
    label: string;
    value: (Element | null)[];
}

const CharacteristicsLayout = ({
    label,
    value,
}: CharacteristicsLayoutProps) => {
    return (
        <StyledCharacteristicsLayout>
            <Label>{label}</Label>
            <Value>{value}</Value>
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
