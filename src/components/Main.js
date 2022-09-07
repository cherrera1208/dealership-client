import React from 'react';
import Featured from './Featured';
import Cars from './Cars';

class Main extends React.Component {
  render() {
    return (
      <>
        <h1>Main</h1>
        <Featured featuredCars={this.props.featuredCars} />
        <Cars carsInventory={this.props.carsInventory} />
      </>
    );
  }
}

export default Main;
