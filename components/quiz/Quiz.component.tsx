import { BigButton, CardRadius } from "@/styles/global.style";
import React, { useState } from "react";
import { styled } from "styled-components";
interface Answer {
    questionIndex: number;
    answerIndex: number;
}

interface QuizAnswer {
    label: string;
    isRightAnswer: boolean;
}
interface QuizQuestion {
    question: string;
    answer: QuizAnswer[];
}
const QuizComponent = ({
    setScore,
    quizQuestions,
}: {
    setScore: Function;
    quizQuestions: QuizQuestion[];
}) => {
    const [answers, setAnswers] = useState<Answer[]>(
        new Array(quizQuestions.length)
    );

    const handleAnswerSelection = (
        questionIndex: number,
        answerIndex: number
    ) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = { questionIndex, answerIndex };
        setAnswers(newAnswers);
        setAnswers(newAnswers);
    };

    const calculateScore = (answers: Answer[]): number => {
        const points = answers.map((answer, index) => {
            if (!answer) return 0;

            const isRightAnswer =
                quizQuestions[answer.questionIndex].answer[answer.answerIndex]
                    .isRightAnswer;

            return isRightAnswer ? 1 : 0;
        });
        const initialValue = 0;
        const total = points.reduce(
            (acc: number, curr: number) => acc + curr,
            initialValue
        );
        return total;
    };

    const handleSubmit = () => {
        const score = calculateScore(answers);
        setScore(score);
    };

    return (
        <div>
            <h3>QUIZ</h3>
            {quizQuestions.map(
                (question: QuizQuestion, questionIndex: number) => {
                    const questionNum = `Question ${questionIndex + 1}`;
                    return (
                        <QuestionBlock key={questionIndex}>
                            <p>{questionNum}</p>
                            <p>{question.question}</p>
                            <Answers>
                                {question.answer.map((answer, index) => {
                                    return (
                                        <AnswerOption
                                            key={index}
                                            onClick={() => {
                                                handleAnswerSelection(
                                                    questionIndex,
                                                    index
                                                );
                                            }}
                                            disabled={
                                                answers[questionIndex]
                                                    ?.answerIndex === index
                                            }
                                        >
                                            {answer.label}
                                        </AnswerOption>
                                    );
                                })}
                            </Answers>
                        </QuestionBlock>
                    );
                }
            )}
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    );
};

export default QuizComponent;

export const Button = styled.button`
    ${BigButton}
    font-size: 40px;
    margin-top: 50px;
`;

export const QuestionBlock = styled.div`
    border-top: solid brown 1px;
    margin-top: 20px;
    ${CardRadius}
`;

export const Answers = styled.div``;
export const AnswerOption = styled.button`
    ${CardRadius}
    text-align: left;
    margin: 5px;
`;
