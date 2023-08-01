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
            <Label>{label}:</Label>
            <Value>{value}</Value>
        </StyledCharacteristicsLayout>
    );
};

export default CharacteristicsLayout;

export const StyledCharacteristicsLayout = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    margin: 0 auto;
    height: 50px;
`;

const Label = styled.span`
    font-weight: bold;
    margin-right: 5px;
`;

const Value = styled.span`
    color: brown;
`;
