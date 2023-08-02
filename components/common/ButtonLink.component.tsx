import React from "react";
import { styled } from "styled-components";
import { BigButton } from "@/styles/global.style";
import Link from "next/link";

interface ButtonLinkProps {
    href: string;
    label: string;
}
const ButtonLink = ({ href, label }: ButtonLinkProps) => {
    return (
        <StyledButtonLink>
            <Link href={href}>{label}</Link>
        </StyledButtonLink>
    );
};

export default ButtonLink;

export const StyledButtonLink = styled.div`
    ${BigButton}
`;
