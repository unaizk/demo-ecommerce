import React from 'react'
import { useAdminLogoutMutation } from '../slices/adminApiSlice'
import { adminLogout } from '../slices/adminAuthSlice';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
    const {adminInfo} = useSelector((state)=> state.adminAuth)
    const [adminLogoutApiCall] = useAdminLogoutMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate()

       const handleLogoutClick = async ()=>{
        try {
            await adminLogoutApiCall().unwrap();
            dispatch(adminLogout());
            navigate('/admin')

        } catch (err) {
            console.log(err);
        }
    }
  return (
    <div className="flex flex-col sm:flex-row justify-around items-stretch pt-2 pb-2">
      <div className="flex items-center">
        <img onClick={() =>{navigate('/admin')}} className="w-24 cursor-pointer" src={'/logo.png'} alt="Company Logo" /><span className='font-bold'>Admin</span>
      </div>

      {adminInfo ? (
          <div className="flex items-center">
          <div className="bg-gray-50 rounded-full p-3 mr-4 cursor-pointer">
            {adminInfo.name}
          </div>
          <div className="bg-gray-50 rounded-full p-3 mr-4 cursor-pointer">
              <span className='font-bold'>Add Products</span>
          </div>
          <div className="bg-gray-50 rounded-full p-3 mr-4 cursor-pointer">
            <span className='font-bold'>Products</span>
          </div>
          <div className="bg-gray-50 rounded-full p-3 mr-4 cursor-pointer">
              <span className="font-bold" onClick={handleLogoutClick}>
                Log Out
              </span>
          </div>
        </div>
      ) : (
        <>
        </>
      )}

    
    </div>
  )
}

export default AdminHeader