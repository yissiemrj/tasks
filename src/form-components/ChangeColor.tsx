import React, { useState } from "react";
import { Form } from "react-bootstrap";

const color = [
    "red",
    "blue",
    "yellow",
    "green",
    "purple",
    "orange",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [pick, setPick] = useState<string>("red");

    function updatechoice(event: React.ChangeEvent<HTMLInputElement>) {
        setPick(event.target.value);
    }
    const pickColorBox = {
        backgroundColor: pick,
        width: "50px",
        height: "20px"
    };

    return (
        <>
            <div>
                <h3>Change Color</h3>
            </div>
            <div>
                {color.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="choice"
                        id="colored-box"
                        label={color}
                        value={color}
                        checked={pick === color}
                        onChange={updatechoice}
                        style={{ backgroundColor: color }}
                    />
                ))}
                <div>
                    <span>
                        you have chosen{" "}
                        <span data-testid="colored-box" style={pickColorBox}>
                            {pick}
                        </span>
                    </span>
                </div>
            </div>
        </>
    );
}
