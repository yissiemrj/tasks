import React, { useState } from "react";
import { Button } from "react-bootstrap";

/*const [state, setState] = useState<number>(initialValue);

abc order: Christmas, Easter, Halloween, Thanksgiving, Valentine
date order: Valentine, Easter, Halloween, Thanksgiving, Christmas,
*/

type Holiday = "🎃" | "🦃" | "⛄" | "❤️" | "🐇";
const abc_TRANSITIONS: Record<Holiday, Holiday> = {
    "⛄": "🐇",
    "🐇": "🎃",
    "🎃": "🦃",
    "🦃": "❤️",
    "❤️": "⛄"
};
const date_TRANSITIONS: Record<Holiday, Holiday> = {
    "❤️": "🐇",
    "🐇": "🎃",
    "🎃": "🦃",
    "🦃": "⛄",
    "⛄": "❤️"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎃");

    function abcHoliday(): void {
        setHoliday(abc_TRANSITIONS[holiday]);
    }
    function dateHoliday(): void {
        setHoliday(date_TRANSITIONS[holiday]);
    }

    /*
    function writeOutEmoji(orderGiven: string[]): string {
        const result = orderGiven.map((holiday, index, array) => {
            if (index !== array.length - 1) {
                return `${labelEmojis[holiday]} -> ${
                    labelEmojis[array[index + 1]]
                } \n`;
            } else {
                return "";
            }
        });
        return result.join("");
    }

    function writedateEmoji(orderGiven: string[]): string {
        const result = orderGiven.map((dateholiday, index, array) => {
            if (index !== array.length - 1) {
                return `${dateEmojis[dateholiday]} -> ${
                    dateEmojis[array[index + 1]]
                } \n`;
            } else {
                return "";
            }
        });
        return result.join("");
    }
    */

    return (
        <div>
            <span>Holiday: {abc_TRANSITIONS[holiday]}</span>
            <Button onClick={abcHoliday}>Alphabet</Button>
            <Button onClick={dateHoliday}>Year</Button>
        </div>
    );
}
