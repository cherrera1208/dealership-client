import React from 'react';
import { Button, Image, ListGroup, Modal } from 'react-bootstrap';

class CarModal extends React.Component {
  render() {
    const handleCarModal = this.props.handleCarModal;
    const car = this.props.carModal;

    return (
      <Modal
        show={this.props.showCarModal}
        onHide={() => handleCarModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>{`${car.make} ${car.model}`}</Modal.Title>
        </Modal.Header>
        <Image src={car.car_img} />
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>{`Make: ${car.make}`}</ListGroup.Item>
            <ListGroup.Item>{`Model: ${car.model}`}</ListGroup.Item>
            <ListGroup.Item>{`Year: ${car.year}`}</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleCarModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CarModal;
