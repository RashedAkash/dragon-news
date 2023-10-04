import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import BreakingNews from '../../components/BreakingNews/BreakingNews';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import MainSideBar from '../../components/MainSideBar/MainSideBar';
import RightSideBar from '../../components/RightSideBar/RightSideBar';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews />
      <div className=' sticky left-0 top-0 '>
        <Navbar  /> 
      </div>
      <div className=' grid lg:grid-cols-4 mt-10 gap-5'>
        <div className=' lg:sticky left-0 lg:top-24 lg:h-screen'>
          <LeftSideBar ></LeftSideBar>
        </div>
        <div className='grid col-span-2'>
           <MainSideBar  />
       </div>
        <div  className=' lg:sticky left-0 lg:top-24 lg:h-screen'>
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Home;