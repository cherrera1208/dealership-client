import React from 'react';
import Featured from './Featured';

class Main extends React.Component {
  render() {
    return (
      <>
        <h1>Main</h1>
        <Featured featuredCars={this.props.featuredCars} />
      </>
    );
  }
}

export default Main;
