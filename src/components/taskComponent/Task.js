import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody,
    CardFooter,  CardTitle, CardText, Row, Col } from 'reactstrap';
import DeleteTask from './DeleteTask.js';
import EditTask from './EditTask.js';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1500,
            minutes: 25, // get this and change it everytime 60 seconds pass
            seconds: 60 // reset every 60 seconds
        }

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    componentWillUnmount () {
        clearInterval(this.timer)
    }
    
    tick () {
        var min = this.state.minutes;
        var sec = this.state.seconds - 1;
        if(sec === 0) {
            min = min - 1;
            sec = 60;
        }
        this.setState({
            count: (this.state.count + 1),
            minutes: this.parseTime(min),
            seconds: this.parseTime(sec)
        });
    }
    
    parseTime(i) {
        if (i < 10) {
            i = "0" + i
        }
        return i;
    }

    startTimer () {
        clearInterval(this.timer)
        this.timer = setInterval(this.tick.bind(this), 1000)
    }

    stopTimer () {
        clearInterval(this.timer)
    }

    resetTimer() {
        this.setState({
            minutes: 25,
            seconds: 60
        });
    }

    render() {
        return <div>
            <Card body className="text-center" >
                <CardHeader>{this.props.content.title}</CardHeader>
                <CardBody>
                    <CardTitle><h1>{this.state.minutes}:{this.state.seconds === 60 ? "00" : this.state.seconds}</h1></CardTitle>
                    <CardText>{this.props.content.description}</CardText>
                </CardBody>
                <CardFooter>
                    <Row>
                        <Col>
                            <Button onClick={this.startTimer} >Start</Button>
                        </Col>
                        <Col>
                            <Button onClick={this.stopTimer} >Stop</Button>
                        </Col>
                        <Col>
                            <Button onClick={this.resetTimer} >Reset</Button>
                        </Col>
                        <Col>
                            <EditTask task={this.props.content} refresh={this.props.refresh} />
                        </Col>
                        <Col>
                            <DeleteTask refresh={this.props.refresh} />
                        </Col>
                    </Row>
                </CardFooter>
            </Card>    
        </div>
    }
};

export default Task;