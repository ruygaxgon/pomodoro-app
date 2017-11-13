import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class EditTask extends Component {
    constructor (props) {
        super(props);
        this.state = {
          showModal: false,
          editTask: this.props.task
        };
        
        this.toggle = this.toggle.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSaveModal = this.handleSaveModal.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
      }

      handleDescriptionChange(e) {
        this.setState({
          editTask: { description: e.target.value, title: this.state.editTask.title }
        })
      }

      handleTitleChange(e) {
        this.setState({
          editTask: { description: this.state.editTask.description, title: e.target.value }
        })
      }
      
      toggle() {
        this.setState({ 
            showModal: !this.state.showModal
        });
      }

      handleSaveModal() {
        this.setState({ 
          showModal: false
        });

        this.props.refresh(this.state.editTask);        
      }
      
      handleCloseModal () {
        this.setState({ 
          showModal: false
        });
      }
      
      render () {
        return (
          <div >
            <Button onClick={this.toggle} color="secondary">Edit</Button>
            <Modal isOpen={this.state.showModal} toggle={this.toggle} >
              <ModalHeader toggle={this.toggle}>Edit task</ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup>
                    <Input id="title" placeholder="Title"
                    value={this.state.editTask.title} onChange={this.handleTitleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Input type="textarea" placeholder="Description"
                     value={this.state.editTask.description} onChange={this.handleDescriptionChange} />
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

export default EditTask;