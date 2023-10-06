import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */

//const [state, setState] = useState<number>(initialValue);

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [rightDie, setRightDie] = useState<number>(4); //put the initialValue as a different value than leftDie
    const [leftDie, setLeftDie] = useState<number>(2); ////put the initialValue as a different value than rightDie6

    function useRollRight(): void {
        setRightDie(d6());
    }
    function useRollLeft(): void {
        setLeftDie(d6());
    }

    //return <div>Two Dice</div>;
    return (
        <>
            <div>
                <Button onClick={useRollLeft}>Roll Left</Button>
                <Button onClick={useRollRight}>Roll Right</Button>
            </div>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <div>
                {leftDie === rightDie && (
                    <div>
                        {leftDie === 1 && rightDie === 1 ? (
                            <span>You Lose</span>
                        ) : (
                            <span>You Win</span>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
