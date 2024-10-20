import React, {useEffect , useState} from 'react'
import {Html5QrcodeScanner} from "html5-qrcode"
// import Success from '../successPage/Success';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



const ScannerPage = () => {
  const { uniqueId } = useParams();
    const [audience, setAudience] = useState([]);
    const [scanResult , setScanResult] = useState('');
    const [ticketdetail , setTicketDetail] = useState({});


    useEffect(() => {
        const fetchAudience = async () => {
          try {
            const response = await fetch(`https://event-project-2-e1g8.onrender.com//api/showaudience/${uniqueId}`);
            if (!response.ok) {
              throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            setAudience(data);
          } catch (err) {
            setError(err.message);
          }
        };
    
        fetchAudience();
      }, [uniqueId]);
    

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox:{
                width: 250,
                height: 250,
            },
            fps: 5,
        });

        scanner.render(success, error);

        async function success(result){
            console.log("result : ", result);
            scanner.clear;
            setScanResult(result);

            const url = result;
            setScanResult(result);

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({}), // Fixed the body structure

              });
            
              if(response.ok){
                    console.log("working tickett details");
                    // setTicketDetail(response.data);

                    // Sample to data to display on page: should be removed when deployed.!!!!!!!!!!!!!!!!!!!!!11!1!!!!!!11

                   setTicketDetail({
                      _id: "665c72e8851344f1598e5529",
                      name: "audience1",
                      email: "lekaliw199@acuxi.com",
                      phone: 1234567890,
                      checkin: false,
                      audienceId: "surajjain8834_Natureid1neueac",
                      __v: 0
                      })

                      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!1111


                    console.log(ticketdetail);
              }

        }

        function error(err){
            console.warn("error: ", err);
        }
    }, []);



  return (
    <>
    <div className='w-full m-auto align-center'>
        <h1>WORKINGNGGGG</h1>
        { scanResult ?
        <>
        <p>url: {scanResult}</p>
        <p>Result is : {ticketdetail[0].name}</p> 
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
  <div className="max-w-screen-md">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
      NAME GOES HERE
    </h2>
    <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
      Email goes here....
    </p>
    <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
      Phone goes here....
    </p>
    <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
      Checked in or not goes here....
    </p>
    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
      <a
        href="#"
        className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
      >
        CheckIn
      </a>
    
    </div>
  </div>
</div>

        </> 
        :
        <div id='reader' className='w-[60vw]'></div>
      }
    </div>
      </>
)
}

export default ScannerPage
