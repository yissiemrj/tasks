import React, { useState } from "react";
import { Button } from "react-bootstrap";

const startAttempt = 4;
//const [state, setState] = useState<number>(initialValue);
export function StartAttempt(): JSX.Element {
    //setting attempt number
    const [attempts, setAttempt] = useState<number>(startAttempt);
    //setting progress, right now Progress is not going
    const [progress, setProgress] = useState<boolean>(false);

    //for Start Quiz
    function startQuiz(): void {
        //if progress is true, then sub 1
        //if (attempts > 0) {
        setProgress(true);
        setAttempt(attempts - 1);
        //}
    }
    function stopQuiz(): void {
        setProgress(false);
    }
    //for Mulligan
    function useMulligan(): void {
        setAttempt(attempts + 1);
    }

    return (
        <>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={progress || attempts === 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={useMulligan} disabled={progress}>
                    Mulligan
                </Button>
                <Button onClick={stopQuiz} disabled={!progress}>
                    Stop Quiz
                </Button>
            </div>
            <div>{attempts}</div>
        </>
    );
}
