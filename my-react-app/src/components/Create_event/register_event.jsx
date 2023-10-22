import './register_event.css'
import React, {useState, useEffect } from "react";
import Sidebar from './sidebar_component';
import Questions from './q_input';
import Info_section from './info_section';
import image1 from './asset/number-1.png';
// import { useFormik } from 'formik';
//  import * as Yup from 'yup';


export default function RegisterEvent() {      

// const formik = useFormik ({
//   initialValues: {
//     fullname: '',
//     email: '' ,
//     phone: '',
//   },


//   validationSchema: Yup.object({
//     fullname: Yup.string().max(20, 'Name too long!').required('Required'),
//     email: Yup.string().email("Invalid Email").required('Email is required'),
//     phone: Yup.number().required(),
//   }),

//   onSubmit: values => {
//     // next();
//     console.log("submitted by formik");

//     if(CurrentIndex != 4){
//       setCurrentIndex(CurrentIndex + 1);
//     }
    
//     alert(JSON.stringify(values));

//   },
// });

      
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
        <div className='info-section-title'>
              <h1 className='title-1'>WHY OUR EVENT PLANNER?</h1>
              <h2>3 Easy Steps to make your event Successfull.</h2>

              
              {/* <img src={image1} alt='step 1' text={About Yourself} sub-text={Create your Profile so that aduinece could trust you}></img>
              <img src={image1} alt='step 1' text={About Event}></img>
            <img src={image1} alt='step 1' text={Registration Form}></img> */}
              </div>

              <div className='info_section_main'>
                <Info_section className={'img-on-left'} img={image1}  title={'Tell us about yourself'} para={'lorem 32jdfnvkjndfkjnvkjdfnvkjdfkjvdsvds'}/>
                <Info_section className={'img-on-right'} img={''}  title={'Tell us about your event'} para={'dkvlkdflnvjenfkjvner'}/>
                <Info_section className={'img-on-left'} img={''}  title={'Create your own Registration Form'} para={'efknvjefnjvnkjfen'}/>
              
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

<form onSubmit={next}>
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
          <p className="error"></p>
        </div>
        <input  className=' input'
          required=""
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Karan Verma"
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          //  value= {formik.values.fullname}
          />
      
      
        <div className="label">
          <label htmlFor="email">Email Address</label>
          {/* <p className="error">This Field Is Required</p> */}
        </div>
        <input  className=' input'
          required=""
          type="text"
          name="email"
          id="email"
          placeholder="e.g. karan@sample.com"
          // value= {values.email}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          />
      
      
        <div className="label">
          <label htmlFor="name">Phone Number</label>
          {/* <p className="error">This Field Is Required</p> */}
        </div>
        <input  className='input'
          required=""
          type="tel"
          name="phone"
          id="phone"
          placeholder="e.g. Phone Number"
          // value= {values.phone}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
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
    <div className="stp step-2">

    <div className='stp-content'>

      <div className="header">
        <h1 className="title">Enter about your Event</h1>
        <p className="exp">Please provide title, description and other info about your Event.</p>
      </div>

      <div className='form-section'>
      <form>


      <Questions classnam={'event_name'} label={'Event Name'} input_type={'text'} placeholder={'e.g. Kashti'}/>
      <Questions classnam={'event_desc'} label={'Event Description'} input_type={'text'} placeholder={'e.g. Tell us about your Event'}/>
      {/* <Questions className={'Event_category'} label={'Event Category'} input_type={'time'} placeholder={''}/> */}

      {/* <div className="label">
          <label htmlFor="eventname">Event Name</label>
          <p className="error">This Field Is Required</p>
          
          </div>
          <input  className=' input'
          required=""
          type="text"
          id="eventname"
          placeholder="e.g. Aaina"
          />
          <div className="label">
          <label htmlFor="eventinfo">Event Description</label>
          <p className="error">This Field Is Required</p>
          
          </div>
          <input  className=' input'
          required=""
          type="text"
          id="eventinfo"
          placeholder="e.g. Tell us about your Event"
        /> */}

     
      <div className="label mode_question">
          <label htmlFor="eventmode">Mode of your Event</label>
          {/* <p className="error">This Field Is Required</p> */}
        </div>
        <form>
        <input  className='input-radio'
          required=""
          type="radio"
          name="eventmode"
          id="onlinemode" 
          value="Online"
          />
        <label for="onlinemode">Online</label>
        <br></br>
        <input className='input-radio'
          required=""
          type="radio"
          name="eventmode"
          id="offlinemode" 
          value="Offline"
          />
        <label for="offlinemode">Offline</label>
        </form>

       


        <Questions classnam={'Event_date'} label={'Event Date'} input_type={'date'} placeholder={''}/>
        <Questions classnam={'Event_time'} label={'Event Time'} input_type={'time'} placeholder={'HH : MM'}/>
        
        
        {/* <div className="label">
          <label htmlFor="eventdate">Event Date</label>
          <p className="error">This Field Is Required</p>
          
          </div>
          <input className=' input'
          required=""
          type="date"
          id="eventdate"
          placeholder="e.g. DD/MM/YYYY"
        /> */}
        {/* ADD EVENT START AND END DATE TOO */}

        <div className="label">
          <label htmlFor="eventcategory">Event Category</label>
          {/* <p className="error">This Field Is Required</p> */}

        </div>
        <select  className='input'
          required=""
          list="categories"
          id="eventcategory"
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
      
      </form>

      </div>

      </div>
      <div className="btnss">
        <button className="prev-stp" type="button" onClick={back}>
          Go Back
        </button>
        <button className="next-stp" type="submit" onClick={next}>
          Next Step
        </button>
      </div>
    </div>

    </div>
    {/* Step 2 end */}
    {/* * Step 3 start */}

    <div className={CurrentIndex === 3 ? '' : 'step-hidden'}>
    <div className="stp step-3">

    <div className='stp-content'>
      <div className="header">
        <h1 className="title">Create Registration Form</h1>
        <p className="exp">Create your own personalized Registration page for Audience.</p>
      </div>

      <div className='form-section'>
      <form>

        <div className='label'>
        <label htmlFor='register_ques'>Select question for your registation form.</label>
        </div>

        <div className='reg_ques'>
        <input  className='input-checkbox'
        type='checkbox' 
        id='Fullname'
        value='Fullname'/>
        <label for='Fullname'> Ask Full Name</label>
        </div>
        
         <div className='reg_ques'>
        <input className='input-checkbox'
        type='checkbox' 
        id='Email'
        value='Email'/>
        <label for='Email'> Ask Email Address</label>
        </div>
        
         <div className='reg_ques'>
        <input  className='input-checkbox'
        type='checkbox' 
        id='college'
        value='college'/>
        <label for='college'> Ask College Name</label>
        </div>
        
         <div className='reg_ques'>
        <input  className='input-checkbox'
        type='checkbox' 
        id='phone_no.'
        value='phone_no.'/>
        <label for='phone_no.'> Ask Phone Number</label>
        </div>
        
        

    
      </form>

      </div>
      </div>
      <div className="btnss">
        <button className="prev-stp" type="button"  onClick={back}>
          Go Back
        </button>
        <button className="next-stp" type="submit"  onClick={next}>
          Next Step
        </button>
      </div>
    </div>

    </div>
    {/* Step 3 end */}
    {/* * Step 4 start */}

    <div className={CurrentIndex === 4 ? '' : 'step-hidden'}>
    <div className="stp step-4">
      <div className="header">
        <h1 className="title">Preview</h1>
        <p className="exp">
          Double-check everything looks OK before confirming.
        </p>
      </div>
     <p> herewillbeprevieww
     </p>
      <div className="btnss">
        <button className="prev-stp" type="button"  onClick={back}>
          Go Back
        </button>
        <button className="next-stp" type="submit"  onClick={next}>
          Submit
        </button>
      </div>
    </div>
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
