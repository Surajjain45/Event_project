import './register_event.css'
import  {useState,  } from "react";
import Sidebar from './sidebar_component';
// import Questions from './q_input';
import Info_section from './info_section';
// import image1 from './asset/number-1.png';
import { useFormik } from 'formik';
 import * as Yup from 'yup';
 import Personal from './asset/Personal.png'
 import Event from './asset/Event.png'
 import Form from './asset/Form.png'
 import axios from 'axios'
//  import bcrypt from 'bcryptjs'
//  const bcrypt = require('bcrypt');


 
export default function RegisterEvent() {  
  
  const [exist,setExist] = useState(false)

  function generateUniqueID(email, eventName) {

    const uniqueId = `${email.split('@')[0]}_${eventName}`;
    // You might want to further hash the unique ID for security
    console.log("step 1 wokring");
    return uniqueId;
  }
  
  // Function to hash a password
  // async function hashPassword(password) {
  //   const saltRounds = 10;
  //   console.log("step 2 wokring");
  //   return await bcrypt.hash(password, saltRounds);
  // }

  const formikstep1 = useFormik ({
    initialValues: {
      fullname: '',
      email: '' ,
      phone: '',
    },
  
  
    validationSchema: Yup.object({
      fullname: Yup.string()
    .trim() // Remove whitespace from the beginning and end of the string
    .matches(/^[a-zA-Z]+$/, 'Name must contain only letters').max(20,'name too big').min(2,'name too small')
    .required('Name is required'),
      email: Yup.string().email("Invalid Email").required('Email is required'),
      phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
    }),
  
    onSubmit: values => {
      // next();
      console.log("submitted by formik");
  
      if(CurrentIndex != 4){
        setCurrentIndex(CurrentIndex + 1);
      }
      
      alert(JSON.stringify(values));
  
    },
  });

  

  const formikstep2 = useFormik ({
    initialValues: {
      eventname: '',
      eventdesc: '' ,
      eventmode: '',
      eventloc:'online',
      // offlineeventmode: false,
      eventdate: '20:10:2024',
      eventtime: '',
      eventcat: [],
      eventduration:'',
      ticketprice:'',
      isrefundable:false,
      eventcapacity:'',
      // duration:0,
      
    },
  
  
    validationSchema: Yup.object({
      eventname: Yup.string().min(1, 'Name too short!').max(20, 'Name too long!').required('Required'),
      eventdesc: Yup.string().min(5, 'Description too short!').required('Required'),
      // eventmode: Yup.mixed().test('Select atleast one mode', function (value) {
      //   const { onlineeventmode, offlineeventmode } = this.parent;
      //   return onlineeventmode || offlineeventmode;
      // }),
      eventmode: Yup.string().required(),
      eventloc:Yup.string().required(),
      isrefundable:Yup.boolean().required(),
      ticketprice:Yup.number().positive().required(),
      // onlineeventmode: Yup.boolean().required(),
      // offlineeventmode: Yup.boolean().required(),
      // eventdate: Yup.date().typeError('Invalid date format').required('Date is required'),
      eventdate: Yup.date(),
      eventtime: Yup.string().matches( /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/,'Invalid time format (HH:mm)'),
      eventcat: Yup.string().required('Category is required'),
      eventduration:Yup.string().required('Duration is required'),
      eventcapacity:Yup.number().positive().moreThan(0).required()
      // eventcapacity: Yup.number().min(10, 'Mininum capacity must be 10').required(),
      // ^^^^^^^^^^(oneOf([])).
    }),
  
    onSubmit: async(values )=> {
      // next();
      console.log("submitted by formik");
      const unique_id = generateUniqueID(formikstep1.values.email,formikstep2.values.eventname)
      const id = {
        uniqueId: unique_id,
        data:'cheching'
      }
      console.log(id)
      let exists;

      try{
       const response =  await axios.post("http://localhost:3000/check",id)
       exists= response.data.exist
       console.log(exists)
             
      }catch(error){
        console.error('Checking failed',error)
      }

      if(exists==true){
        console.log('aaaya')
        setExist(true)
  }

  else{

    setExist(false)
  
      if(CurrentIndex != 4){
        setCurrentIndex(CurrentIndex + 1);
      }
      
      alert(JSON.stringify(values));
    }
  
    },
    // onChange: setExist(false)
  });


  const formikstep3 = useFormik ({
    initialValues: {
     askfullname: false,
     askemail: false,
     askcollege: false,
     askphone: false,
    //  ask: false,
    },
  
  
    validationSchema: Yup.object({
    askfullname: Yup.boolean().required(),
    askemail: Yup.boolean().required(),
    askcollege: Yup.boolean().required(),
    askphone: Yup.boolean().required(),

    }),
  
    onSubmit: values => {
      // next();
      console.log("submitted by formik");
  
      if(CurrentIndex != 4){
        setCurrentIndex(CurrentIndex + 1);
      }
      
      alert(JSON.stringify(values));
  
    },
  });
  
 const wholedata= {
    // Initialize with default values or empty strings
    organizerName: formikstep1.values.fullname,
    organizerEmail: formikstep1.values.email,
    organizerPhone: formikstep1.values.phone,
    eventName: formikstep2.values.eventname,
    eventDescription: formikstep2.values.eventdesc,
    eventMode: formikstep2.values.eventmode,
    eventLoc: formikstep2.values.eventloc,
    eventDate: formikstep2.values.eventdate,
    eventCategory: formikstep2.values.eventcat,
    Ticketprice:formikstep2.values.ticketprice,
    isrefundable:formikstep2.values.isrefundable,
    numberOfSeats: formikstep2.values.eventcapacity,
    Duration:formikstep2.values.eventduration,
    showFullName: formikstep3.values.askfullname,
    showEmail: formikstep3.values.askemail,
    showCollegeName: formikstep3.values.askcollege,
    showPhoneNumber: formikstep3.values.askphone,
    uniqueId: generateUniqueID(formikstep1.values.email, formikstep2.values.eventname),
    // password: hashPassword(formikstep1.values.email),
  };

  const formikstep4 = useFormik({
    initialValues: {
      // Initialize with default values or empty strings
      organizerName: '',
      organizerEmail: '',
      organizerPhone: '',
      eventName: '',
      eventDescription: '',
      eventMode: '',
      eventDate: '',
      eventCategory: '',
      numberOfSeats: 0,
      showFullName: false,
      showEmail: false,
      showCollegeName: false,
      showPhoneNumber: false,
      uniqueId: '',
      // password: '',
    },
    onSubmit: async () => {
      try {
        // Send data to the backend
      //  await console.log(wholedata);

       
        await axios.post('http://localhost:3000/api/events/create', wholedata);

        console.log('Event data has been saved successfully');
      } catch (error) {
        console.error('Failed to save event data:', error);
      }
    },
  });

      
      const [CurrentIndex , setCurrentIndex] = useState(1);
      
      const  next = (e)=>{

        e.preventDefault();
        
        console.log("submitted step 1")
        if(CurrentIndex != 4){
          setCurrentIndex(CurrentIndex + 1);
        }
        
        console.log(CurrentIndex);
      }
     
      

      
      function back(){
        if(CurrentIndex != 1){
          setCurrentIndex(CurrentIndex - 1);
        }
        console.log(CurrentIndex);
      }

      
      return ( 
        
<div className='whole_page'>

     <div className='info-section'>
      <div  className='heading_section'>
        {/* <p>R</p> */}
        <div className='info-section-title'>
              <h1 className='title-1'>Lets Plan Your Perfect Event Together!</h1>
              <h2>Creating Memorable Events, One Step at a Time</h2>

              
              {/* <img src={image1} alt='step 1' text={About Yourself} sub-text={Create your Profile so that aduinece could trust you}></img>
              <img src={image1} alt='step 1' text={About Event}></img>
            <img src={image1} alt='step 1' text={Registration Form}></img> */}
              </div>

              <div className='info_section_main'>
                <h3>Start Your Event Journey with Us in Three Simple Steps</h3>
                <Info_section className={'img-on-left img-on-side'} img={Personal}  title={'1. Personal Info'} para={'Start by creating your account. We need some basic information to get you started. Your details will be kept secure.'}/>
                <Info_section className={'img-on-right img-on-side'} img={Event}  title={'2. Event Details'} para={'Tell us about your event. When, where, and what type of event are you planning? This information will help us customize your experience.'}/>
                <Info_section className={'img-on-left img-on-side'} img={Form}  title={'3. Customize for Your Audience'} para={'This is where the magic happens. Customize your event to match your vision. Choose themes, food, entertainment, and more!'}/>
              
              </div>
              </div>

              {/* Step 1 Start*/}
              
              {/* Step 1 end */}

              {/* Step 2 Start*/}
              {/* Step 2 end */}

              {/* Step 3 Start*/}
              {/* Step 3 end */}
              </div>

        <div className="form">

  <div className="form-container">
    {/* Sidebar start */}
    <div className="form-sidebar">

      <Sidebar classn={CurrentIndex === 1 ? 'active' : ''} index={1} title={'Your Personal info'}/>
      <Sidebar classn={CurrentIndex === 2 ? 'active' : ''} index={2} title={'About Your Event'}/>
      <Sidebar classn={CurrentIndex === 3 ? 'active' : ''} index={3} title={'Registration Form'}/>
      <Sidebar classn={CurrentIndex === 4 ? 'active' : ''} index={4} title={'Preview'}/>
       
        {/* <div className={CurrentIndex === 1 ? 'active' : ''}>
      <div className="step">
      <div className="circle">1</div>
      <div className="step-content">
      <span>Step 1</span>
      <b>Your Personal info</b>
      </div>
      </div>
    </div> */}


      {/* <div className={CurrentIndex === 2 ? 'active' : ''}>
      <div className="step">
      <div className="circle">2</div>
      <div className="step-content">
      <span>Step 2</span>
      <b>About Your Event</b>
      </div>
      </div>
      </div>
      
      
      <div className={CurrentIndex === 3 ? 'active' : ''}>
      <div className="step">
      <div className="circle">3</div>
      <div className="step-content">
      <span>Step 3</span>
      <b>Registration Form</b>
      </div>
      </div>
      </div>
      
      <div className={CurrentIndex === 4 ? 'active' : ''}>
      <div className="step">
      <div className="circle">4</div>
      <div className="step-content">
      <span>Step 4</span>
      <b>Preview</b>
      </div>
      </div>
    </div> */}

    </div>
    {/* Sidebar end */}
    {/* * Step 1 start */}

    <div className='mainbar'>

{/* <div className='whole-stp'> */}
{/* {CurrentIndex!=1 ? "hidden " : ""} */}

{/* <div className= {CurrentIndex === 1 ? '' : 'step-hidden'}> */}
     
<div className={CurrentIndex === 1 ? '' : 'step-hidden'}>

<form onSubmit={formikstep1.handleSubmit}>

    <div className="stp step-1  ">
        <div className='stp-content'>
      <div className="header">
        <h1 className="title">Personal info</h1>
        <p className="exp">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className='form-section'>



  {/* ^^^^^^^^ onSubmit={handleSubmit} ^^^^^^^*/}

        {/* <Questions classnam={'planner_name'}  label={'Name'} input_type={'text'} placeholder={'e.g. Karan Verma'}/>
        <Questions classnam={'planner_email'} label={'Email Address'} input_type={'text'} placeholder={'e.g. karan@sample.com'}/>
      <Questions classnam={'planner_number'}  label={'Phone Number'} input_type={'tel'} placeholder={'e.g. +123 4567 890'}/> */}

        <div className="label">
          <label htmlFor="name">Name</label>
          {formikstep1.touched.fullname && formikstep1.errors.fullname && (
         <p className="error">{formikstep1.errors.fullname}</p>
         )} 

        </div>
        <input  className=' input'
          required=""
          type="text"
          name="fullname"
          id="name"
          placeholder="e.g. Karan Verma"
          onChange={formikstep1.handleChange}
          onBlur={formikstep1.handleBlur}
           value= {formikstep1.values.fullname}
          />
      
      
        <div className="label">
          <label htmlFor="email">Email Address</label>
          {formikstep1.touched.email && formikstep1.errors.email && (
         <p className="error">{formikstep1.errors.email}</p>
        )} 

        </div>
        <input  className=' input'
          required=""
          type="text"
          name="email"
          id="email"
          placeholder="e.g. karan@sample.com"
          onChange={formikstep1.handleChange}
          onBlur={formikstep1.handleBlur}
          value= {formikstep1.values.email}
          />
      
      
        <div className="label">
          <label htmlFor="name">Phone Number</label>
          {formikstep1.touched.phone && formikstep1.errors.phone && (
         <p className="error">{formikstep1.errors.phone}</p>
        )}

          
        </div>
        <input  className='input'
          required=""
          type="tel"
          name="phone"
          id="phone"
          placeholder="e.g. Phone Number"
          onChange={formikstep1.handleChange}
          onBlur={formikstep1.handleBlur}
          value= {formikstep1.values.phone}
        />


      
      
      </div>
      
                </div>
                
                

      <div className="btnss btns-stp1">
        <button className="next-stp " type="submit" >
          Next Step
        </button>
      </div>

      </div>
      </form>

      </div>

     
      {/* </div> */}
   
    {/* Step 1 end */}
    {/* * Step 2 start */}
    {/* {(CurrentIndex!==2) ? " hidden "}  */}

    <div className={CurrentIndex === 2 ? '' : 'step-hidden'}>
    <form onSubmit={formikstep2.handleSubmit}>
    <div className="stp step-2">

    <div className='stp-content'>

      <div className="header">
        <h1 className="title">Enter about your Event</h1>
        <p className="exp">Please provide title, description and other info about your Event.</p>
      </div>

      <div className='form-section'>

    


      {/* <Questions classnam={'event_name'} label={'Event Name'} input_type={'text'} placeholder={'e.g. Kashti'}/>
      <Questions classnam={'event_desc'} label={'Event Description'} input_type={'text'} placeholder={'e.g. Tell us about your Event'}/> */}
      {/* <Questions className={'Event_category'} label={'Event Category'} input_type={'time'} placeholder={''}/> */}

      
<div className='event_name question'>

      <div className="label">
          <label htmlFor="eventname">Event Name</label>
          {formikstep2.touched.eventname && formikstep2.errors.eventname && (
          <p className="error">{formikstep2.errors.eventname}</p>
          )}
          </div>
         
          <input  className=' input'
          required=""
          type="text"
          id="eventname"
          placeholder="e.g. Aaina"
          onChange={formikstep2.handleChange}
          
          onBlur={formikstep2.handleBlur}
           value= {formikstep2.values.eventname}
          />
          
</div>


{
  formikstep2.touched.eventname &&
<div className="unique_id">
<p className="id_show">
      Unique id for your event is{' '}
      <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>{generateUniqueID(formikstep1.values.email,formikstep2.values.eventname)}</span>
    </p>
</div>
}

{
  exist && 
  <div className="exists">
    <p className="exitsp">This unique_id already exists, please change either the mail or name of event</p>
    </div>
}

<div className='event_desc question'>
          <div className="label">
          <label htmlFor="eventinfo">Event Description</label>
         
          {formikstep2.touched.eventdesc && formikstep2.errors.eventdesc && (
          <p className="error">{formikstep2.errors.eventdesc}</p>
          )}
          </div>
          <input  className=' input'
          required=""
          type="text"
          id="eventdesc"
          placeholder="e.g. Tell us about your Event"
          onChange={formikstep2.handleChange }
          onBlur={formikstep2.handleBlur}
           value= {formikstep2.values.eventdesc}
        />
</div>
     
      <div className="label mode_question">
          <label htmlFor="eventmode">Mode of your Event</label>
          {formikstep2.touched.eventmode && formikstep2.errors.eventmode && (
          <p className="error">{formikstep2.errors.eventmode}</p>
          )}
        </div>
        {/* <form> */}
        <input  className='input-radio'
          required=""
          type="radio"
          name="eventmode"
          id="onlinemode" 
          value="online"
          checked={formikstep2.values.eventmode === 'online'}
      onChange={formikstep2.handleChange}
          // checked={formikstep2.values.onlineeventmode}
          // onChange={formikstep2.handleChange}
          />
        <label htmlFor="onlinemode">Online</label>
        <br></br>
        <input className='input-radio'
          required=""
          type="radio"
          name="eventmode"
          id="offlinemode" 
          value="offline"
          checked={formikstep2.values.eventmode === 'offline'}
      onChange={formikstep2.handleChange}

          // checked={formikstep2.values.offlineeventmode}
          // onChange={formikstep2.handleChange}
          />
        <label htmlFor="offlinemode">Offline</label>
        {/* </form> */}

       


        {/* <Questions classnam={'Event_date'} label={'Event Date'} input_type={'date'} placeholder={''}/>
        <Questions classnam={'Event_time'} label={'Event Time'} input_type={'time'} placeholder={'HH : MM'}/> */}

        {
          formikstep2.values.eventmode==='offline' && 
        

<div className='event_loc question'>
      <div className="label">
          <label htmlFor="eventloc">Event Location</label>
          {formikstep2.touched.eventloc && formikstep2.errors.eventloc && (
          <p className="error">{formikstep2.errors.eventloc}</p>
          )}
          </div>
          <input  className=' input'
          required=""
          type="text"
          id="eventloc"
          placeholder="e.g .Aslat nagar,Muradnagar near KIET clg,pincode: 239323"
          onChange={formikstep2.handleChange}
          onBlur={formikstep2.handleBlur}
           value= {formikstep2.values.eventloc}
          />
</div>
}
        
<div className='Event_date question'>
        <div className="label">
          <label htmlFor="eventdate">Event Date</label>
          {formikstep2.touched.eventdate && formikstep2.errors.eventdate && (
          <p className="error">{formikstep2.errors.eventdate}</p>
          )}

          </div>
          <input className=' input'
          required=""
          type="date"
          id="eventdate"
          placeholder="e.g. DD/MM/YYYY"
        />

</div>
<div className='Event_time question'>
        <div className="label">
          <label htmlFor="eventtime">Event Time</label>
          {formikstep2.touched.eventtime && formikstep2.errors.eventtime && (
          <p className="error">{formikstep2.errors.eventtime}</p>
          )}
          </div>
          <input className='input'
          required=""
          type="time"
          id="eventtime"
          placeholder="e.g. HH:MM:SS"
        />

</div>
        {/* ADD EVENT START AND END DATE TOO */}

<div className='Event_cat question'>
        <div className="label">
          <label htmlFor="eventcategory">Event Category</label>
          {formikstep2.touched.eventcat && formikstep2.errors.eventcat && (
          <p className="error">{formikstep2.errors.eventcat}</p>
          )}

        </div>
        <select  className='input'
          required=""
          list="categories"
          id="eventcategory"
          name='eventcat'
          value={formikstep2.values.selectedOption}
        onChange={formikstep2.handleChange}
          >
        <option value="" disabled selected hidden>Choose your category</option>
        <option value="Festival">Festival</option>
        <option value="Concert">Concert</option>
        <option value="Screening">Screening</option>
        <option value="Workshop">Workshop</option>
        <option value="Party">Party</option>
        <option value="Meeting">Meeting</option>
        <option value="College Fest">College Fest</option>
        <option value="Game_Competiton">Game/Competiton</option>
        <option value="Other">Other</option>
        </select>
</div>

<div className='Event_dur question'>
        <div className="label">
          <label htmlFor="eventdur">Event Duration</label>
          {formikstep2.touched.eventduration && formikstep2.errors.eventduration && (
          <p className="error">{formikstep2.errors.eventduration}</p>
          )}

        </div>
        <select  className='input'
          required=""
          list="durations"
          id="eventdur"
          name='eventduration'
          value={formikstep2.values.selectedOption}
        onChange={formikstep2.handleChange}
          >
        <option value="" disabled selected hidden>Choose the duration</option>
        <option value="Festival">Less than 1 hour</option>
        <option value="Concert">Between 1 and 2 hour</option>
        <option value="Screening">More than 2 hour</option>
        </select>
</div>

<div className='ticket_price question'>
      <div className="label">
          <label htmlFor="ticketprice">Ticket price(if event is free then enter 0 here)</label>
          <p style={{ color: 'blue' }}>Please enter amount in rupees(Rs)</p>
          {formikstep2.touched.ticketprice && formikstep2.errors.ticketprice && (
          <p className="error">{formikstep2.errors.ticketprice}</p>
          )}
          </div>
          <input  className=' input'
          required=""
          type="number"
          id="ticketprice"
          placeholder="500 Rs"
          onChange={formikstep2.handleChange}
          onBlur={formikstep2.handleBlur}
           value= {formikstep2.values.ticketprice}
          />
</div>

<div className='reg_ques'>
        <input  className='input-checkbox'
        type='checkbox' 
        id='isrefundable'
        name='isrefundable'
        value='false'
        checked={formikstep2.values.isrefundable}
        onChange={formikstep2.handleChange}
        />
        <label htmlFor='isrefundable'>Refundable</label>
        </div>

<div className='Event_capacity question'>
  <div className='label'>
    <label htmlFor="eventcapacity">Capacity</label>
    {formikstep2.touched.eventcapacity && formikstep2.errors.eventcapacity && (
    <p className='error'>{formikstep2.errors.eventcapacity}</p>
    )}
  </div>
<input 
className='range_input'
        type="range"
        min="0"
        max="5000"
        step='50'
        name="eventcapacity"
        id='eventcapacity'
        value={formikstep2.values.eventcapacity}
        onChange={formikstep2.handleChange}
      />
      
  <p className='capacity_output'>Number of Seat: {formikstep2.values.eventcapacity}</p>

      </div>
      {/*comment 1*/}

      </div>

      </div>
      <div className="btnss">
        <button className="prev-stp" type="button" onClick={back}>
          Go Back
        </button>
        <button className="next-stp" type="submit">
          Next Step
        </button>
      </div>

      `
    </div>
    </form>

    </div>
    {/* Step 2 end */}
    {/* * Step 3 start */}

    <div className={CurrentIndex === 3 ? '' : 'step-hidden'}>
      <form onSubmit={formikstep3.handleSubmit}>
    <div className="stp step-3">

    <div className='stp-content'>
      <div className="header">
        <h1 className="title">Create Registration Form</h1>
        <p className="exp">Create your own personalized Registration page for Audience.</p>
      </div>

      <div className='form-section'>
    

        <div className='label'>
        <label htmlFor='register_ques'>Select question for your registation form.</label>
        </div>

        <div className='reg_ques'>
        <input  className='input-checkbox'
        type='checkbox' 
        id='Fullname'
        name='askfullname'
        value='Fullname'
        checked={formikstep3.values.askfullname}
  onChange={formikstep3.handleChange}
        />
        <label htmlFor='Fullname'> Ask Full Name</label>
        </div>
        
         <div className='reg_ques'>
        <input className='input-checkbox'
        type='checkbox' 
        id='Email'
        name='askemail'
        value='Email'
        checked={formikstep3.values.askemail}
  onChange={formikstep3.handleChange}
        />
        <label htmlFor='Email'> Ask Email Address</label>
        </div>
        
         <div className='reg_ques'>
        <input  className='input-checkbox'
        type='checkbox' 
        id='college'
        name='askcollege'
        value='college'
        checked={formikstep3.values.askcollege}
  onChange={formikstep3.handleChange}
  />
        <label htmlFor='college'> Ask College Name</label>
        </div>
        
         <div className='reg_ques'>
        <input  className='input-checkbox'
        type='checkbox' 
        id='phone_no.'
        name='askphone'
        value='phone_no.'
        checked={formikstep3.values.askphone}
  onChange={formikstep3.handleChange}
        />
        <label htmlFor='phone_no.'> Ask Phone Number</label>
        </div>
        
        

    
    

      </div>
      </div>
      <div className="btnss">
        <button className="prev-stp" type="button"  onClick={back}>
          Go Back
        </button>
        <button className="next-stp" type="submit">
          Next Step
        </button>
      </div>
    </div>
    </form>
    </div>
    {/* Step 3 end */}
    {/* * Step 4 start */}

    <div className={CurrentIndex === 4 ? '' : 'step-hidden'}>
    <form onSubmit={formikstep4.handleSubmit}>
    <div className="stp step-4">
      <div className="header">
        <h1 className="title">Preview</h1>
        <p className="exp">
          Double-check everything looks OK before confirming.
        </p>
      </div>
     <p> herewillbeprevieww
       {/* {(formikstep1.values.email, formikstep2.values.eventname)} */}
     </p>
      <div className="btnss">
        <button className="prev-stp" type="button"  onClick={back}>
          Go Back
        </button>
        <button className="next-stp" type="submit">
          Submit
        </button>
      </div>
    </div>
    </form>


    {/* Step 4 end */}
    {/* Step 5 start */}
{/* 
    <div className={CurrentIndex === 5 ? '' : 'step-hidden'}>
    <div className="stp step-5  ">
    <img src="./assets/images/icon-thank-you.svg" alt="" />
    <div className="header">
    <h1 className="title">Thank you!</h1>
    <p className="exp">
    Thanks for supporting us by using our platform! We hope you have good experience using
    our platform. 
    </p>
    </div>
    <button className="next-stp" />
    </div>
  </div> */}
    {/* Step 5 end */}
  
</div>

</div>



</div>


</div>
</div>

    

    )

}
