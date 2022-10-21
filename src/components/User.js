import React from "react";
import { useState } from 'react';
import { Button, Collection, Container } from 'react-materialize';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteUser, selectUser, updateUsername } from '../features/Users';
export default function User() {
    const dispatch = useDispatch();
    const userList = useSelector(selectUser);
    const [newUsername, setNewUsername] = useState('');
    {
        userList.map((user) => {
            return (
                <Container>
                    <Collection key={user.id} >
                        <p primary={user.name} secodary={user.username} />
                        <input
                            placeholder='Type new username...'
                            onChange={(e) => setNewUsername(e.target.value)}
                        />
                        <Button
                            onClick={() => {
                                dispatch(updateUsername({ id: user.id, username: newUsername }));
                            }}>
                            Update
                        </Button>
                        <i class="material-icons"
                            onClick={() => {
                                dispatch(deleteUser({ id: user.id }));
                            }}>delete</i>
                    </Collection>
                </Container>
            )
        })
    }

}