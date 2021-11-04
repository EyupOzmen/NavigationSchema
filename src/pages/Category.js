import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { categoryData } from '../fakeDB/categoryData';
import { SidebarItem, Header, ProductItem } from '../components';

import logo from '../assets/logo.png';
import '../App.css';

const Category = () => {
   let { id, category } = useParams();

   const [spanFlag, setSpanFlag] = useState(false);

   let data = categoryData.filter((item) => item.customerId === parseInt(id));
   let [{ categories }] = data;

   let productData = categories.filter((item) => item.category === category);
   let [{ products }] = productData;

   useEffect(() => {
      data = categoryData.filter((item) => item.customerId === parseInt(id));
      [{ categories }] = data;
      productData = categories.filter((item) => item.category === category);
      [{ products }] = productData;
   }, [id, category]);

   const showSidebar = () => setSpanFlag(true);
   const hideSideBar = () => setSpanFlag(false);

   return (
      <>
         <Header image={logo} />
         <div className="category__container">
            <div
               className="sidebar__container"
               onMouseLeave={hideSideBar}
               onMouseEnter={showSidebar}
            >
               {categories.map(({ categoryId, category }) => (
                  <SidebarItem
                     key={categoryId}
                     customerId={id}
                     categoryId={categoryId}
                     category={category}
                     image={logo}
                     flag={spanFlag}
                  />
               ))}
            </div>
            <div className="products__container">
               {products.map((item, index) => (
                  <ProductItem
                     key={index}
                     productId={item.productId}
                     product={item.product}
                     image={logo}
                  />
               ))}
            </div>
         </div>
      </>
   );
};

export { Category };
