import React, { useState } from "react";
import { Button } from "react-bootstrap";
/**
 *You will need a [state] to handle whether the text is visible.
There is a button labelled Reveal Answer that inverts the state.
The text 42 is not initially visible.
When the button is clicked, the text 42 should be visible.
 */
//ex: const [state, setState] = useState<number>(initialValue);
export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        setVisible(!visible);
    }

    return (
        // Only includes <div>Reveal Answer</div> if `visible` is true
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
    //return <div>Reveal Answer</div>;
}
