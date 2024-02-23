// import React from 'react';
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import './audienceRegister.css';

const AudienceRegistration = () => {
  const { uniqueId } = useParams();
  // console.log(uniqueId)
//   const { eventId } = useParams();

//   console.log("event ID", eventId)
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      eventId: {uniqueId},
      // checkedin: false,
    },
    onSubmit: async (values) => {
      try {
        // Send a POST request to register the audience for the event
        // http://localhost:3000/api/events/create
        const response = await fetch(`http://localhost:3000/api/audience/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          console.log('Audience registered successfully');
        } else {
          console.error('Failed to register audience');
        }
      } catch (error) {
        console.error('Error registering audience:', error);
      }
    },
  });

  return (
    <>
    <div className='wholepage'>
      <h1 className='mainheading'>Register for the Event with Unique ID : <span className='idclass'>{uniqueId}</span></h1>

      <form onSubmit={formik.handleSubmit}>
      <div className='wholeformsection'>
      <div className='formsection'>
        <div className='question'>
        <label>
          Name:
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </label>
        </div>
        {/* <br /> */}
        <div className='question'>

        <label>
          Email:
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            />
        </label>
            </div>
        {/* <br /> */}
        <div className='question'>
           
        <label>
          Phone:
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            />
        </label>
        </div>
        </div>
        {/* <br /> */}
        {/* <label>
          Event UniqueId:
          <input
          type="text"
          id="eventId"
          name="eventId"
          onChange={formik.handleChange}
          // value={formik.values.eventId}
          value={{uniqueId}}
          />
          </label>
        <br /> */}
       <div className='submitbutton'> <button type="submit">Register</button> </div>
        </div>
      </form>

      
    </div>
    </>
  );
};

export default AudienceRegistration;
