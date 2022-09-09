import React from 'react';
import Featured from './Featured';
import Cars from './Cars';

class Main extends React.Component {
  render() {
    return (
      <>
        <Featured className='feature_body'
          featuredCars={this.props.featuredCars}
          handleCarClick={this.props.handleCarClick}
        />
        <Cars
          carsInventory={this.props.carsInventory}
          handleCarClick={this.props.handleCarClick}
        />
      </>
    );
  }
}

export default Main;
