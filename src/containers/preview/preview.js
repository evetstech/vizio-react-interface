import React, { Component } from 'react';
import './preview.css'
import houseofcards from '../../images/houseofcards.jpg';
class Selection extends Component {
  render() {
    return (
      <div className="prev-header">
        <img className="featured-banner" src={houseofcards}/>
      </div>
    );
  }
}

export default Selection;
