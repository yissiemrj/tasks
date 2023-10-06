import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

//ex: const [state, setState] = useState<number>(initialValue);
export function ChangeType(): JSX.Element {
    //you will need a single state to handle whether the type is multiple_choice_question or short_answer_question.
    //The type of the state should be QuestionType, not string.
    //The initial type must be short_answer_question.
    const [QuestionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    const TakeChangeType = () => {
        setQuestionType(
            QuestionType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };

    //There should be a button labelled Change Type that changes the state from one type to the other
    /**When the type is multiple_choice_question, the text Multiple Choice should be visible.
        When the type is short_answer_question, the text Short Answer should be visible. */

    return (
        <div>
            <Button onClick={TakeChangeType}>Change Type</Button>
            {QuestionType === "multiple_choice_question" ? (
                <div>Multiple Choice</div>
            ) : (
                <div>Short Answer</div>
            )}
        </div>
    );
    //return <div>Change Type</div>;
}
