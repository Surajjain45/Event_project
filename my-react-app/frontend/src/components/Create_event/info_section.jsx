import './register_event.css'

export default function Info_section ({ className , img , title, para}) {

    return (
        <>
      <div className={`${className}`}>
        {/* <div className= 'info-section-container'> */}
            <div className='info-section-img-container'>
        <img className='info-section-img' src={img} alt='IMAGE HERE!!'></img>
        </div>
        <div className='info-section-content'>
        <h2 className="info-section-step-title">{title}</h2>
        <p className='info-section-para'>{para}</p>
        </div>
        {/* </div> */}
      </div>
        </>
    );
}