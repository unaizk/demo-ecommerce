import './App.css'
import Header from './component/Header'
import {Outlet} from 'react-router-dom'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import AdminHeader from './component/AdminHeader';

function App() {


  return (
    <>
    <Header />
    
    <ToastContainer style={{marginTop : '75px'}} />
    <Outlet />
    
    </>
  )
}

export default App
