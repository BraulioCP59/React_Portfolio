import React, {useState} from 'react';
import image from './dil-F35EmcotWPY-unsplash.jpg';

function Subtitle ({/*props*/}) {
    const subtitleStyle = {
        backgroundImage: `url(${image})`,
      };
    return (
      <>
        <div className="bg-fixed bg-contain overflow-auto h-72 w-38" style={subtitleStyle}>
        </div>
      </>
    );
  }
  
  export default Subtitle;