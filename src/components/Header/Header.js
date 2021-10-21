import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({ image }) => {
   return (
      <div className="header__container">
         <Link to="/">
            <img
               style={{ marginLeft: '1rem' }}
               width="50px"
               height="50px"
               src={image}
               alt="logo"
            />
         </Link>
      </div>
   );
};

export { Header };
