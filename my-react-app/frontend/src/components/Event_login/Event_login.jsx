import './Event_login.css';
import { useFormik } from 'formik';
 import * as Yup from 'yup';
 import axios from 'axios';
 import Swal from 'sweetalert2'
//  import { useHistory } from 'react-router-dom'; 
 import { Link, useNavigate } from 'react-router-dom';

export default function Event_login() {

  // console.log("helloooo from loginn")

  // const history = useHistory();
  
  const navigate = useNavigate()


  const formikstep1 = useFormik({
    initialValues: {
      uniqueId: '',
      Password: '',
    },

    validationSchema: Yup.object({
      uniqueId: Yup.string().required(),
      Password: Yup.string().required(),
    }),

    onSubmit: async (values) => {
      console.log("hereeeeeee")

      try {
        
        console.log("values");
        const response = await axios.post('http://localhost:3000/api/loginevents/loginhere', values);
        // const response = await axios.post('http://localhost:3000/api/events/create', values);
        console.log(values);
        console.log("main",response)
        console.log(response.data)

        // Handle successful authentication, e.g., redirect to the dashboard
        console.log('Authentication successsssful', response.data);

         
        if(response.data.message==='success'){
          Swal.fire({
              icon: 'success',
              title: 'Logged In',
              // customClass: 'custom-swal-text-size',
             
            }).then((result) =>{
              // Check if the user clicked "Ok"
              if (result.isConfirmed) {
                // Navigate to the desired location
                navigate(`/dashboard/${values.uniqueId}`,{replace:true});
              }})
      }

      else if(response.data.message==='failed'){
console.log("failed")
Swal.fire({
icon: "error",
title: "Oops...",
html:'Something went wrong! <br> Please try again'

});
      }

      else if(response.data.message==='wrong uniqueId'){
          Swal.fire({
              icon: "error",
              title: "UniqueId does not exist",                    
            });
      }

      else if(response.data.message==='wrong'){
          Swal.fire({
              icon: "error",
              title: "Wrong password",                    
            });
      }
     } catch (error) {
      console.log('Error changing password catch', error);
      Swal.fire({
          icon: "error",
          title: "Oops...",
          html: '<div class="swal-fail">Something went wrong!<br>Please try again after some time</div>',
          
        });
     }
    },
  });

  

  const handleSubmitClick = () => {
    formikstep1.submitForm();
  };
  const handleAboutUniqueIDClick = (e) => {
    e.preventDefault();
    alert('Event ID is : "Your Email id (without "@gmail.com") + "_" + Your event name with no space."');
  };


    return (
        <>

        <div className="login_page">

<div className="form_login">

<div className="form-container_login">

<form onSubmit={formikstep1.handleSubmit}>

    <div className="stp step-1  ">
        <div className='stp-content_login'>
      <div className="header">
        <h1 className="title">LOGIN INTO YOUR EVENT</h1>
        <p className="exp">
          Please enter the <a href="#" onClick={handleAboutUniqueIDClick}>Unique Event ID</a> for your Event and the password
        </p>
      </div>
      <div className='form-section_login'>

        <div className="email">

  {/* ^^^^^^^^ onSubmit={handleSubmit} ^^^^^^^*/}

        {/* <Questions classnam={'planner_name'}  label={'Name'} input_type={'text'} placeholder={'e.g. Karan Verma'}/>
        <Questions classnam={'planner_email'} label={'Email Address'} input_type={'text'} placeholder={'e.g. karan@sample.com'}/>
      <Questions classnam={'planner_number'}  label={'Phone Number'} input_type={'tel'} placeholder={'e.g. +123 4567 890'}/> */}

        <div className="label">
          <label htmlFor="eventcode">Event UniqueID:</label>
          {/* {formikstep1.touched.fullname && formikstep1.errors.fullname && (
         <p className="error">{formikstep1.errors.fullname}</p>
         )}  */}

        </div>
        <input  className='input'
          required=""
          type="text"
          name="uniqueId"
          id="eventcode"
          placeholder="e.g. karanverma_Aaina"
          // onChange={formik.handleChange}
          onChange={formikstep1.handleChange}
          onBlur={formikstep1.handleBlur}
          value= {formikstep1.values.uniqueId}
          />
          </div>

          <div className="email">
      
      
        <div className="label">
          <label htmlFor="eventpassword">Password:</label>
          {/* {formikstep1.touched.email && formikstep1.errors.email && (
         <p className="error">{formikstep1.errors.email}</p>
        )}  */}

        </div>
        <input  className=' input'
          required=""
          type="password"
          name="Password"
          id="eventpassword"
          placeholder="*********"
          onChange={formikstep1.handleChange}
          onBlur={formikstep1.handleBlur}
          value= {formikstep1.values.Password}
          />
</div>
          <Link to="/forgotpassword"><p className='forgotpassword'>Forgot Password?</p></Link>
      
      
        {/* <div className="label">
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
          // onChange={formikstep1.handleChange}
          // onBlur={formikstep1.handleBlur}
          // value= {formikstep1.values.phone}
        /> */}


      
      
      </div>
      
                </div>
                
                

      <div className="btnss btns-stp1 login_btn">
       
       <Link to='/registerevent'>
      <button className="register_event" type="button">
         Haven't registered Event yet?
        </button>
        </Link>
         {/* <Link to="/dashboard"> */}

        <button className="login-stp" type='button' onClick={handleSubmitClick}>
          Login
        </button>
    {/* </Link> */}

      </div>

      </div>
      </form>
      </div>
      </div>
      </div>
        </>
    );
}


