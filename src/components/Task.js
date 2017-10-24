import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody,ButtonGroup, ButtonDropdown, DropdownItem,
    CardFooter,  CardTitle, CardText, DropdownMenu, DropdownToggle } from 'reactstrap';

class Task extends Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            count: 1500,
            minutes: 25, // get this and change it everytime 60 seconds pass
            seconds: 60 // reset every 60 seconds
        }

        this.toggle = this.toggle.bind(this);
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

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    resetTimer() {
        this.setState({
            minutes: 25,
            seconds: 60
        });
    }

    render() {
        return <div>
            <Card>
                <CardHeader>Task title</CardHeader>
                <CardBody>
                    <CardTitle>{this.state.minutes}:{this.state.seconds === 60 ? "00" : this.state.seconds}</CardTitle>
                    <CardText>Task description</CardText>
                </CardBody>
                <CardFooter>
                    <ButtonGroup>
                        <Button onClick={this.startTimer} >Start</Button>
                        <Button onClick={this.stopTimer} >Stop</Button>
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                            Dropdown
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={this.resetTimer} >Reset</DropdownItem>
                            <DropdownItem>Edit</DropdownItem>
                            <DropdownItem>Delete</DropdownItem>
                        </DropdownMenu>
                        </ButtonDropdown>
                    </ButtonGroup>
                </CardFooter>
            </Card>    
        </div>
    }
};

export default Task;