import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({ category }) => {
  const { name,id } = category;
  return (
    <div>
     
       <div className=' flex '>
      <NavLink to={`/category/${id}`} className='mb-7'> {name} </NavLink>
    </div>
   </div>
  );
};

export default Category;