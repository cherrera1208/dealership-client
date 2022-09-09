import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/Featured.css';

class Featured extends React.Component {
  render() {
    const featuredCars = this.props.featuredCars;
    let cars = featuredCars.map((car, idx) => {
      return (
        <Carousel.Item key={idx} onClick={() => this.props.handleCarClick(car)}>
          <img className='w-100' src={car.car_img} alt='car' />
          <Carousel.Caption>
            <h3>{`${car.make} ${car.model}`}</h3>
            <p>{car.description || '🚗💨'}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
    return (
      <>
        <Carousel>{cars}</Carousel>
      </>
    );
  }
}

export default Featured;
