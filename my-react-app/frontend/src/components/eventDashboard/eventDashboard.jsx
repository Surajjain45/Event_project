import {Link, Outlet} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState ,useEffect} from 'react';
import './eventdashboard.css'
import Sidenav from './sidebar'
import { FaBars, FaTimes,FaUser } from 'react-icons/fa';

import './eventdashboard.css'


export default function Eventdashboard(){
  let { uniqueId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    // Fetch event details from the backend using uniqueId
    fetch(`http://localhost:3000/api/showevents/${uniqueId}`)
      .then((response) => response.json())
      .then((data) => setEventDetails(data))
      .catch((error) => console.error('Error fetching event details:', error));
  }, [uniqueId]);

  if (!eventDetails) {
    return <p>Loading...</p>;
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  console.log("eventdetails",eventDetails)
  return (
    <>
      <Sidenav heading = {eventDetails.eventName} isOpen={isOpen} toggleSidebar={toggleSidebar} closeSidebar={closeSidebar} />
      <div className="page">

      
      <nav className={isOpen === true ? 'open dashboard_navbar' : 'dashboard_navbar'}>
        <div className="left_nav">
        {!isOpen && 

          <FaBars className='nav-toggle-btn' onClick={toggleSidebar}/>
        }
          
        {/* <h2> {eventDetails.organizerName}</h2> */}
        <h2>Dashboard</h2>
        </div>
        <div className="right_nav">
            < FaUser className='right-icons-dashboard'/>
            < FaUser className='right-icons-dashboard'/>
            < FaUser className='right-icons-dashboard'/>
        </div>
      </nav>
      <div className={isOpen === true ? 'outlet open' : 'outlet'}>
        <Outlet/>
      </div>
      </div>
    </>
  )
}

// Exporting eventDetails
