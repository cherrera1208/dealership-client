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
            <ListGroup.Item>{`Make: ${car.make || ''}`}</ListGroup.Item>
            <ListGroup.Item>{`Model: ${car.model || ''}`}</ListGroup.Item>
            <ListGroup.Item>{`Year: ${car.year || ''}`}</ListGroup.Item>
            <ListGroup.Item>{`Color: ${car.color || ''}`}</ListGroup.Item>
            <ListGroup.Item>{`Drive: ${car.drive || ''}`}</ListGroup.Item>
            <ListGroup.Item>{`Transmission: ${
              car.transmission || ''
            }`}</ListGroup.Item>
            <ListGroup.Item>{`Cylinders: ${
              car.cylinders || ''
            }`}</ListGroup.Item>
            <ListGroup.Item>{`Displacement: ${
              car.displacement || ''
            }`}</ListGroup.Item>
            <ListGroup.Item>{`Highway MPG: ${
              car.highway_mpg || ''
            }`}</ListGroup.Item>
            <ListGroup.Item>{`City MPG: ${car.city_mpg || ''}`}</ListGroup.Item>
            <ListGroup.Item>{`Combination MPG: ${
              car.combination_mpg || ''
            }`}</ListGroup.Item>
            <ListGroup.Item>{`Miles: ${car.miles || ''}`}</ListGroup.Item>
            <ListGroup.Item>{`Price: ${car.price || ''}`}</ListGroup.Item>
            <ListGroup.Item>{`Description: ${
              car.description || ''
            }`}</ListGroup.Item>
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
