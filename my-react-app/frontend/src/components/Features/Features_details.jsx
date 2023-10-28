 
const Feature_details = (props)=>{

      return(
        <>
        <div className="features_details">
            <img src={props.icon} style = {{width:"60px", height:"60px"}}alt="" />
            <h2>{props.heading}</h2>
            <p>{props.des}</p>
        </div>
        </>
      )
}

export default Feature_details