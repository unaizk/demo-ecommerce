import React from 'react';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    navigate('/logout');
  };

  return (
    <div className="flex flex-col sm:flex-row justify-around items-stretch pt-2 pb-2">
      <div className="flex items-center">
        <img className="w-24" src={'/logo.png'} alt="Company Logo" />
      </div>
      <div className="sm:flex items-center">
        <SearchBar  />
      </div>
      <div className="flex items-center">
        <div className="bg-gray-50 rounded-full p-3 mr-4 cursor-pointer">
          {userInfo ? `Welcome ${userInfo.name}` : <img src={'/profile.jpg'} className="w-5 bg-gray-200" alt="" />}
        </div>
        <div className="bg-gray-50 rounded-full p-3 mr-4 cursor-pointer">
          <img src={'/Heart.png'} className="w-5 bg-gray-200" alt="" />
        </div>
        <div className="bg-gray-50 rounded-full p-3 mr-4 cursor-pointer">
          <img src={'/cart.png'} className="w-5 bg-gray-200" alt="" />
        </div>
        <div className="bg-gray-50 rounded-full p-3 mr-4 cursor-pointer">
          {userInfo ? (
            <span className="font-bold" onClick={handleLogoutClick}>
              Log Out
            </span>
          ) : (
            <span className="font-bold" onClick={handleLoginClick}>
              Log In
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
