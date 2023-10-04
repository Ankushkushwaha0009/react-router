import React from 'react'
import { NavLink } from 'react-router-dom';
import Header from './component/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
       <Header />
       <Outlet />
    </>
  )  
} 

export default Home ;   