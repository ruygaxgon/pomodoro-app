import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Alert } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './AddTask.css';

class AddTask extends Component {
    constructor (props) {
        super(props);
        this.state = {
          showModal: false,
          newTask: { description: "", title: ""},
          visible: false
        };
        
        this.toggle = this.toggle.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSaveModal = this.handleSaveModal.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
      }

      componentWillMount() {
        this.setState({
          newTask: { description: "", title: ""}
        });
      }

      handleDescriptionChange(e) {
        this.setState({
          newTask: { description: e.target.value, title: this.state.newTask.title }
        })
      }
      
      handleTitleChange(e) {
        this.setState({
          newTask: { description: this.state.newTask.description, title: e.target.value }
        })
      }

      toggle() {
        this.setState({ 
            showModal: !this.state.showModal,
            newTask: { description: "", title: ""}
        });
      }

      handleSaveModal() {
        if(this.state.newTask.description === "" || this.state.newTask.title === "") {
          this.setState({ visible: true });
        } else {
          this.setState({ 
            showModal: false,
            newTask: { description: this.state.newTask.description, title:  this.state.newTask.title }
          });
          
          this.props.addNewTask(this.state.newTask);
        }
      }

      onDismiss() {
        this.setState({ visible: false });
      }
      
      handleCloseModal () {
        this.setState({ 
          showModal: false,
          newTask: { description: "", title: ""}
        });
      }
      
      render () {
        return (
          <div >
            <Button className='Fixedbutton' onClick={this.toggle} color="secondary">Add Task</Button>
            <Modal isOpen={this.state.showModal} toggle={this.toggle} >
              <ModalHeader toggle={this.toggle}>New Task</ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup>
                    <Input placeholder="Task title" value={this.state.newTask.title} onChange={this.handleTitleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Input type="textarea" placeholder="Task description" value={this.state.newTask.description} onChange={this.handleDescriptionChange} />
                  </FormGroup>
                </Form>
                <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
                  Title and/or description are empty.
                </Alert>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.handleSaveModal}>Save</Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }
}

export default AddTask;