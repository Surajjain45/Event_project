import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export default function EventDashboard(){


    const [audienceData, setAudienceData] = useState([]);

    const [eventData , setEventData] = useState([]);

    const location = useLocation();
    const { state } = location;
  
    // Check if state exists to avoid potential errors
    const eventId = state?.eventId || '';
    const password = state?.password || '';

    console.log('Event Dashboard', eventId);
    console.log('Password: ', password);

    // useEffect(() => {
    //   const fetchEventData = async () =>{


    //         try {
    //                 const response = await axios.get(`http://localhost:3000/api/eventdata/${eventId}`); 
    //                 setEventData(response.data);

    //                 console.log(eventData);
    //         }

    //         catch (error) {
    //           console.log("Error in fetching Event Data");
    //         }
    //   } 

    //   fetchEventData();
    //    } , [eventId])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/showaudience/${eventId}`);
        setAudienceData(response.data);
      } catch (error) {
        console.error('Error fetching audience data:', error);
      }

        console.log(audienceData);
      // try{
      //   const response = await axios.get('http://localhost:3000/api/')
      // }
    };

    fetchData();
  }, [eventId]);



    return (
        <>
        <div><button>udshsdysdkksddslkdlkusdv</button></div>

        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Check-In</th>
          </tr>
        </thead>
        <tbody>
          {audienceData.map(audience => (
            <tr key={audience._id}>
              <td>{audience.name}</td>
              <td>{audience.email}</td>
              <td>{audience.phone}</td>
              <td>
                <button
                  style={{
                    backgroundColor: audience.Checkin ? 'green' : 'red',
                    color: 'white',
                    padding: '5px 10px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  // onClick={() => handleCheckIn(audience._id)}
                >
                  {audience.Checkin ? 'Checked In' : 'Check-In'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


        
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vitae ducimus inventore laudantium expedita ut corrupti! Commodi recusandae, distinctio, tempore sint qui vel, nostrum vitae illo culpa soluta voluptatum dolor.</p>
        </>
    )
}