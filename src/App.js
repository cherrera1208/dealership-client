import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import SiteNav from './components/SiteNav';
import Main from './components/Main';
import Footer from './components/Footer';
import CarModal from './components/CarModal';
import CarForm from './components/CarForm';
import CarEdit from './components/CarEdit';

const SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredCars: [],
      carsInventory: [],
      showCarModal: false,
      showCarFormModal: false,
      showCarEditModal: false,
      editMode: true,
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
      console.log('we have an error: ', error.response);
    }
  };

  // deleteCar = async (req, res) => { };

  handleCarModal = (show) => {
    show
      ? this.setState({
        showCarModal: true,
      })
      : this.setState({
        showCarModal: false,
      });
  };

  handleCarEditModal = (show) => {
    show
      ? this.setState({
        showCarEditModal: true,
      })
      : this.setState({
        showCarEditModal: false,
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
    // let editMode = this.state.editMode;
    this.props.auth0.isAuthenticated
      ? this.handleCarEditModal(true)
      : this.handleCarModal(true);
    this.setState({
      carModal: car,
    });
  };

  handleCarSubmit = async (car) => {
    try {
      let result = await axios.post(`${SERVER}/cars`, car);
      this.setState({
        carsInventory: [result.data, ...this.state.carsInventory],
      });
    } catch (error) {
      console.log('we have an error: ', error.response.data);
    }
  };

  handleCarDelete = async (car) => {
    try {
      let result = await axios.delete(`${SERVER}/cars/${car._id}`);
      let filteredCars = this.state.carsInventory.filter((el) =>
        el._id === result.data._id ? false : true
      );
      this.setState({
        carsInventory: filteredCars,
      });
      this.handleCarModal(false);
    } catch (error) {
      console.log('we have an error: ', error.response.data);
    }
  };

  handleCarEdit = async (car) => {
    console.log(car);
    try {
      let result = await axios.put(`${SERVER}/cars/${car._id}`, car);
      this.getCars();
      console.log(result);
    } catch (error) {
      console.log('we have an error: ', error.response.data);
    }
  };

  componentDidMount() {
    this.getCars();
  }

  render() {
    let editMode = false;
    if (this.props.auth0.isAuthenticated) {
      editMode = true;
    }
    return (
      <>
        {/* {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />};
        {this.props.auth0.isAuthenticated ? <Profile /> : <h2>Please Login</h2>} */}
        <SiteNav
          editMode={editMode}
          handleCarFormModal={this.handleCarFormModal}
        />
        <Header />
        <Main
          featuredCars={this.state.featuredCars}
          carsInventory={this.state.carsInventory}
          handleCarClick={this.handleCarClick}
        // editMode={editMode}
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
        <CarEdit
          carModal={this.state.carModal}
          showCarEditModal={this.state.showCarEditModal}
          handleCarEditModal={this.handleCarEditModal}
          handleCarDelete={this.handleCarDelete}
          handleCarEdit={this.handleCarEdit}
        />
        <Footer />
      </>
    );
  }
}

export default withAuth0(App);
