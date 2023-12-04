import './Events_display.css'
import React, { useEffect, useState } from 'react';
import Event_details from './Event_details'
// import Event_page from '../Event_page/event_page.jsx'
import image1 from './Event_assest/Group 93.png'
import image2 from './Event_assest/Rectangle 42.png';
import image3 from './Event_assest/Rectangle 43.png'
import image4 from './Event_assest/Rectangle 44.png'
import { Link } from 'react-router-dom';

const imageComponentsArray = [image1 , image2, image3 , image4];

export default function Events(){

    // const randomIndex = Math.floor(Math.random() * imageComponentsArray.length);


    const [events, setEvents] = useState([]);

    useEffect(() => {
      // Function to fetch all event data from the backend
      const fetchAllEvents = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/allevents');
          const data = await response.json();
          setEvents(data); // Assuming the backend returns an array of events
        } catch (error) {
          console.error('Error fetching all events:', error);
        }
      };
  
      // Call the fetchAllEvents function
      fetchAllEvents();
    }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

    console.log(events);

    // const events = [
    //     { uniqueId: 'karan_karan', title: 'AAINA EVENT', description: 'Lorem suraj', image: image1 },
    //     { uniqueId: '0608_aaina', title: 'AAINA EVENT2', description: 'Lorem suraj', image: image2},
    //     { uniqueId: '2003_aaina', title: 'AAINA EVENT3', description: 'Lorem suraj', image: image3},
    //     // Add more events as needed
    //   ];

    //   const eventData = [
    //     { uniqueId: '1abc', eventName: 'Event 1' },
    //     { uniqueId: '2xyz', eventName: 'Event 2' },
    //     { uniqueId: '3def', eventName: 'Event 3' },
    //     // Add more event data as needed
    //   ];

   
    return(
        <>
        <div className="event_section">
            <h1 className='event_heading'>Explore<span className='highlight'>Events</span></h1>
        <div className="event_display">
            {/* <h1>suraj jain</h1> */}


            {events.map((events) => (
                <Link key={events.uniqueId} to={`/events_page/${events.uniqueId}`}>
                <Event_details icon= {imageComponentsArray[Math.floor(Math.random() * imageComponentsArray.length)]} title={events.eventName} des={events.eventCategory} />
        </Link>
      ))}

{/* <Router>
      <Switch> */}
        {/* <Route path="/" exact> */}
          {/* Home page with a list of event images */}
          
          {/* {eventData.map((event) => (
            <Event_details icon = {image1} title="AAINA ddEVENT" des="Lorem suraj " /> */}
            {/* // <Event_details key={event.uniqueId} uniqueId={event.uniqueId} eventName={event.eventName} /> */}
          {/* ))} */}
        {/* </Route> */}
        {/* Dynamic routes for each uniqueId */}
        {/* {eventData.map((event) => (
          <Route key={event.uniqueId} path={`/event/${event.uniqueId}`} component={EventDetailsPage} />
        ))} */}
      {/* </Switch>
    </Router> */}

    
            {/* <Link to="/events_page">
            <Event_details icon = {image1} title="AAINA EVENT" des="Lorem suraj " />
            </Link>
            <Link to="/events_page">
            <Event_details icon = {image1} title="AAINA EVENT" des="Lorem suraj " />
            </Link>
            
            <Link to="/events_page"><Event_details icon = {image3} title="AAINA EVENT" des="Lorem suraj "/>
            </Link>
            <Link to="/events_page"><Event_details icon = {image4} title="AAINA EVENT" des="Lorem suraj "/></Link>
            <Link to="/events_page"><Event_details icon = {image2} title="AAINA EVENT 2.0" des="Lorem suraj "/></Link>
            <Link to="/events_page"><Event_details icon = {image2} title="AAINA EVENT 2.0" des="Lorem suraj "/></Link>

            <Link to="/events_page"><Event_details icon = {image2} title="AAINA EVENT 2.0" des="Lorem ipsum " /></Link>
<Link to="/events_page"><Event_details icon = {image2} title="AAINA EVENT 2.0" des="Lorem ipsum  "/></Link> */}
        </div>
        </div>
        </>
    )
}

