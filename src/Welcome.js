import React from 'react';

const Welcome = (props) => 
  <div>
    <h3>How are you {props.name}?</h3>
    <h5>How was your day {props.name}?</h5>
  </div>
;

export default Welcome;