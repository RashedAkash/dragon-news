import React, { useEffect, useState } from 'react';
import MainNews from '../MainNews/MainNews';

const MainSideBar = () => {
  const [newses, setNewses] = useState([]);
  useEffect(() => {
    fetch(`news.json`)
      .then(res => res.json())
    .then(data=>setNewses(data))
  },[])
  return (
    <div className=' '>
      <h2 className=' font-bold text-xl mb-5 text-start'>Dragon News Home</h2>

      {
        newses?.map(news => <MainNews key={news.id} news={news} />)
      }
    </div>
  );
};

export default MainSideBar;