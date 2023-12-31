import { useFetchBook } from "@/hooks/useFetchBook.hook";
import { styled } from "styled-components";

interface BookProps {
    bookUrl: string;
}
const SmallBookCardComponent = ({ bookUrl }: BookProps) => {
    const { book } = useFetchBook(bookUrl);

    return <StyledSmallBookCard>{book.name}</StyledSmallBookCard>;
};

export default SmallBookCardComponent;

const StyledSmallBookCard = styled.div``;
