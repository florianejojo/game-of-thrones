import ButtonLink from "@/components/common/ButtonLink.component";
import Header from "@/components/common/Header.component";
import QuizComponent from "@/components/quiz/Quiz.component";
import { CardRadius, BigButton } from "@/styles/global.style";

import { useEffect, useState } from "react";
import { styled } from "styled-components";
import quizQuestions from "../utils/quizQuestions";

const Home = () => {
    const [isQuizDisplayed, setIsQuizDisplayed] = useState(false);
    const [score, setScore] = useState(null);

    useEffect(() => {
        if (score != null) {
            setIsQuizDisplayed(false);
        }
    }, [score]);
    const scoreMessageTitle =
        score && score > 5 ? "BRAVO !" : "OOPS ! Try again ! :)";

    const resetQuiz = () => {
        setIsQuizDisplayed(false);
        setScore(null);
    };
    return (
        <StyledHome>
            <Header title={"Books & Characters"} />

            <main>
                {!isQuizDisplayed && score === null && (
                    <ButtonsSection>
                        <ButtonLink href="/characters" label="See Characters" />
                        <ButtonLink href="/books" label="See Books" />
                        <Button onClick={() => setIsQuizDisplayed(true)}>
                            Take the quiz
                        </Button>
                    </ButtonsSection>
                )}
                {isQuizDisplayed && score === null && (
                    <QuizComponent
                        setScore={setScore}
                        quizQuestions={quizQuestions}
                    />
                )}

                {score !== null && (
                    <Score>
                        <p>{scoreMessageTitle}</p>
                        <p>
                            {score} / {quizQuestions.length}
                        </p>
                        <Button onClick={resetQuiz}>MENU</Button>
                    </Score>
                )}
            </main>
        </StyledHome>
    );
};

export default Home;

const StyledHome = styled.div`
    main {
        display: flex;
        flex-direction: column;
        max-width: 900px;
        margin: 50px auto 0 auto;
    }
`;

export const Button = styled.div`
    ${BigButton}
    flex: 1;
    min-width: 0;
    min-height: 0;
`;

export const ButtonsSection = styled.div`
    flex: 1;
    ${CardRadius}
`;
export const Score = styled.div`
    flex: 1;
    ${CardRadius}
    p {
        font-size: 25px;
    }
`;
