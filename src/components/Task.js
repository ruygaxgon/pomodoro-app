import React from 'react';
import { Card, Button, CardHeader, CardBody,  CardTitle, CardText } from 'reactstrap';

const Task = (props) => {
  return (
    <div>
        <Card>
            <CardHeader>Task title</CardHeader>
            <CardBody>
                <CardTitle>25:00</CardTitle>
                <CardText>Task description</CardText>
                <Button>Start</Button>{' '}
                <Button>Stop</Button>
            </CardBody>
        </Card>    
    </div>
  );
};

export default Task;