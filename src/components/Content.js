import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class Content extends React.Component {
  render() {
    return (
      <h1>content</h1>
    )
  }
}

export default withAuth0(Content); 
