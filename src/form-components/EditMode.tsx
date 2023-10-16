import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEdit, setIsEdit] = useState<boolean>(false); //edit mode
    const [username, setUsername] = useState<string>("Your Name"); //user's name
    const [isStudent, setIsStudent] = useState<boolean>(true); //status as student

    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEdit(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-check"
                label=""
                checked={isEdit}
                onChange={updateEdit}
            />

            <div>
                {isEdit ? (
                    <div>
                        <Form.Check
                            type="checkbox"
                            id="is-student-check"
                            label="Student?"
                            checked={isStudent}
                            onChange={updateStatus}
                        />
                        <Form.Group>
                            <Form.Control
                                type="string"
                                value={username}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setUsername(event.target.value)}
                            />
                        </Form.Group>
                    </div>
                ) : (
                    <div>
                        {isStudent
                            ? username + " is a student"
                            : username + " is not a student"}
                    </div>
                )}
            </div>
        </div>
    );
}
