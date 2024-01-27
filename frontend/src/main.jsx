import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './index.css'
import UserHomeScreen from './screens/UserHomeScreen.jsx'
import LoginScreen from './screens/LoginScren.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx'
import store from './store.js';
import { PrivateRouter } from './component/PrivateRouter.jsx'
import {Provider} from 'react-redux'
import CartScreen from './screens/CartScreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<App />} >
      {/*================================= user route handler========================================== */}
      <Route index={true} path='/' element={<UserHomeScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      {/*================================= Private Router========================================== */}
      <Route path="" element = {<PrivateRouter />}>
        <Route path="/cart" element={<CartScreen />} /> 
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
