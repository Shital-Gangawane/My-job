import React from 'react'
import Navcontents from '../../components/Nav/Navcontents'
import { Outlet } from 'react-router-dom'
import Slidebar from './DashboardData/Slidebar'

const Empdashboard = () => {
  return (
    <div>
    <div className='bg-white'>
      <Navcontents />
  </div>
   
    <div className=' relative flex flex-grow h-screen w-screen overflow-hidden'>
      <Slidebar/>
    </div>
    <div className='bg-blue-200'></div>
  <div> {Outlet}</div>
   
    </div>
  )
}

export default Empdashboard
