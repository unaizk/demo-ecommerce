import React from 'react'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const navigate = useNavigate()

    const handleLoginClick = () => {
        navigate('/login');
      };
    return (
    <div className="flex justify-around items-stretch pt-2 pb-2">
        <div className="flex items-center">
            <img className="w-24" src={'/logo.png'} alt="Company Logo" />
        </div>
        <div className=' flex items-center'>
            <SearchBar />
        </div>
        <div className="flex items-center">
            <div className="bg-gray-50 rounded-full p-3 mr-4 cursor-pointer">
                <img src={'/profile.jpg'} className='w-5 bg-gray-200' alt="" />
            </div>
            <div className="bg-gray-50 rounded-full p-3 mr-4 cursor-pointer">
                <img src={'/Heart.png'} className='w-5 bg-gray-200' alt="" />
            </div>
            <div className="bg-gray-50 rounded-full p-3 mr-4 cursor-pointer">
                <img src={'/cart.png'} className='w-5 bg-gray-200' alt="" />
            </div>
            <div className="bg-gray-50 rounded-full p-3 mr-4 cursor-pointer" onClick={handleLoginClick}>
                <span className='font-bold'>Log In</span>
            </div>
        </div>
    </div>
    
    );
  };

export default Header