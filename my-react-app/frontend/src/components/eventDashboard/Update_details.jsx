import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'
import axios from "axios";

export default function Update_details() {
  let { uniqueId } = useParams();
//   const [eventDetails, setEventDetails] = useState(null);
const location  = useLocation()
const eventDetails = location.state
  

    

  console.log("Update", eventDetails);

  // Rest of your component code



    
    
    
    const formikstep2 = useFormik ({

        initialValues: {
          eventname: eventDetails.eventName,
          eventdesc: eventDetails.eventDescription ,
          eventmode: eventDetails.eventMode,
         // eventloc:eventDetails.eventloc,
          // offlineeventmode: false,
          eventdate: '',
          eventtime: '',
          eventcat: eventDetails.eventCategory,
          eventduration:eventDetails.Duration,
          ticketprice:eventDetails.Ticketprice,
          isrefundable:false,
          eventcapacity:eventDetails.numberOfSeats,
          // duration:0,
          
        },
        // initialValues: {
        //     eventname: '',
        //     eventdesc: '' ,
        //     eventmode: '',
        //     eventloc:'online',
        //     // offlineeventmode: false,
        //     eventdate: '20:10:2024',
        //     eventtime: '',
        //     eventcat: [],
        //     eventduration:'',
        //     ticketprice:'',
        //     isrefundable:false,
        //     eventcapacity:'',
        //     // duration:0,
            
        //   },
      
      
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
        
        onSubmit: async(values)=> {
            // next();
console.log('suraj')
        //   const
        const data = {
            uniqueId:uniqueId,
            eventDescription:formikstep2.values.eventdesc,
            eventMode:formikstep2.values.eventmode,
            eventDate:formikstep2.values.eventdat,
            eventCategory:formikstep2.values.eventcat,
            Duration:formikstep2.values.eventduration,
            Ticketprice:formikstep2.values.ticketprice,
            numberOfseats:formikstep2.values.eventcapacity,
            eventloc:formikstep2.values.eventloc

        }
        console.log("thiis is the data sending",data)
          console.log("submitted by formik");
        const response = await axios.post(`http://localhost:3000/dashboard/update`,data)
        console.log("this is the response",response)


        }
    })
    //   if (!eventDetails) {
        //     return <p>Loading...</p>;
        //     }
        
        return(
            <>
        <h3>This is the update page</h3>
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


{/* {
  formikstep2.touched.eventname &&
<div className="unique_id">
<p className="id_show">
      Unique id for your event is{' '}
      <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>{generateUniqueID(formikstep1.values.email,formikstep2.values.eventname)}</span>
    </p>
</div>
} */}

{/* {
  exist && 
  <div className="exists">
    <p className="exitsp">This unique_id already exists, please change either the mail or name of event</p>
    </div>
} */}

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
        
        <button className="next-stp" type="submit">
          Save changes
        </button>
      </div>

      `
    </div>
    </form>
   

    </>

    )
}