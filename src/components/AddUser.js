import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Button, Card } from "react-materialize";
import { addUser } from "../features/Users";

export default function AddUser() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    // }
    return (
        <Container>
            <Card>
                <input
                    label="name"
                    name="name"
                    placeholder='Name'
                    value={name}
                    onChange={(event) => { setName(event.target.value); }}
                />
                <input
                    label="username"
                    name="username"
                    placeholder='Username'
                    value={username}
                    onChange={(event) => { setUsername(event.target.value); }}
                />
                <Button className='bt' onClick={() => {
                    dispatch(addUser({ id: 0, name: name, username: username }));
                }}
                >
                    Add user
                </Button>
            </Card>
        </Container>
    );
} 