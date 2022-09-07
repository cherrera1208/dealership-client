import React from 'react';
import { Link } from 'react-router-dom';
import SiteNav from './SiteNav';
import Footer from './Footer';

class About extends React.Component {
  render() {
    return (
      <>
        <SiteNav />
        <Link to='/'>Home</Link>
        <h1>About Us</h1>
        <Footer />
      </>
    );
  }
}

export default About;
