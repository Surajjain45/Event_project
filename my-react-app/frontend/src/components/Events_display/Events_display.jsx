import './Events_display.css'
import Event_details from './Event_details'
// import Event_page from '../Event_page/event_page.jsx'
import image1 from './Event_assest/Group 93.png'
import image2 from './Event_assest/Rectangle 42.png';
import image3 from './Event_assest/Rectangle 43.png'
import image4 from './Event_assest/Rectangle 44.png'
import { Link } from 'react-router-dom';


export default function Events(){

   
    return(
        <>
        <div className="event_section">
            <h1 className='event_heading'>Explore<span className='highlight'>Events</span></h1>
        <div className="event_display">
            {/* <h1>suraj jain</h1> */}
            <Link to="/events_page">
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
<Link to="/events_page"><Event_details icon = {image2} title="AAINA EVENT 2.0" des="Lorem ipsum  "/></Link>
        </div>
        </div>
        </>
    )
}

