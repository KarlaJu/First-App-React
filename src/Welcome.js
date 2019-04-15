import React from 'react';

const Welcome = (props) => 
  <div>
    <h1>¿Cómo estas {props.name}?</h1>
    <h2>¿Qué tal tu día {props.name}?</h2>
  </div>
;

export default Welcome;