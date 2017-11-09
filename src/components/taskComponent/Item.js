import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardLink, CardImg, Container, Row, Col, CardFooter } from 'reactstrap';
import DeleteItem from "./DeleteItem.js";
import EditItem from "./EditItem.js";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  refresh() {
    this.props.refresh();
  }

  render() {
    return <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.props.content.name}</CardTitle>
          <CardLink href={this.props.content.link}>Link</CardLink>
        </CardBody>
        <CardFooter>
          <Container>
            <Row>
              <Col><EditItem item={this.props.content} refresh={this.props.refresh} /></Col>
              <Col><DeleteItem item={this.props.content} refresh={this.props.refresh} /></Col>              
            </Row>
          </Container>
        </CardFooter>
      </Card>
  </div>
  }
}

export default Item;