import Event_page from "../Event_page/event_page"

export default function Event_details(props){

    return(
        <>
        <div className="event_details">
       
        <img src={props.icon} alt="" width="200px" height="270px" />
      
      <div className="img_down">
        <div className="event_title">{props.title}</div>
    <p className="event_des">{props.des}</p> 
    </div>

        </div> 
        </>
    )
}