import { styled } from "styled-components";

interface HeaderProps {
    title: string;
}
const Header = ({ title }: HeaderProps) => {
    return (
        <StyledHeader>
            <h1>Game Of Thrones</h1>
            <h2>{title}</h2>
            <p>Winter is coming...</p>
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.header`
    margin-top: 50px;
    h1 {
        margin-bottom: 50px;
    }
`;
