import Event_page from "../Event_page/event_page"
import party_icon from './Event_assest/1.png'
import meeting_icon from './Event_assest/2.png'
import gaming_icon from './Event_assest/3.png'
import festival_icon from './Event_assest/4.png'
import concert_icon from './Event_assest/5.png'
import workshop_icon from './Event_assest/6.png'
import random_icon from './Event_assest/7.png'
import other_icon from './Event_assest/8.png'
import './Event_details.css'


export default function Event_details(props){
    const categoryEvent = {
        Party: party_icon,
        Meeting: meeting_icon,
        Gaming: gaming_icon,
        Festival: festival_icon,
        Concert: concert_icon,
        Workshop: workshop_icon ,
        Random: random_icon,
        Screening: random_icon,
        other: other_icon,
};

    return(
        <>
        <div className="event_details">
       
        <img src= {categoryEvent[props.des]} alt={props.desc} width="200px" height="270px" />
        {/* <img
  src={(() => {
    if (props.desc === "Party") {
      return party_icon;
    } else if (props.desc === "Meeting") {
      return meeting_icon;
    } else if (props.desc === "Gaming") {
      return gaming_icon;
    } else if (props.desc === "Festival") {
      return festival_icon;
    } else if (props.desc === "Concert") {
      return concert_icon;
    } else if (props.desc === "Workshop") {
      return workshop_icon;
    } else {
      return other_icon;
    }
  })()}
  alt=""
  width="200px"
  height="270px"
/> */}

      
    <div className="img_down">
    <div className="event_title uppercase">{props.title}</div>
    <p className="event_des">{props.des}</p> 
    </div>

        </div> 
        </>
    )
}