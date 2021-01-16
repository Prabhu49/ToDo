import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Utils from './Utils';

const TaskList = () => {
    const [key, setKey] = React.useState(false);
    
    const handleChange = (item, statusId) => {
        let taskIndex = Utils.taskData.findIndex((task) => task.taskId === item.taskId)
        Utils.taskData[taskIndex].statusId = statusId;
        setKey(!key);
    };
    let inCompleteTasks = Utils.taskData.filter((task) => task.statusId === Utils.taskStatusIds.inComplete);

    return (
        <Container className='tasklist-container' key={key}>
            {
                inCompleteTasks.map((item, index) => {
                    return <Row key={index}>
                        <Col sm={2}>
                            <Form.Group>
                                <Form.Check type="checkbox" onChange={() => handleChange(item, Utils.taskStatusIds.complete)} />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <p>{item.taskName}</p>
                        </Col>
                        <Col sm={4}>
                            {/* <Button variant="default" type='button'>Update</Button> */}
                            <Button variant="default" type='button'>Delete</Button>
                        </Col>
                    </Row>
                })
            }
        </Container>
    );
}

export default TaskList;
