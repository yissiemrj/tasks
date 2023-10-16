import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [input, setinput] = useState<string>("");
    return (
        <div>
            <h3>CheckAnswer</h3>
            <Form.Control
                type="string"
                value={input}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setinput(event.target.value)
                }
            />
            <div>{expectedAnswer === input ? "✔️" : "❌"}</div>
        </div>
    );
}
