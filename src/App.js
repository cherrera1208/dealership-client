import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CarModal from './components/CarModal';

const SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredCars: [],
      carsInventory: [],
      showCarModal: false,
      carModal: {},
    };
  }

  getCars = async (req, res) => {
    try {
      let result = await axios.get(`${SERVER}/cars`);
      this.setState({
        // Change for different data after we get more in the database
        featuredCars: result.data,
        carsInventory: result.data,
      });

      return result;
    } catch (error) {
      console.log('we have an error: ', error.response.data);
    }
  };

  handleCarModal = (show) => {
    show
      ? this.setState({
          showCarModal: true,
        })
      : this.setState({
          showCarModal: false,
        });
  };

  handleCarClick = (car) => {
    this.handleCarModal(true);
    this.setState({
      carModal: car,
    });
  };

  componentDidMount() {
    this.getCars();
  }

  render() {
    return (
      <>
        <h1>Purple dealership</h1>
        <Header />
        <Main
          featuredCars={this.state.featuredCars}
          carsInventory={this.state.carsInventory}
          handleCarClick={this.handleCarClick}
        />
        <CarModal
          handleCarModal={this.handleCarModal}
          showCarModal={this.state.showCarModal}
          carModal={this.state.carModal}
        />
        <Footer />
      </>
    );
  }
}

export default App;
