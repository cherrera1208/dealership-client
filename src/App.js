import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Purple dealership</h1>;
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
