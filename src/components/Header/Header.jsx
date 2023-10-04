import moment from 'moment/moment';
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className=' flex justify-center     '>
      <div className='space-y-2'>
        <img src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
      </div>
    </div>
  );
};

export default Header;