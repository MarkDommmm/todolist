import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../Action/Creator';
import { v4 as uuidv4 } from 'uuid';

function Home() {
    const list = useSelector(state => console.log(state))
    const dispatch = useDispatch()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [address, setAddress] = useState()
    const [gender, setGender] = useState()

    const handleClickButton = (e) => {
        e.preventDefault()
        dispatch(addTodo({
            id: uuidv4(),
            email: email,
            password: password,
            address: address,
            gender: gender,
        }))
    }
    return (
        <div className='todolist' >

            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control

                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            onChange={(e) => setPassword(e.target.value)}

                            type="password"
                            placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        onChange={(e) => setAddress(e.target.value)}

                        placeholder="1234 Main St" />
                </Form.Group>

                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select
                            onChange={(e) => setGender(e.target.value)}
                            defaultValue="Choose..." >
                            <option>Choose...</option>
                            <option value={'Male'}>Male</option>
                            <option value={"Female"}>Female</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Button
                    onClick={handleClickButton}
                    variant="primary"
                    type="submit">
                    Submit
                </Button>

            </Form>
        </div >
    )
}

export default Home 