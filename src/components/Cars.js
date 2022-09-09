import React from 'react';
import { Card } from 'react-bootstrap';
import '../css/Cars.css';

class Cars extends React.Component {
  render() {
    const handleCarClick = this.props.handleCarClick;
    const carsInventory = this.props.carsInventory;

    let carsList = carsInventory.map((car, idx) => {
      console.log(car);
      return (
        <Card
          onClick={() => handleCarClick(car)}
          style={{ width: '300px' }}
          key={idx}
        >
          <Card.Img variant='top' src={car.car_img} />
          <Card.Title>{`${car.make} ${car.model}`}</Card.Title>
          <Card.Text>{car.description}</Card.Text>
        </Card>
      );
    });

    return (
      <>
        <h1>Our Inventory</h1>
        <div className='cars-container'>{carsList}</div>
      </>
    );
  }
}

export default Cars;
