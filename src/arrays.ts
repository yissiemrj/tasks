/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should return
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    //if there is no element, else if one element. else default [first, last]
    const firstElement = numbers[0];
    const lastElement = numbers[numbers.length - 1];
    let result: number[] = [];

    if (numbers.length === 1) {
        result = [firstElement, firstElement];
    } else if (!numbers.length) {
        result = [...numbers];
    } else {
        result = [firstElement, lastElement];
    }
    return result;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((numbers: number): number => numbers * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newArray = numbers.map((str) => {
        //check if it's a number
        const num = Number(str);
        //if not a number, then result is 0
        return isNaN(num) ? 0 : num;
    });
    return newArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const remove = amounts.map((str) => {
        //if string has $ then remove it
        const noDollar = str.replace(/\$/g, "");
        //if the string without the $, is a number
        const num = Number(noDollar);
        //if it's not a number then result is 0
        return isNaN(num) ? 0 : num;
    });
    return remove;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const loud = messages
        //filter any string containing ?
        .filter((str) => !str.includes("?"))
        .map((str) => {
            if (str.endsWith("!")) {
                return str.toUpperCase();
            } else {
                return str;
            }
        });
    return loud;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lessFour = words.filter((str) => str.length < 4);
    return lessFour.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const pass = ["red", "blue", "green"];
    if (!colors.length) {
        return true;
    }
    //checking if any of the list contains the three colors
    const check = colors.every((colors) => pass.includes(colors));
    return check;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    //adds the total
    const add = addends.reduce((acc, current) => acc + current, 0);
    //make the list have + between
    const list = addends.join("+");
    let output = `${add}=${list}`;
    if (add === 0) {
        //however, if the result is 0, then it will equal zero.
        output = `${add}=${add}`;
    }
    return output;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */

/** notes---
 *
 *
 */
export function injectPositive(values: number[]): number[] {
    //no negatives nums, at the end of the list, it has the sum.
    const first_Sum = values.reduce((acc, current) => acc + current, 0);
    let out: number[] = [];
    let checkNegNum = false;
    let stop = false;

    //keep track & what values will be added up
    const addup = values.reduce((acc, current) => {
        if (current < 0 && checkNegNum === false) {
            checkNegNum = true;
            return acc;
        } else {
            if (current > 0 && checkNegNum === false) {
                acc = acc + current;
            }
            return acc;
        }
    }, 0);

    //which index used to stop at the negative
    const stopIndex = values.findIndex((current, index) => {
        if (current < 0 && stop === false) {
            stop = true;
            return index + 1;
        }
    });

    //This is where our if statments go
    if (values.some((element) => element < 0)) {
        //Inserting into an Array
        //splice
        out = [...values];
        out.splice(stopIndex + 1, 0, addup);
    } else {
        out = [...values, first_Sum];
    }

    /*
    if (values.some((element) => element < 0)) {
        //Inserting into an Array
        //splice
        out = [...values];
        out.splice(2, 0, addup);
    } else {
        out = [...values, first_Sum];
    }
*/
    return out;
}
