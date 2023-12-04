import Sidebar from "../Create_event/sidebar_component"
import { useState } from "react";
import './user_form.css'
import { useFormik } from "formik";
import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const event_register = Yup.object({
  name:Yup.string().min(2,'Too short').max(50).required("Please enter your name"),
  email:Yup.string().email('Invalid email').required("Please enter your email"),
  phone:Yup.string().matches(phoneRegExp,'Invalid number').required("Please enter your phone number"),
})

const initialvalue = {
    name:'',
    email:'',
    phone:'',
};

export default function User_form(){
    const [CurrentIndex] = useState(1);

    const {values, handleBlur, handleChange, handleSubmit, errors,touched } = useFormik({
        initialValues:initialvalue,
        validationSchema : event_register,
        onSubmit:(values)=>{
            console.log(values)
        }
    })

   
   
       return(
       <>

       <div className="form">
        <div className="form-container">

            <div className="form-sidebar user">
       <Sidebar classn={CurrentIndex === 1 ? 'active' : ''} index={1} title={'No. of Tickets'}/>
      <Sidebar classn={CurrentIndex === 2 ? 'active' : ''} index={2} title={'Payment'}/>
      <Sidebar classn={CurrentIndex === 3 ? 'active' : ''} index={3} title={'completion'}/>
    
      </div>

      <div className="main_bar">
          <div className= { CurrentIndex === 1 ? '' : 'step-hidden'}>
                
          <form onSubmit={handleSubmit}>
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
          onChange={handleChange}
          onBlur={handleBlur}
           value= {values.name}
          />

          {(errors.name && touched.name) && <p className="error">{errors.name}</p>}
      
      
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
          value= {values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          />
       {(errors.email && touched.email) && <p className="error">{errors.email}</p>}
      
      
        <div className="label">
          <label htmlFor="phone">Phone Number</label>
          {/* <p className="error">This Field Is Required</p> */}
        </div>
        <input  className='input'
          required=""
          type="tel"
          name="phone"
          id="phone"
          placeholder="e.g. Phone Number"
          value= {values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />

           {(errors.phone && touched.phone) && <p className="error">{errors.phone}</p>}
      
      
      
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
        </div>
        </div>
        </div>
      
       
       </>
       )

}