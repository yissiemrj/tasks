import React, { useState } from "react";
import { Button } from "react-bootstrap";

/*const [state, setState] = useState<number>(initialValue);

abc order: Christmas, Easter, Halloween, Thanksgiving, Valentine
date order: Valentine, Easter, Halloween, Thanksgiving, Christmas,
*/

type Holiday =
    | "Halloween"
    | "Thanksgiving"
    | "Christmas"
    | "Valentine"
    | "Easter";
const abc_TRANSITIONS: Record<Holiday, Holiday> = {
    Christmas: "Easter",
    Easter: "Halloween",
    Halloween: "Thanksgiving",
    Thanksgiving: "Valentine",
    Valentine: "Christmas"
};
const date_TRANSITIONS: Record<Holiday, Holiday> = {
    Valentine: "Easter",
    Easter: "Halloween",
    Halloween: "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "Valentine"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Halloween");

    function abcHoliday(): void {
        setHoliday(abc_TRANSITIONS[holiday]);
    }
    function dateHoliday(): void {
        setHoliday(date_TRANSITIONS[holiday]);
    }

    /*
    const holidayName: string[] = [
        "Halloween",
        "Christmas",
        "Thanksgiving",
        "Easter",
        "Valentine"
    ];
    const holidayDate: string[] = [
        "2023-10-5",
        "2023-12-25",
        "2023-11-23",
        "2023-3-31",
        "2023-2-14"
    ];
    const labelEmojis: Record<string, string> = {
        Halloween: "🎃",
        Christmas: "⛄",
        Thanksgiving: "🦃",
        Easter: "🐇",
        Valentine: "❤️"
    };
    const dateEmojis: Record<string, string> = {
        "2023-10-5": "🎃",
        "2023-12-25": "⛄",
        "2023-11-23": "🦃",
        "2023-3-31": "🐇",
        "2023-2-14": "❤️"
    };

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
    //return <div>Cycle Holiday</div>;
    /*
    return (
        <div>
            <div>Holiday: {holiday}</div>
            <div>
                <Button onClick={abcHoliday}>Alphabet</Button>
                <Button onClick={dateHoliday}>Year</Button>
            </div>
        </div>
    );
    */
    return (
        <div>
            <span>Holiday: {abc_TRANSITIONS[holiday]}</span>
            <Button onClick={abcHoliday}>Alphabet</Button>
            <Button onClick={dateHoliday}>Year</Button>
        </div>
    );
}
