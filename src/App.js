import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import SiteNav from './components/SiteNav';
import Main from './components/Main';
import Footer from './components/Footer';
import CarModal from './components/CarModal';
import CarForm from './components/CarForm';

const SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredCars: [],
      carsInventory: [],
      showCarModal: false,
      showCarFormModal: false,
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

  handleCarFormModal = (show) => {
    show
      ? this.setState({
          showCarFormModal: true,
        })
      : this.setState({
          showCarFormModal: false,
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
        <SiteNav />
        <h1>Purple dealership</h1>;
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
        <CarForm
          showCarFormModal={this.state.showCarFormModal}
          handleCarFormModal={this.handleCarFormModal}
        />
        <Footer />
      </>
    );
  }
}

export default App;
