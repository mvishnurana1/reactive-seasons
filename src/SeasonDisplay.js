import React from 'react';
import './SeasonStyle.css';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter';
  } else {
    return lat > 0 ? 'Winter' : 'Summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());

  const text =
    season === 'winter' ? "Burr, it's winter..." : "Let's hit the beach...";

  const icon = season === 'winter' ? 'snowflake' : 'sun';

  return (
    <div className={`season-display ${season}`}>
      <h1> Season Display: {props.lat} </h1>
      <i className={`icon-left massive icon ${icon}`}></i>
      <h2>{text}</h2>
      <i className={`icon-right massive icon ${icon}`}></i>
    </div>
  );
};

export default SeasonDisplay;
