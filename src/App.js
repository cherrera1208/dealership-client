import React from 'react';
import Header from './components/Header';
import SiteNav from './components/SiteNav';
import Main from './components/Main';
import Footer from './components/Footer';



class App extends React.Component {
  render() {
    return (
      
      <>
        <SiteNav/>
        <h1>Purple dealership</h1>;
        <Header />
        <Main />
        <Footer />
      </>
     
    );
  }
}

export default App;
