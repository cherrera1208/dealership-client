import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Featured extends React.Component {
  render() {
    const featuredCars = this.props.featuredCars;
    console.log(featuredCars);
    let cars = featuredCars.map((car) => {
      return (
        <Carousel.Item>
          <img className='w-100' src={car.car_img} alt='car' />
          <Carousel.Caption>
            <h3>{`${car.make} ${car.model}`}</h3>
            <p>Best handling car in it's class. Get smoked 🚗💨</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
    return <Carousel>{cars}</Carousel>;
  }
}

export default Featured;
