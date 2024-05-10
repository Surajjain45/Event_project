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
    fetch(`http://localhost:3000/api/showevents/${uniqueId}`)
      .then((response) => response.json())
      .then((data) => setEventDetails(data))
      .catch((error) => console.error('Error fetching event details:', error));
  }, [uniqueId]);

  if (!eventDetails) {
    return <p>Loading...</p>;
  }


  console.log("there",eventDetails)
  
  return (
    
    <div className='event_details_page' >
      

      <div className="container">
        <h3 className='dashboard_heading_profile'>Your Details:</h3>
        <div className="one_detail">
          <span>Name: </span>
          <div className="answer">{eventDetails.organizerName}</div>
        </div>

        <div className="one_detail">
          <span>Phone number: </span>
          <div className="answer">{eventDetails.organizerPhone}</div>
        </div>

        <div className="one_detail">
          <span>Email id: </span>
          <div className="answer">{eventDetails.organizerEmail}</div>
        </div>
      </div>

      <div className="container">
      <h3 className='dashboard_heading_profile'>Event Details:</h3>
        <div className="one_detail">
          <span>Event Name: </span>
          <div className="answer">{eventDetails.eventName}</div>
        </div>

        <div className="one_detail">
          <span>Event Uniqueid: </span>
          <div className="answer">{eventDetails.uniqueId}</div>
        </div>

        <div className="one_detail">
          <span>Event description: </span>
          <div className="answer">{eventDetails.eventDescription}</div>
        </div>

        <div className="one_detail">
          <span>Event mode </span>
          <div className="answer">{eventDetails.eventMode}</div>
        </div>

        {
          eventDetails.eventMode==='offline' && <div className="one_detail">
          <span>Event Location</span>
          <div className="answer">{eventDetails.eventLoc}</div>
        </div>
        }

          <div className="one_detail">
          <span>Event Date </span>
          <div className="answer">{eventDetails.eventDate}</div>
        </div>

        <div className="one_detail">
          <span>Event Time </span>
          <div className="answer">{eventDetails.eventDate}</div>
        </div>

        <div className="one_detail">
          <span>Event Categoty </span>
          <div className="answer">{eventDetails.eventCategory}</div>
        </div>

        <div className="one_detail">
          <span>Event Duration </span>
          <div className="answer">{eventDetails.Duration}</div>
        </div>

        <div className="one_detail">
          <span>Ticket price:</span>
          <div className="answer">{eventDetails.Ticketprice}</div>
        </div>

        <div className="one_detail">
          <span>No.of seats </span>
          <div className="answer">{eventDetails.numberOfSeats}</div>
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

