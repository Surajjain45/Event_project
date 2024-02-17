import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function EventDashboard(){
    const [audienceData, setAudienceData] = useState([]);
    const { uniqueId } = useParams();

  useEffect(() => {



    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/showaudience/${uniqueId}`);
        setAudienceData(response.data);
      } catch (error) {
        console.error('Error fetching audience data:', error);
      }
    };

    fetchData();
  }, [uniqueId]);



    return (
        <>
        <div><button>udshsdysdkksddslkdlkusdv</button></div>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vitae ducimus inventore laudantium expedita ut corrupti! Commodi recusandae, distinctio, tempore sint qui vel, nostrum vitae illo culpa soluta voluptatum dolor.</p>
        </>
    )
}