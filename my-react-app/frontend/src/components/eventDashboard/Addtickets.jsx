import axios from "axios"
import { useFormik } from "formik"
import { useParams } from "react-router-dom"

export default function Add_ticket  (){
    console.log("Adding tickets")
    const uniqueId = useParams().uniqueId
    console.log(uniqueId)
        const formik = useFormik({
            initialValues:{
                numberOfSeats: 0,
            },
            onSubmit: (values)=>{
              try {
                const response = axios.post(`http://localhost:3000/dashboard/${uniqueId}/add_tickets`)
              } catch (error) {
                console.log("Failed to add the tickets",error)
              }
            }
        })


        return(
            <>
            <form onSubmit={formik.handleSubmit}>
            <div className='Event_capacity question'>
  <div className='label'>
    <label htmlFor="eventcapacity">Capacity</label>
    {formik.touched.eventcapacity && formik.errors.eventcapacity && (
    <p className='error'>{formik.errors.eventcapacity}</p>
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
        value={formik.values.eventcapacity}
        onChange={formik.handleChange}
      />
      
  <p className='capacity_output'>Number of Seat: {formik.values.eventcapacity}</p>

      </div>
      <button type="submit">Add</button>
      </form>
      {/*comment 1*/}

      
            </>
        )
}

