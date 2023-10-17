export default function Event_details(props){
    return(
        <>
       <img src={image1} alt="" />
        <div className="event_title">props.title</div>
        <p className="event des">props.des</p>
        </>
    )
}