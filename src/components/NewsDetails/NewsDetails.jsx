
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import RightSideBar from '../RightSideBar/RightSideBar';


import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const NewsDetails = () => {
  const navigate = useNavigate();
  const [newsDetails, SetNewsDetails] = useState([]);
  const { id } = useParams();
  const news = useLoaderData();
 
  
  useEffect(() => {
    const newsDetails = news?.find(anews => anews._id === id)
    SetNewsDetails(newsDetails);
     console.log(newsDetails);
  }, [news,id]);
 
  const handleBack = () => {
    navigate(-1)
  }
 
  return (
    <div>
      <Header />
      <Navbar></Navbar>
      <div className=' grid gap-5 lg:grid-cols-4 mt-10'>
       
        <div className='grid lg:col-span-3'>
          <h2 className=' text-start text-xl font-bold mb-5'>Dragon News</h2>
           <div className=' space-y-3 text-left'>
            <img className='w-full' src={newsDetails.image_url} alt="" />
            <h2 className=' text-xl font-bold'>{newsDetails.title}</h2>
            <p>{newsDetails.details}</p>
            <button onClick={handleBack} className="flex items-center bg-[#D72050]  text-white py-2 px-6  ">
  <FaArrowLeft className='mr-2' />
  All news in this category
</button>
          </div>
        </div>
        <div>          
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;