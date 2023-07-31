import { useFetchBook } from "@/hooks/useFetchBook.hook";
import { CardRadius } from "@/styles/global.style";

import { styled } from "styled-components";
interface Book {
    name: string;
}
interface BookProps {
    bookUrl: string;
}
const SmallBookCardComponent = ({ bookUrl }: BookProps) => {
    const { book } = useFetchBook(bookUrl);

    return <StyledSmallBookCard>{book.name}</StyledSmallBookCard>;
};

export default SmallBookCardComponent;

const StyledSmallBookCard = styled.span`
    ${CardRadius}
`;
