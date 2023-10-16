import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [pick, setPick] = useState<string>(options[0]);
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setPick(event.target.value);
    }

    return (
        <>
            <div>
                <h3>Multiple Choice Question</h3>
            </div>
            <div>
                <Form.Group controlId="userPick">
                    <Form.Select value={pick} onChange={updateChoice}>
                        {options.map((options: string) => (
                            <option key={options} value={options}>
                                {options}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            <div>{expectedAnswer === pick ? "✔️" : "❌"}</div>
        </>
    );
}
