 
const Feature_details = (props)=>{

      return(
        <>
        <div className="features_details">
            <img src={props.icon} alt="" />
            <h2>{props.heading}</h2>
            <p>{props.des}</p>
        </div>
        </>
      )
}

export default Feature_details