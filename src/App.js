import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import SiteNav from './components/SiteNav';
import Main from './components/Main';
import Footer from './components/Footer';
import CarModal from './components/CarModal';
import CarForm from './components/CarForm';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

const SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredCars: [],
      carsInventory: [],
      showCarModal: false,
      showCarFormModal: true,
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

  handleCarSubmit = async (car) => {
    let result = await axios.post(`${SERVER}/cars`, car);
    console.log(car);
    console.log(result);
  };

  componentDidMount() {
    this.getCars();
  }

  render() {
    return (
      <>
        {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />};
        {this.props.auth0.isAuthenticated ? <Profile /> : <h2>Please Login</h2>}
        <SiteNav />
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
          handleCarSubmit={this.handleCarSubmit}
        />
        <Footer />
      </>
    );
  }
}

export default withAuth0(App);
