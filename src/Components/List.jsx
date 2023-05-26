import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodo } from '../Action/Creator';

function DarkExample() {
    const user = useSelector((state) => state.todo)
    // console.log(user);
    const dispatch = useDispatch()
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Address</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {user.map((e, i) => (
                    <tr key={i}>
                        <td>{e.id}</td>
                        <td>{e.email}</td>
                        <td>{e.password}</td>
                        <td>{e.address}</td>
                        <td>{e.gender}</td>
                        <td>
                            <Button variant="success">View</Button>{' '}
                            <Button 
                                onClick={() => dispatch(updateTodo(i,e))}

                            variant="warning">Edit</Button>{' '}
                            <Button
                                onClick={() => dispatch(deleteTodo(i))}
                                variant="danger">Delete</Button>{' '}
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table >
    );
}

export default DarkExample;