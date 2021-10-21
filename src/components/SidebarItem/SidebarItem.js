import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarItem.css';

const SidebarItem = ({ customerId, categoryId, image, category, flag }) => {
   return (
      <Link
         key={categoryId}
         style={{
            textDecoration: 'none',
            color: 'white',
            textTransform: 'uppercase',
         }}
         to={`/brand/${customerId}/${category}`}
      >
         <div className="sidebaritem__container">
            <img height="40px" width="40px" src={image} alt={category} />
            {flag ? <span>{category}</span> : null}
         </div>
      </Link>
   );
};

export { SidebarItem };
