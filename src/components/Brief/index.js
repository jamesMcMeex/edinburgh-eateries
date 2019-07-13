import React, { Component } from 'react';
import './Brief.css';

class Brief extends Component {
  render() {
    return (
        <div className="brief">
          <h1 className="brief__title">Edinburgh Eateries</h1>
          <p className="brief__text">Search Edinburgh city centre for eateries</p>
          <p className="brief__text">Search for a culinary establishment by its name, or filter the list by either food types, type of eatery, or both!</p>
        </div>
    );
  }
}

export default Brief;
