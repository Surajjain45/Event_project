import './Event_login.css';
export default function Event_login() {


  const handleClick = () => {
    alert('Event ID is : "Your Email id (without "@gmail.com") + Your event name with no space."');
  };


    return (
        <>

<div className="form">

<div className="form-container">

<form>

    <div className="stp step-1  ">
        <div className='stp-content'>
      <div className="header">
        <h1 className="title">LOGIN INTO YOUR EVENT</h1>
        <p className="exp">
          Please enter the <a href="#" onClick={handleClick}>Unique Event ID</a> for your Event and the password
        </p>
      </div>
      <div className='form-section'>



  {/* ^^^^^^^^ onSubmit={handleSubmit} ^^^^^^^*/}

        {/* <Questions classnam={'planner_name'}  label={'Name'} input_type={'text'} placeholder={'e.g. Karan Verma'}/>
        <Questions classnam={'planner_email'} label={'Email Address'} input_type={'text'} placeholder={'e.g. karan@sample.com'}/>
      <Questions classnam={'planner_number'}  label={'Phone Number'} input_type={'tel'} placeholder={'e.g. +123 4567 890'}/> */}

        <div className="label">
          <label htmlFor="eventcode">Event ID</label>
          {/* {formikstep1.touched.fullname && formikstep1.errors.fullname && (
         <p className="error">{formikstep1.errors.fullname}</p>
         )}  */}

        </div>
        <input  className='input'
          required=""
          type="text"
          name="eventcode"
          id="eventcode"
          placeholder="e.g. karanvermaAaina"
          // onChange={formikstep1.handleChange}
          // onBlur={formikstep1.handleBlur}
          //  value= {formikstep1.values.fullname}
          />
      
      
        <div className="label">
          <label htmlFor="eventpassword">Password</label>
          {/* {formikstep1.touched.email && formikstep1.errors.email && (
         <p className="error">{formikstep1.errors.email}</p>
        )}  */}

        </div>
        <input  className=' input'
          required=""
          type="password"
          name="eventpassword"
          id="eventpassword"
          placeholder="*********"
          // onChange={formikstep1.handleChange}
          // onBlur={formikstep1.handleBlur}
          // value= {formikstep1.values.email}
          />

          <a href='#' className='forgotpassword'>Forgot Password?</a>
      
      
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
                
                

      <div className="btnss btns-stp1">
      <button className="register_event" type="button">
         Haven't registered Event yet?
        </button>
        <button className="login-stp" type="submit" >
          Login
        </button>
      </div>

      </div>
      </form>
      </div>
      </div>
        </>
    );
}


