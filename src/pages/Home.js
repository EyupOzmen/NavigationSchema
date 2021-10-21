import React from 'react';
import '../App.css';

import { CustomerCard, Header, Banner } from '../components';
import { customerData } from '../fakeDB/customerData';

import logo from '../assets/logo.png';

const Home = () => {
   return (
      <div className="outer__container">
         <Header image={logo} />
         <Banner image={logo} />
         <div className="home__container">
            {customerData.map(({ id, title }) => (
               <CustomerCard key={id} id={id} title={title} image={logo} />
            ))}
         </div>
      </div>
   );
};

export { Home };
