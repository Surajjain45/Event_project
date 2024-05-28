import './event_page.css'
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import image1 from './Event_assest/Frame 5.png'


import icon3 from './Event_assest/link.png'
import icon1 from './Event_assest/whatsapp.png'

import icon2 from './Event_assest/instagram.png'


export default function Event_page(){
  console.log("hey  ");
  
  const { uniqueId } = useParams();
  const [eventDetails, setEventDetails] = useState(null);
  
  console.log("hey2  ", uniqueId);
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

console.log(eventDetails)


    const image_section_c = {
      // backgroundImage: `url(${image1})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '400px',
    }
    return(
        <>
        <div className="image_section_css">
        <div className="image_section_event" style={image_section_c}>

        </div>

           <div className="image_text">
            <div className="category">Category: {eventDetails.eventCategory}</div>
            <div className="title">{eventDetails.eventName}</div>
           <div className='timeline'>
             <span className="duration">2hr</span>
            <span className="date border">{eventDetails.eventDate}</span>
            <span className="time border">11:00</span>
            </div>

            <div className="location">Location / {eventDetails.eventMode}</div>
           </div>

        </div>

        <div className="white_box_background">
          <div className="white_box">

            <div className="about_event">
              <div className="left">
               <div className="heading">{eventDetails.eventName}</div>
               <div className="about_des">
                {eventDetails.eventDescription}

                <div className="price_des">Price:<span className='price'>Amount (</span><span className='count'>10</span> seats left)</div>

                <div className="heading_des"> <h4>Date and Time:</h4></div>
                <p className="answer_heading_des">
                  <span className="time">{eventDetails.eventDate}</span>

                  <span className="border time">  3:00pm</span>
                </p>


                <div className="heading_des"> <h4>Location:</h4></div>
                <p className="answer_heading_des">KIET GROUP<span><a href="#">(See location)</a></span></p>


                <div className="heading_des"> <h4>Refundable:</h4></div>
                <p className="answer_heading_des">Tickets are non-refundable</p>


                </div>

               </div>

               <div className="right">

                <div className='share_icon'><img src={icon3} alt="" width='50px' height='50px' /></div>
                <div className="timer">
                    <div className="heading_des register">Registration ends in: </div>
                    <span className="timer_box">
                     34
                    </span>
                    <span className="colon">:</span>

                    <span className="timer_box">
                       12
                    </span>
                    <span className="colon">:</span>

                    <span className="timer_box">
              10
                    </span>
                </div>
               </div>

            </div>
               <Link key={eventDetails.uniqueId} to={`/book_ticket/${eventDetails.uniqueId}`}> <button className='book_ticket'>   Book Ticket </button></Link>
               {/* <button className='book_ticket btns'>Book Ticket</button> */}

            <div className="about_organiser">

                  <div className="about_organiser_heading">
                    About organiser
                  </div>

                  <div className="about_organiser_name">
                    {eventDetails.organizerName}
                  </div>

                  <div className="about_organiser_des">
                    Feel free to contact for any query
                  </div>
                  <div className="about_organiser_des">
                    <underline>{eventDetails.organizerPhone}</underline> <bold> | </bold> <underline>{eventDetails.organizerEmail}</underline>
                  </div>

                  <div className="profile_icons">
                    <img className='icon whatsapp' src={icon1} alt="" width='40px' height='40px'/>
                    <img className='icon' src={icon2} alt="" width='40px' height='40px'/>
                    <img className='icon' src={icon3} alt="" width='40px' height='40px'/>

                  </div>
            </div>

          </div>
        </div>
         </>
    )
}