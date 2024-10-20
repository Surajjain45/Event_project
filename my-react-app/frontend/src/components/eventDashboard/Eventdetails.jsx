// Section.js

import React, { useEffect } from 'react';
import { useState} from 'react';
import { useNavigate, useParams, } from 'react-router-dom';
// import useHistory from
import './eventdetails.css'
import {Link} from 'react-router-dom'

// import { eventDetails } from './eventDashboard';

function Event_details() {
  const {uniqueId} = useParams()
  const [eventDetails, setEventDetails] = useState(null);
  const dataToSend = eventDetails;

console.log("data to sen: " , dataToSend);
const navigate=useNavigate()
const handleClick = () => {
  navigate(`/dashboard/${uniqueId}/update_details`,{state:dataToSend})
};
  useEffect(() => {
    console.log("worning of eul")
    // Fetch event details from the backend using uniqueId
    fetch(`https://event-project-2-e1g8.onrender.com/api/showevents/${uniqueId}`)
      .then((response) => response.json())
      .then((data) => setEventDetails(data))
      .catch((error) => console.error('Error fetching event details:', error));
  }, [uniqueId]);

  if (!eventDetails) {
    return <p>Loading...</p>;
  }


  console.log("there",eventDetails)
  
  return (
    
    <div className='event_details_page w-[100vw]' >
      

      <div className="container w-11/12 margin-auto">
        <h3 className='dashboard_heading_profile'>Your Details:</h3>
        <div className="one_detail w-11/12">
          <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'>Name: </span>
          <div className='uppercase appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.organizerName}</div>
        </div>

        <div className="one_detail">
          <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'>Phone number: </span>
          <div className='uppercase appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.organizerPhone}</div>
        </div>

        <div className="one_detail">
          <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'>Email id: </span>
          <div className='uppercase appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.organizerEmail}</div>
        </div>
      </div>

      <div className="container">
      <h3 className='dashboard_heading_profile'>Event Details:</h3>
        <div className="one_detail">
          <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'>Event Name: </span>
          <div className='uppercase appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.eventName}</div>
        </div>

        <div className="one_detail">
          <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'>Event Uniqueid: </span>
          <div className='uppercase appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.uniqueId}</div>
        </div>

        <div className="one_detail">
          <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'>Event description: </span>
          <div className='uppercase appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.eventDescription}</div>
        </div>

        <div className="one_detail">
          <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'>Event mode </span>
          <div className='uppercase appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.eventMode}</div>
        </div>

        {
          eventDetails.eventMode==='offline' && <div className="one_detail">
          <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'>Event Location</span>
          <div className='uppercase appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.eventLoc}</div>
        </div>
        }

          <div className="one_detail">
          <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'>Event Date </span>
          <div className='uppercase appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.eventDate}</div>
        </div>

        <div className="one_detail">
          <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'>Event Time </span>
          <div className='uppercase appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.eventDate}</div>
        </div>

        <div className="one_detail">
          <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'>Event Categoty </span>
          <div className='uppercase appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.eventCategory}</div>
        </div>

        <div className="one_detail">
          <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'>Event Duration </span>
          <div className='uppercase appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.Duration}</div>
        </div>

        <div className="one_detail">
          <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'>Ticket price:</span>
          <div className='uppercase appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.Ticketprice}</div>
        </div>

        <div className="one_detail">
          <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'>No.of seats </span>
          <div className='uppercase appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.numberOfSeats}</div>
        </div>

        {/* <Link
    to={{
        pathname: `/dashboard/${uniqueId}/update_details`,
        state: dataToSend
    }}> */}

          <button onClick={handleClick}>Update Details</button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Event_details;

