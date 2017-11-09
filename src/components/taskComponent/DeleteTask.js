import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

class DeleteTask extends Component {
    constructor (props) {
        super(props);
        this.state = {
          show: false
        };
        
        this.toggleModal = this.toggleModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleDeleteModal = this.handleDeleteModal.bind(this);
      }
      
      toggleModal() {        
        this.setState({ 
            show: !this.state.show
        });
      }

      handleDeleteModal() {
        this.setState({ 
          show: false
        });
        console.log("Deleted");
      }
      
      handleCloseModal () {
        this.setState({ 
          show: false
        });
      }
      
      render () {
        return (
          <div >
            <Button onClick={this.toggleModal} color="secondary">Delete</Button>
            <Modal isOpen={this.state.show} toggle={this.toggleModal} >
              <ModalBody>
                Are you sure to delete this task?
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.handleDeleteModal}>Delete</Button>
                <Button color="primary" onClick={this.handleCloseModal}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }
}

export default DeleteTask;