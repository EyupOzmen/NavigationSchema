import React from 'react';
import { Link } from 'react-router-dom';

import './CustomerCard.css';

const CustomerCard = ({ id, title, image }) => {
   return (
      <Link
         key={id}
         style={{ textDecoration: 'none' }}
         to={`/brand/${id}/Burgerler`}
      >
         <div className="customerCard__item">
            <img width="40%" height="60%" src={image} alt={title} />
            <span>{title}</span>
         </div>
      </Link>
   );
};

export { CustomerCard };
