import './App.css';
import React, { useState } from 'react';
import { InputGroup, FormControl, Container, Button, Form } from 'react-bootstrap';
import './App.css';
import TaskList from './TaskList';
import Utils from './Utils';

let taskArray = [], taskId = 0;

function App() {
  const [taskInput, setTask] = useState('');
  const [showTaskList, setShowList] = useState(false);

  const onTaskInput = (event) => {
    setTask(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    taskArray.push({ taskId: ++taskId, taskName: taskInput.trim(), statusId: Utils.taskStatusIds.inComplete });
    // StatusId : 1 for incomplete task, 2 for complete and 3 for deleted task
    Utils.taskData = taskArray;
    setShowList(true);
    setTask('');
  }

  return (
    <>
      <h1 className='heading_style'>To-Dos</h1>
      <Container className='container-design'>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <FormControl
              placeholder="Add Your Task"
              onChange={onTaskInput}
              value={taskInput}
              required={true}
            />
            <InputGroup.Append>
              <Button variant="primary" type='submit'>+ Add</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        {
          showTaskList ?
            <TaskList />
            : null
        }
      </Container>
    </>
  );
}

export default App;
