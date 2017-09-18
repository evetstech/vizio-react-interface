import React from 'react';
import './apps.css'
import Slider from 'react-slick';

let Apps = (props) => {
  const Icons = getApps(props.appList);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true
  }

  return (
    <div className="content-wrapper">
      <h2>Apps</h2>
      <div className="slider-div">
        <Slider {...settings}>
          {Icons}
        </Slider>
      </div>
    </div>
  );
};

export default Apps;


const getApps = (appsList) => {
  const appIcons = appsList.map((app) => {
    let icon;
    //mock retrieving icons
    switch(app) {
      case "netflix": icon = require('../../images/netflix.svg'); break;
      case "amazon": icon = require('../../images/amazon.svg'); break;
      case "iheart": icon = require('../../images/iheart.svg'); break;
      case "hulu": icon = require('../../images/hulu.svg'); break;
      case "vudu": icon = require('../../images/vudu.svg'); break;
      case "pandora": icon = require('../../images/pandora.svg'); break;
      case "crackle": icon = require('../../images/crackle.svg'); break;
      case "spotify": icon = require('../../images/spotify.svg'); break;
      case "hbo": icon = require('../../images/hbo.svg'); break;
      default: break;
    }
    //todo: actions to open apps
    return <li className="app-buttons" key={app}><img src={icon} className='button-img button-img-hover2'/></li>;
  });
  return appIcons;
}
