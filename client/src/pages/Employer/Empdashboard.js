import React, { useState } from 'react'
import Navcontents from '../../components/Nav/Navcontents'
import {Link , Outlet, useNavigate  } from 'react-router-dom'
import Slidebar from './DashboardData/Slidebar'
import Userdashboard from './DashboardData/Userdashboard'
import Profile from './DashboardData/Profile'
import Myjobs from './DashboardData/Myjobs'
import Submitjobs from './DashboardData/Submitjobs'
import Applicantsjobs from './DashboardData/Applicantsjobs'
import Shortlistcandidate from './DashboardData/Shortlistcandidate'
import Candidatealerts from './DashboardData/Candidatealerts'
import Packages from './DashboardData/Packages'
import Messages from './DashboardData/Messages'
import Meeting from './DashboardData/Meeting'
import Changepassword from './DashboardData/Changepassword'
import Deleteprofile from './DashboardData/Deleteprofile'
import Logout from './DashboardData/Logout'



const buttons=[
  "User Dashboard","Profile","My Jobs","Submit Job","Application Jobs","Shortlist Candidates","Candidate Alerts","Pakages","Messages","Meetings","Chang Password","Delete Profile","Logout"
]



const Empdashboard = () => {
  const [isSelected,setIsSelected]=useState(0);

  const RenderComponent=({index}) =>{

    switch (index) {
      case 0:
        return  <Userdashboard/>
        break;

        case 1:
          return <Profile/>
          break;

          case 2:
          return  <Myjobs/>
          break;

          case 3:
          return  <Submitjobs/>
          break;
          
          case 4:
          return  <Applicantsjobs/>
          break;

          case 5:
          return  <Shortlistcandidate/>
          break;

          case 6:
          return  <Candidatealerts/>
          break;

          case 7:
          return  <Packages/>
          break;

          case 9:
          return  <Messages/>
          break;

          case 10:
          return  <Meeting/>
          break;

          case 11:
          return  <Changepassword/>
          break;

          case 12:
          return  <Deleteprofile/>
          break;

          case 2:
          return  <Logout/>
          break;
        
      default:
        return null;
    }
  
  }
  



  return (
    <div>
    <div className=' sticky top-0 z-50 bg-white shadow-md'>
      <Navcontents className='bg-white fixed top-0 w-full shadow-md'/>
    </div>
   
    <div className=' relative flex flex-row h-screen w-screen overflow-hidden shadow-md'>
      <Slidebar buttons={buttons} isSelected={isSelected} setIsSelected={setIsSelected}/>
   
    <RenderComponent index={isSelected}/>

     
    </div>
  
  <div> {Outlet}</div>
   
    </div>
  )
}

export default Empdashboard
