import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './success.css';
import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';
import JSZip from 'jszip';
import ReactDOM from 'react-dom'; 


const params = new URLSearchParams(location.search);
const eventId = params.get('eventId');
const audienceDataString = params.get('audienceData');


const Success = () => {
  const location = useLocation();
  const audienceData = JSON.parse(decodeURIComponent(audienceDataString));

  useEffect(() => {
    // Parse audienceData from the query parameters

    if (audienceDataString) {
      const audienceData = JSON.parse(decodeURIComponent(audienceDataString));

      // Now you have the audienceData array, you can use it as needed
      console.log('Audience Data:', audienceData);
      console.log('Event ID:', eventId);

      // Call the async function to save data
      saveData(audienceData, eventId);
    }
  }, [location.search]);

  const saveData = async (users, eventId) => {
    try {

      const zip = new JSZip();

      for (const user of users) {
        try {
          console.log({user , eventId});
          // Send a POST request to register the audience for the event
          // http://localhost:3000/api/events/create
          const response = await fetch(`http://localhost:3000/api/audience/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user, eventId }), // Fixed the body structure
          });

          if (response.ok) {
            console.log('Audience registered successfully');

            generateAndDownloadQRCode(user);

          } else {
            if(response.status === 400){
              console.log("Look like you are trying to save the same data to the database again....If this is a mistake contact us ASAP!!!")
            }
            console.error('Failed to register audience!! Dont worry you will get your refund if this issue is not resolved soon...');
          }
        } catch (error) {
          console.error('Error registering audience:', error);
        }
      }


      // for loop end here


    } catch (error) {
      console.error('Error processing form submission:', error);
    }
  };


  const generateAndDownloadQRCode = async () => {
 const users = audienceData;

    try {
      const zip = new JSZip();
  
      for (const user of users) {
        const qrCodeData = JSON.stringify({ user, eventId });
        // const dataUrl = await QRCode.toDataURL(qrCodeData);

         // Create a temporary div to render the QR code component
      const tempDiv = document.createElement('div');
      document.body.appendChild(tempDiv);

      // Render QR code component into the temporary div
      ReactDOM.render(<QRCode value={qrCodeData} />, tempDiv);

      // Use html2canvas to capture the QR code as an image
      const canvas = await html2canvas(tempDiv);


       // Convert the canvas to a Blob
       canvas.toBlob(async (blob) => {
        // Add Blob to zip file
        zip.file(`ticket_${user.name.replace(/\s+/g, '_')}.png`, blob);

        // Remove the temporary div
        document.body.removeChild(tempDiv);

        // If this is the last user, generate and download the zip file
        if (users.indexOf(user) === users.length - 1) {
          zip.generateAsync({ type: 'blob' }).then((zipBlob) => {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(zipBlob);
            a.download = 'TICKET.zip';
            a.click();
          });
        }
      });
    }
    
    } catch (error) {
      console.error('Error generating or downloading QR codes:', error);
    }
  };


  return (
    <>
    <div className="section">
       
    </div>
    {/* <div className="nav">
            <h2 className="nav_heading">Event Heading</h2>

            <button className='btns event_btn'>Your Event</button>

        </div> */}

        <div className="hero_text">
          <div className="hello">👋 THANK YOU FOR BUYING THE TICKET FROM US</div>
          <h1 className="text_heading">Looking forward to meet you at the event</h1>
          <p>Keep checking mail for any futher notice or update. We have send your ticket to your mail and you can also download them from below button.</p>
        </div>

        <div className="Hero_buttons">
          <button className='btns' onClick={() => generateAndDownloadQRCode()}>Download Ticket</button>
          {/* <button className='btns'>See Your Event</button> */}
        </div>
    </>
  );
};

export default Success;






// import React, { useEffect } from 'react'
// import { useLocation } from 'react-router-dom';

// export default function Success (){

//   const location = useLocation();
  
//   useEffect(() => {
//     // Parse audienceData from the query parameters
//     const params = new URLSearchParams(location.search);
//     const eventId = params.get('eventId');
//     const audienceDataString = params.get('audienceData');
    
//     if (audienceDataString) {
//       const audienceData = JSON.parse(decodeURIComponent(audienceDataString));
      
//       // Now you have the audienceData array, you can use it as needed
//       console.log('Audience Data:', audienceData);
//       console.log('Event ID:', eventId);
//     }
//   }, [location.search]);


//   async () => {

//   // try {
//     const users = audienceData;

//     console.log(users);
    
//     for (const user of users) {   
//       try {
//         console.log(user);
//         // Send a POST request to register the audience for the event
//         // http://localhost:3000/api/events/create
//         const response = await fetch(`http://localhost:3000/api/audience/register`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(...user , eventId),
//         });

//         if (response.ok) {
//           console.log('Audience registered successfully');

//         } else {
//           console.error('Failed to register audience!! Dont worry you will get your refund if this issue is not resolved soon...');
//         }
//       } catch (error) {
//         console.error('Error registering audience:', error);
//       }

// }
//   // resetForm();
// // } catch (error) {
// //   console.error('Error processing form submission:', error);
// // }

// }

  
//   return (
//     <div>
//       Success 
//       <audienceData/>
//     </div>
//   )
// };

