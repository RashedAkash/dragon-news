import React, { useEffect, useState } from 'react';
import Category from './Category';


const AllCategory = () => {
  const [catagories, setCategories] = useState([]);
  useEffect(() => {
    fetch('category.json')
      .then(res => res.json())
    .then(data=>setCategories(data))
  },[])
  return (
    <div>
       <h2 className=' flex mb-5 font-bold text-3xl'>All Category</h2>
      {
        catagories.map(category => <Category category={category } key={category.id}/>)
      }

    
    </div>

  );
};

export default AllCategory;