import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './AddTask.css';

class AddTask extends Component {
    constructor (props) {
        super(props);
        this.state = {
          showModal: false,
          newTask: { uuid: "", description: "", title: ""}
        };
        
        this.toggle = this.toggle.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSaveModal = this.handleSaveModal.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.guid = this.guid.bind(this);
      }

      componentWillMount() {
        this.setState({
          newTask: { uuid: this.guid(), description: "", title: ""}
        });
      }

      handleDescriptionChange(e) {
        this.setState({
          newTask: { uuid: this.state.newTask.uuid, description: e.target.value, title: this.state.newTask.title }
        })
      }
      
      handleTitleChange(e) {
        this.setState({
          newTask: { uuid: this.state.newTask.uuid, description: this.state.newTask.description, title: e.target.value }
        })
      }

      guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
      }

      toggle() {
        this.setState({ 
            showModal: !this.state.showModal,
            newTask: { uuid: this.state.newTask.uuid, description: "", title: ""}
        });
      }

      handleSaveModal() {
        this.setState({ 
          showModal: false,
          newTask: { uuid: this.guid(), description: this.state.newTask.description, title:  this.state.newTask.title }
        });
        
        this.props.addNewTask(this.state.newTask);        
      }
      
      handleCloseModal () {
        this.setState({ 
          showModal: false,
          newTask: { uuid: "", description: "", title: ""}
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