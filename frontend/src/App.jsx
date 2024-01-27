import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import LoginScreen from './screens/LoginScren'
import RegisterScreen from './screens/RegisterScreen'
import UserHomeScreen from './screens/UserHomeScreen'


function App() {


  return (
    <>
    <Header />
    <UserHomeScreen />
    
    </>
  )
}

export default App
