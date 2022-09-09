import React from 'react';
import { Button, Form, Image, Modal } from 'react-bootstrap';
import '../css/Modal.css';
import axios from 'axios';

class CarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      make: '',
      model: '',
      year: '',
      car_img: '',
      cylinders: '',
      miles: '',
      highway_mpg: '',
      city_mpg: '',
      combination_mpg: '',
      drive: '',
      transmission: '',
      class: '',
      displacement: '',
      color: '',
      price: '',
      description: '',
    };
  }

  handleChange = (e) => {
    const apiCondition = this.state.year.toString().length;
    // console.log(apiCondition);
    // apiCondition >= 3 ? this.getApi() : console.log('');

    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  getApi = async (req, res) => {
    try {
      let result = await axios.get(
        `http://localhost:3001/api?make=honda&model=civic&year=2002`
      );
      // console.log(result.data);
      this.setState(...result.data);
    } catch (error) {
      console.log('we have an error: ', error.response);
    }
  };

  componentDidMount() {
    // this.getApi();
  }

  render() {
    // console.log(this.state);
    let handleSubmit = (e) => {
      e.preventDefault();
      console.log('we here');
      this.props.handleCarSubmit(this.state);
      this.props.handleCarFormModal(false);
    };
    const showCarForm = this.props.showCarFormModal;
    const handleCarFormModal = () => {
      this.props.handleCarFormModal(false);
    };

    return (
      <>
        <Modal show={showCarForm} onHide={handleCarFormModal} id='CarEditModal'>
          <Modal.Header closeButton>
            <Modal.Title>Edit Car</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId='make' required>
                <Form.Label>Make</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='e.g. Mazda'
                  onChange={this.handleChange}
                  value={this.state.make}
                />
              </Form.Group>
              <Form.Group controlId='model'>
                <Form.Label>Model</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='e.g. RX8'
                  onChange={this.handleChange}
                  value={this.state.model}
                />
              </Form.Group>
              <Form.Group controlId='year'>
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='e.g. 2009'
                  onChange={this.handleChange}
                  value={this.state.year}
                />
              </Form.Group>
              <Form.Group controlId='car_img'>
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='e.g. www.googledrive.com/carpicture.jpg'
                  onChange={this.handleChange}
                  value={this.state.car_img}
                />
              </Form.Group>
              <Form.Group controlId='cylinders'>
                <Form.Label>Cylinders</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='e.g. 2'
                  onChange={this.handleChange}
                  value={this.state.cylinders}
                />
              </Form.Group>
              <Form.Group controlId='miles'>
                <Form.Label>Miles</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='e.g. 24,000'
                  onChange={this.handleChange}
                  value={this.state.miles}
                />
              </Form.Group>
              <Form.Group controlId='highway_mpg'>
                <Form.Label>Highway MPG</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='e.g. 23'
                  onChange={this.handleChange}
                  value={this.state.highway_mpg}
                />
              </Form.Group>

              <Form.Group controlId='city_mpg'>
                <Form.Label>City MPG</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='e.g. 16'
                  onChange={this.handleChange}
                  value={this.state.city_mpg}
                />
              </Form.Group>
              <Form.Group controlId='combination_mpg'>
                <Form.Label>Combine MPG</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='e.g. 23'
                  onChange={this.handleChange}
                  value={this.state.combination_mpg}
                />
              </Form.Group>
              <Form.Group controlId='drive'>
                <Form.Label>Drive</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='e.g. rwd'
                  onChange={this.handleChange}
                  value={this.state.drive}
                />
              </Form.Group>
              <Form.Group controlId='transmission'>
                <Form.Label>Transmission</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='e.g. manual'
                  onChange={this.handleChange}
                  value={this.state.transmission}
                />
              </Form.Group>
              <Form.Group controlId='class'>
                <Form.Label>Class</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='e.g. sedan'
                  onChange={this.handleChange}
                  value={this.state.class}
                />
              </Form.Group>
              <Form.Group controlId='displacement'>
                <Form.Label>Displacement</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='e.g. 1.3'
                  onChange={this.handleChange}
                  value={this.state.displacement}
                />
              </Form.Group>
              <Form.Group controlId='fuel'>
                <Form.Label>Fuel type</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='e.g. gasoline'
                  onChange={this.handleChange}
                  value={this.state.fuel_type}
                />
              </Form.Group>
              <Form.Group controlId='color'>
                <Form.Label>Color</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='e.g. red'
                  onChange={this.handleChange}
                  value={this.state.color}
                />
              </Form.Group>
              <Form.Group controlId='price'>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='e.g. $30,000'
                  onChange={this.handleChange}
                  value={this.state.price}
                />
              </Form.Group>
              <Form.Group controlId='description'>
                <Form.Label>description</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='e.g. Description of the car'
                  onChange={this.handleChange}
                  value={this.state.description}
                />
              </Form.Group>
              <Form.Group controlId='featured'>
                <Form.Check
                  type='checkbox'
                  label='Featured'
                  // onChange={this.handleChange}
                  // value={this.state.featured}
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Add Car
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default CarForm;
