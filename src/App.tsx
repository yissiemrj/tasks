import React from "react"; //add this to the APP from useState
import "./App.css";
import { Button } from "react-bootstrap";
import { RevealAnswer } from "./components/RevealAnswer";
import { ChangeType } from "./components/ChangeType";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript. Miryam Ramirez.
                Header Goes Here
            </header>
            <ShoveBox></ShoveBox>
            <ColoredBox></ColoredBox>
            <DoubleHalf></DoubleHalf>
            <ChooseTeam></ChooseTeam>
            <h1>Header Goes Here</h1>
            <ul>
                <li>Coffee</li>
                <li>Juice</li>
                <li> Milk tea</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <img
                src="https://cdn10.bostonmagazine.com/wp-content/uploads/2014/11/cat-cafe.jpg"
                alt="A picture of coffee cat :3"
            />
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
