import React, {useState, useEffect }  from 'react';
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import './audienceRegister.css';

// import { useFormik } from 'formik';
 import * as Yup from 'yup';
 import Sidebar from '../Create_event/sidebar_component';
 import axios from 'axios'

const AudienceRegistration = () => {
  const { uniqueId } = useParams();
  console.log("uniwuw: " , uniqueId);


  const [ticketCount, setTicketCount] = useState(0);

  const formikstep1 = useFormik ({
    initialValues: {
      ticketCount: '',
      // email: '' ,
      // phone: '',
    },
  
  
    validationSchema: Yup.object({
      ticketCount: Yup.number().min(1, 'Cannot buy Zero Ticket').max(10 ,'10 is the max limit to buy Ticket at a time.(To buy more Register again)').required('Required'),
      // email: Yup.string().email("Invalid Email").required('Email is required'),
      // phone: Yup.number('Must be a Number').required(),
    }),
  
    onSubmit: values => {
      // next();

      setTicketCount(values.ticketCount);
      console.log(ticketCount);
      console.log("submitted by formik");
  
      if(CurrentIndex != 2){
        setCurrentIndex(CurrentIndex + 1);
      }
      
      alert(JSON.stringify(values));
  
    },
  });

  

  const formikstep2 = useFormik({
    initialValues:({
      users: Array.from({ length: ticketCount }, () => ({ name: '', email: '', phone: ''})),
    }),

    validationSchema: Yup.object({
      users: Yup.array().of(
        Yup.object().shape({
          name: Yup.string().required('Name is required'),
          email: Yup.string().email('Invalid email').required('Email is required'),
          phone: Yup.string().required('Phone number is required'),
        })
      ),
    }),


    // onSubmit: async (values, { resetForm }) => {
    onSubmit: async (values) => {

      console.log("going to submission");
      console.log(values);
      try {
        const users = values.users;

        console.log(users);
        
        for (const user of users) {   
          try {
              user.eventId = uniqueId;
            console.log(user);
            // Send a POST request to register the audience for the event
            // http://localhost:3000/api/events/create
            const response = await fetch(`http://localhost:3000/api/audience/register`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(user),
            });
    
            if (response.ok) {
              console.log('Audience registered successfully');
            } else {
              console.error('Failed to register audience');
            }
          } catch (error) {
            console.error('Error registering audience:', error);
          }
    
    }
      // resetForm();
    
    } catch (error) {
      console.error('Error processing form submission:', error);
    }
  },
  });



  // const formikstep2 = useFormik ({
  //   initialValues: {
  //     eventname: '',
  //     eventdesc: '' ,
  //     eventmode: '',
  //     // offlineeventmode: false,
  //     eventdate: '20:10:2024',
  //     eventtime: '',
  //     eventcat: [],
  //     // selectedOption: '',
  //     // eventcapacity: 0,
  //   },
  
  
  //   validationSchema: Yup.object({
  //     eventname: Yup.string().min(1, 'Name too short!').max(20, 'Name too long!').required('Required'),
  //     eventdesc: Yup.string().min(5, 'Description too short!').required('Required'),
  //     // eventmode: Yup.mixed().test('Select atleast one mode', function (value) {
  //     //   const { onlineeventmode, offlineeventmode } = this.parent;
  //     //   return onlineeventmode || offlineeventmode;
  //     // }),
  //     eventmode: Yup.string().required(),
  //     // onlineeventmode: Yup.boolean().required(),
  //     // offlineeventmode: Yup.boolean().required(),
  //     // eventdate: Yup.date().typeError('Invalid date format').required('Date is required'),
  //     eventdate: Yup.date(),
  //     eventtime: Yup.string().matches( /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/,'Invalid time format (HH:mm)'),
  //     eventcat: Yup.string().required('Category is required'),
  //     // eventcapacity: Yup.number().min(10, 'Mininum capacity must be 10').required(),
  //     // ^^^^^^^^^^(oneOf([])).
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


//   const formikstep3 = useFormik ({
//     initialValues: {
//      askfullname: false,
//      askemail: false,
//      askcollege: false,
//      askphone: false,
//     //  ask: false,
//     },
  
  
//     validationSchema: Yup.object({
//     askfullname: Yup.boolean().required(),
//     askemail: Yup.boolean().required(),
//     askcollege: Yup.boolean().required(),
//     askphone: Yup.boolean().required(),

//     }),
  
//     onSubmit: values => {
//       // next();
//       console.log("submitted by formik");
  
//       if(CurrentIndex != 4){
//         setCurrentIndex(CurrentIndex + 1);
//       }
      
//       alert(JSON.stringify(values));
  
//     },
//   });
  
//  const wholedata= {
//     // Initialize with default values or empty strings
//     organizerName: formikstep1.values.fullname,
//     organizerEmail: formikstep1.values.email,
//     organizerPhone: formikstep1.values.phone,
//     eventName: formikstep2.values.eventname,
//     eventDescription: formikstep2.values.eventdesc,
//     eventMode: formikstep2.values.eventmode,
//     eventDate: formikstep2.values.eventdate,
//     eventCategory: formikstep2.values.eventcat,
//     numberOfSeats: 0,
//     showFullName: formikstep3.values.askfullname,
//     showEmail: formikstep3.values.askemail,
//     showCollegeName: formikstep3.values.askcollege,
//     showPhoneNumber: formikstep3.values.askphone,
//     uniqueId: generateUniqueID(formikstep1.values.email, formikstep2.values.eventname),
//     // password: hashPassword(formikstep1.values.email),
//   };

// // console.log(wholedata);

//   const formikstep4 = useFormik({

//     // console.log("karaannn");
//     initialValues: {
//       // Initialize with default values or empty strings
//       organizerName: '',
//       organizerEmail: '',
//       organizerPhone: '',
//       eventName: '',
//       eventDescription: '',
//       eventMode: '',
//       eventDate: '',
//       eventCategory: '',
//       numberOfSeats: 0,
//       showFullName: false,
//       showEmail: false,
//       showCollegeName: false,
//       showPhoneNumber: false,
//       uniqueId: '',
//       // password: '',
//     },
//     onSubmit: async (values) => {
//       try {
//         // Send data to the backend
//       //  await console.log(wholedata);

       
//         await axios.post('http://localhost:3000/api/events/create', wholedata);

//         console.log('Event data has been saved successfully');
//       } catch (error) {
//         console.error('Failed to save event data:', error);
//       }
//     },
//   });

      
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

        <div className="form">

  <div className="form-container">
    {/* Sidebar start */}
    <div className="form-sidebar">

      <Sidebar classn={CurrentIndex === 1 ? 'active' : ''} index={1} title={'NUMBER OF TICKET'}/>
      <Sidebar classn={CurrentIndex === 2 ? 'active' : ''} index={2} title={'AUDIENCE DETAILS'}/>
      {/* <Sidebar classn={CurrentIndex === 3 ? 'active' : ''} index={3} title={'Registration Form'}/>
      <Sidebar classn={CurrentIndex === 4 ? 'active' : ''} index={4} title={'Preview'}/> */}
      


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
        <h1 className="title">Select Number of Ticket</h1>
        <p className="exp">
          Price of one Ticket is $$$$.
        </p>
      </div>
      <div className='form-section'>



  {/* ^^^^^^^^ onSubmit={handleSubmit} ^^^^^^^*/}

        {/* <Questions classnam={'planner_name'}  label={'Name'} input_type={'text'} placeholder={'e.g. Karan Verma'}/>
        <Questions classnam={'planner_email'} label={'Email Address'} input_type={'text'} placeholder={'e.g. karan@sample.com'}/>
      <Questions classnam={'planner_number'}  label={'Phone Number'} input_type={'tel'} placeholder={'e.g. +123 4567 890'}/> */}

        <div className="label">
          <label htmlFor="ticketCount">Number of Ticket</label>
          {formikstep1.touched.ticketCount && formikstep1.errors.ticketCount && (
         <p className="error">{formikstep1.errors.ticketCount}</p>
         )} 

        </div>

        {/* <div id="minus">-</div> */}
    <input type="number" id="number"
    name="ticketCount"
   onChange={formikstep1.handleChange}
    onBlur={formikstep1.handleBlur}
     value= {formikstep1.values.ticketCount} 
     />
    {/* <div id="plus">+</div> */}
  </div>
      </div>
      
                </div>
                
                

      <div className="btnss btns-stp1">
        <button className="next-stp " type="submit" >
          Next Step
        </button>
      </div>

      </form>
      </div>

    <div className={CurrentIndex === 2 ? '' : 'step-hidden'}>
    <form onSubmit={formikstep2.handleSubmit}>
    <div className="stp step-2">

    <div className='stp-content'>

      

      <div className="header">
        <h1 className="title">Enter about your Details</h1>
        <p className="exp">Please provide name & Emails for each Audience.</p>
      </div>

      <div className='form-section'>

      {Array.from({ length: ticketCount }).map((_, index) => (
<div>

  <h3>Detail about Audience No. {index + 1}:</h3>
      <div className="label">
          <label htmlFor="name">Name:</label>
          {/* {formikstep2.touched.name && formikstep2.errors.name && (
          <p className="error">{formikstep2.errors.name}</p>
          )} */}
           {formikstep2.touched.users && formikstep2.touched.users[index] && formikstep2.touched.users[index].name  && formikstep2.errors.users && formikstep2.errors.users[index] && formikstep2.errors.users[index].name && (
    <p className="error">{formikstep2.errors.users[index].name}</p>
)}
          </div>
          <input  className=' input'
          required=""
          type="text"
          id={`users[${index}].name`}
          name={`users[${index}].name`}
          placeholder="Enter you name"
          onChange={formikstep2.handleChange}
          onBlur={formikstep2.handleBlur}
           value= {formikstep2.values.name}
          />


      <div className="label">
          <label htmlFor="email">Email:</label>
          {/* {formikstep2.touched.email && formikstep2.errors.email && (
          <p className="error">{formikstep2.errors.email}</p>
          )} */}
             {formikstep2.touched.users && formikstep2.touched.users[index] && formikstep2.touched.users[index].email  && formikstep2.errors.users && formikstep2.errors.users[index] && formikstep2.errors.users[index].email && (
    <p className="error">{formikstep2.errors.users[index].email}</p>
)}
          </div>
          <input  className=' input'
          required=""
          type="text"
          id={`users[${index}].email`}
          name={`users[${index}].email`}
          placeholder="Enter you email"
          onChange={formikstep2.handleChange}
          onBlur={formikstep2.handleBlur}
           value= {formikstep2.values.email}
          />
      <div className="label">
          <label htmlFor="email">Phone Number:</label>
          {/* {formikstep2.touched.phone && formikstep2.errors.phone && (
          <p className="error">{formikstep2.errors.phone}</p>
          )} */}

{formikstep2.touched.users && formikstep2.touched.users[index] && formikstep2.touched.users[index].phone  && formikstep2.errors.users && formikstep2.errors.users[index] && formikstep2.errors.users[index].phone && (
    <p className="error">{formikstep2.errors.users[index].phone}</p>
)}

          </div>
          <input  className=' input'
          required=""
          type="text"
          id={`users[${index}].phone`}
  name={`users[${index}].phone`}
          placeholder="Enter you phone"
          onChange={formikstep2.handleChange}
          onBlur={formikstep2.handleBlur}
           value= {formikstep2.values.phone}
          />

</div>


          ))}

      {/* <Questions classnam={'event_name'} label={'Event Name'} input_type={'text'} placeholder={'e.g. Kashti'}/>
      <Questions classnam={'event_desc'} label={'Event Description'} input_type={'text'} placeholder={'e.g. Tell us about your Event'}/> */}
      {/* <Questions className={'Event_category'} label={'Event Category'} input_type={'time'} placeholder={''}/> */}

      {/*comment 1*/}

      </div>

      </div>
      <div className="btnss">
        <button className="prev-stp" type="button" onClick={back}>
          Go Back
        </button>
        <button className="next-stp" type="submit">
          SUbmit
        </button>
      </div>

      `
    </div>
    </form>

    </div>
      </div>


  
</div>

</div>



</div>

)
  // console.log(uniqueId)
//   const { eventId } = useParams();

//   console.log("event ID", eventId)

};

export default AudienceRegistration;
