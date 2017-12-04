import React from 'react';
import  Navigation from 'Navigation';

function Main(props){
  return (
    <div>
      <div>
        <div>
          <Navigation/>
          <p>Main.jsx </p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
