import { release } from "os";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [current, setcurrent] = useState<number>(3); //num attempt left

    const [request, setrequest] = useState<string>(""); //request attempts
    const add = parseInt(request) || 0;

    const addCurrent = () => {
        setcurrent(current + add);
    };

    const subCurrent = () => {
        if (current > 0) {
            setcurrent(current - 1);
        }
    };

    return (
        <div>
            <h3>GiveAttempts</h3>
            <Form.Control
                type="number"
                value={request}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setrequest(event.target.value)
                }
            />
            <button onClick={subCurrent} disabled={current === 0}>
                use
            </button>
            <button onClick={addCurrent}>gain</button>
            <div>Attempts: {current}</div>
        </div>
    );
}
