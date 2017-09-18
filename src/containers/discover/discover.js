import React from 'react';
import './discover.css';
import Slider from 'react-slick';
let Discover = (props) => {
  const discoveriesList = getDiscoveries(props.discoveryList);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true
  }
  return (
    <div className='content-wrapper-top content-wrapper'>
      <h2>Discover</h2>
      <div className="slider-div">
        <Slider {...settings}>
          {discoveriesList}
        </Slider>
      </div>
    </div>
  );
}

export default Discover;


const getDiscoveries = (appsList) => {
  const appIcons = appsList.map((app) => {
    let icon, name, desc;
    //mock retrieving icons
    switch(app) {
      case "daredevil": icon = require('../../images/daredevil.jpg'); name = "Daredevil"; desc = "TV Series- Netflix"; break;
      case "tick": icon = require('../../images/tick.jpg'); name = "The Tick"; desc = "TV Series- Amazon"; break;
      case "got": icon = require('../../images/got.jpg'); name = "Game of Thrones"; desc = "TV Series- HBO Now"; break;
      case "defenders": icon = require('../../images/defenders.jpg'); name = "The Defenders"; desc = "TV Series- Netflix"; break;
      case "handmaids": icon = require('../../images/handmaids.jpg'); name = "The Handmaid's Tale"; desc = "TV Series- Hulu"; break;
      case "stranger": icon = require('../../images/stranger.jpg'); name = "Stranger Things"; desc = "TV Series- Netflix"; break;
      default: break;
    }
    //todo: actions to open apps
    return <li className="app-buttons" key={app}><img src={icon} className='button-img-hover1 button-img'/><p className="disc-name">{name}</p><p className="disc-serv">{desc}</p></li>;
  });
  return appIcons;
}
