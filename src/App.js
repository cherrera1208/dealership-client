import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredCars: [],
    };
  }

  getCars = async (req, res) => {
    try {
      let result = await axios.get(`${SERVER}/cars`);
      this.setState({
        featuredCars: result.data,
      });

      return result;
    } catch (error) {
      console.log('we have an error: ', error.response.data);
    }
  };

  componentDidMount() {
    this.getCars();
  }

  render() {
    return (
      <>
        <h1>Purple dealership</h1>
        <Header />
        <Main featuredCars={this.state.featuredCars} />
        <Footer />
      </>
    );
  }
}

export default App;
