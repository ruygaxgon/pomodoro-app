import React from 'react';
import { Card, Button, CardHeader, CardBody, CardDeck,
  CardTitle, CardText } from 'reactstrap';

const Timer = (props) => {
  return (
    <div style={ { width: '50%' } }>
        <CardDeck>
            <Card>
                <CardHeader>Task title</CardHeader>
                <CardBody>
                <CardTitle>25:00</CardTitle>
                <CardText>Task description</CardText>
                <Button>Start</Button>{' '}
                <Button>Stop</Button>
                </CardBody>
            </Card>
            <Button>Add Task</Button>      
      </CardDeck>
    </div>
  );
};

export default Timer;