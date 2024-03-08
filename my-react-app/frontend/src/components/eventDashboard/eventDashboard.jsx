import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { navlinks } from './navlinkes';


export default function EventDashboard(){
    const [audienceData, setAudienceData] = useState([]);
    const { uniqueId } = useParams();
    console.log(uniqueId)

  // useEffect(() => {



  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:3000/api/showaudience/${uniqueId}`);
  //       console.log(uniqueId)
  //       setAudienceData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching audience data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [uniqueId]);

 
const add_ticket_link = `/dashboard/${uniqueId}/addtickets`


    return (
        <>
       <h2>Hi! Name sraj</h2>

       <nav>
        {
          navlinks.map((item)=>(
            <Link to = {item.to} key={uniqueId}><button>{item.title}</button></Link>
          ))
        }
       </nav>
       <h4>It is tough</h4>
       <Link to = {add_ticket_link}><button>Add tickets</button></Link>
        </>
    )
}