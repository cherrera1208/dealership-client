import React from 'react';
import { Card } from 'react-bootstrap';
import '../css/Cars.css';
import '../css/Banner.css';

class Cars extends React.Component {
  render() {
    const handleCarClick = this.props.handleCarClick;
    const carsInventory = this.props.carsInventory;

    let carsList = carsInventory.map((car, idx) => {
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
        <div>
          <div className='inv_banner'>
            <h1>Our Inventory</h1>
          </div>
          <div className='cars-container'>{carsList}</div>
        </div>
      </>
    );
  }
}

export default Cars;
