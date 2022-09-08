import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

class CarForm extends React.Component {
  // handleChange = (e) => {
  // console.log(e.target.value);
  // this.setState({
  //   [e.target.name]: e.target.value,
  // });
  // };

  render() {
    let handleSubmit = (e) => {
      e.preventDefault();
      handleCarFormModal();

      let newCar = {
        make: e.target.make.value,
        model: e.target.model.value,
        year: e.target.year.value,
        car_img: e.target.car_img.value,
        cylinders: e.target.cylinders.value,
        miles: e.target.miles.value,
        highway_mpg: e.target.highway_mpg.value,
        city_mpg: e.target.city_mpg.value,
        combination_mpg: e.target.combination_mpg.value,
        drive: e.target.drive.value,
        transmission: e.target.transmission.value,
        class: e.target.class.value,
        displacement: e.target.displacement.value,
        fuel: e.target.fuel.value,
        price: e.target.price.value,
        description: e.target.description.value,
        featured: e.target.featured.checked,
      };
      this.props.handleCarSubmit(newCar);
    };

    const showCarForm = this.props.showCarFormModal;
    const handleCarFormModal = () => {
      this.props.handleCarFormModal(false);
    };

    return (
      <>
        
        <Modal show={showCarForm} onHide={handleCarFormModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Car</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId='make' required>
                <Form.Label>Make</Form.Label>
                <Form.Control type='text' placeholder='e.g. Mazda' />
              </Form.Group>
              <Form.Group controlId='model'>
                <Form.Label>Model</Form.Label>
                <Form.Control type='text' placeholder='e.g. RX8' />
              </Form.Group>
              <Form.Group controlId='year'>
                <Form.Label>Year</Form.Label>
                <Form.Control type='number' placeholder='e.g. 2009' />
              </Form.Group>
              <Form.Group controlId='car_img'>
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='e.g. www.googledrive.com/carpicture.jpg'
                />
              </Form.Group>
              <Form.Group controlId='cylinders'>
                <Form.Label>Cylinders</Form.Label>
                <Form.Control type='number' placeholder='e.g. 2' />
              </Form.Group>
              <Form.Group controlId='miles'>
                <Form.Label>Miles</Form.Label>
                <Form.Control type='number' placeholder='e.g. 24,000' />
              </Form.Group>
              <Form.Group controlId='highway_mpg'>
                <Form.Label>Highway MPG</Form.Label>
                <Form.Control type='number' placeholder='e.g. 23' />
              </Form.Group>

              <Form.Group controlId='city_mpg'>
                <Form.Label>City MPG</Form.Label>
                <Form.Control type='number' placeholder='e.g. 16' />
              </Form.Group>
              <Form.Group controlId='combination_mpg'>
                <Form.Label>Combine MPG</Form.Label>
                <Form.Control type='number' placeholder='e.g. 23' />
              </Form.Group>
              <Form.Group controlId='drive'>
                <Form.Label>Drive</Form.Label>
                <Form.Control type='text' placeholder='e.g. rwd' />
              </Form.Group>
              <Form.Group controlId='transmission'>
                <Form.Label>Transmission</Form.Label>
                <Form.Control type='text' placeholder='e.g. manual' />
              </Form.Group>
              <Form.Group controlId='class'>
                <Form.Label>Class</Form.Label>
                <Form.Control type='text' placeholder='e.g. sedan' />
              </Form.Group>
              <Form.Group controlId='displacement'>
                <Form.Label>Displacement</Form.Label>
                <Form.Control type='number' placeholder='e.g. 1.3' />
              </Form.Group>
              <Form.Group controlId='fuel'>
                <Form.Label>Fuel type</Form.Label>
                <Form.Control type='text' placeholder='e.g. gasoline' />
              </Form.Group>
              <Form.Group controlId='price'>
                <Form.Label>Price</Form.Label>
                <Form.Control type='number' placeholder='e.g. $30,000' />
              </Form.Group>
              <Form.Group controlId='description'>
                <Form.Label>description</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='e.g. Description of the car'
                />
              </Form.Group>
              <Form.Group controlId='featured'>
                <Form.Check type='checkbox' label='Featured' />
              </Form.Group>
              <Modal.Footer>
                <Button variant='primary' type='submit'>
                  Add Car
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default CarForm;
