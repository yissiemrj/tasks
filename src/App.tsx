import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript. Miryam Ramirez
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World</p>
            <h1>Header Goes Here</h1>
            <ul>
                <li>Coffee</li>
                <li>Juice</li>
                <li> Milk tea</li>
            </ul>
            <Button>Button</Button>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        first column
                        <div className="shape1"></div>
                    </Col>
                    <Col>
                        second column
                        <div className="shape2"></div>
                    </Col>
                </Row>
            </Container>
            <img
                src="https://cdn10.bostonmagazine.com/wp-content/uploads/2014/11/cat-cafe.jpg"
                alt="A picture of coffee cat :3"
            />
        </div>
    );
}

export default App;
