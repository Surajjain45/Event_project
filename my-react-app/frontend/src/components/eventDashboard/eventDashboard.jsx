import {Link, Outlet} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState ,useEffect} from 'react';
import './eventdashboard.css'
import Sidenav from './sidebar'
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
      <Sidenav isOpen={isOpen} toggleSidebar={toggleSidebar} closeSidebar={closeSidebar} />
      <div className="page">

      
      <div className={isOpen === true ? 'open dashboard_navbar' : 'dashboard_navbar'}>
        {!isOpen && 
          <button onClick={toggleSidebar}>
            open
          </button>}
        <h2>Hi {eventDetails.organizerName}</h2>
      </div>
      <div className={isOpen === true ? 'outlet open' : 'outlet'}>
        <Outlet/>
      </div>
      </div>
    </>
  )
}

// Exporting eventDetails
