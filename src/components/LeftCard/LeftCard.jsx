import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import moment from 'moment';
import { FaCalendarDay,  } from "react-icons/fa";

const LeftCard = () => {
  return (
    <div>
      <div className='bg-white p-4'>
        <img className='' src={img1} alt="" />
        <h2 className=' font-semibold mt-3 '>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
        <div className=' flex items-center justify-between mt-3'>
          <p>Sports</p>
          <p className='flex items-center'><FaCalendarDay className=' mr-2' />  {moment().format("MMM Do YYYY") }</p>
        </div>
      </div>
      <div className='bg-white p-4'>
        <img src={img2} alt="" />
        <h2 className=' font-semibold mt-3 '>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
        <div className=' flex items-center justify-between mt-3'>
          <p>Sports</p>
          <p className='flex items-center'><FaCalendarDay className=' mr-2' />  {moment().format("MMM Do YYYY") }</p>
        </div>
      </div>
      <div className='bg-white p-4'>
        <img src={img3} alt="" />
        <h2 className=' font-semibold mt-3 '>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
        <div className=' flex items-center justify-between mt-3'>
          <p>Sports</p>
          <p className='flex items-center'><FaCalendarDay className=' mr-2' />  {moment().format("MMM Do YYYY") }</p>
        </div>
      </div>
    </div>
  );
};

export default LeftCard;