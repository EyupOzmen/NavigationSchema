import React from 'react';

import './Banner.css';

const Banner = ({ image }) => {
   return (
      <div className="banner__container">
         <img
            src={image}
            style={{
               margin: '25px 100px 25px',
               border: '1px black solid',
               borderRadius: '5px',
               padding: '20px',
            }}
            width="350px"
            height="80%"
            alt="bannerOne"
         />
         <img
            src={image}
            style={{
               margin: '25px 100px 25px',
               border: '1px black solid',
               borderRadius: '5px',
               padding: '20px',
            }}
            width="350px"
            height="80%"
            alt="bannerTwo"
         />
      </div>
   );
};

export { Banner };
