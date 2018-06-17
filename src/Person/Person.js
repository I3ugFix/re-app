import React from 'react';

const person = ( props ) => {
  return (
    <div>
      <p>I'm {props.name} an I am {props.age} yars old</p>
      <p>{props.children}</p>
    </div>
  )
};

export default person;            