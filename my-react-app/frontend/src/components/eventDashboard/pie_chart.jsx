import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from "chart.js/auto"

function Seatspie(){

    const seatsSold = 5;
    const totalSeats = 100;
     const percentSold = ((seatsSold / totalSeats) * 100).toFixed(2);
   
     // Data for the pie chart
     const data = {
       labels: ['Seats Sold', 'Empty Seats'],
       datasets: [
         {
           data: [percentSold, 100 - percentSold],
           backgroundColor: ['#36a2eb', '#ffcd56'],
         },
       ],
     };
   
     // Options for the pie chart
     const options = {
       title: {
         display: true,
         text: 'Seats Sold vs Empty Seats',
       },
     };

     return(
      <Pie data={data} options={options} />
     )
}

export default Seatspie