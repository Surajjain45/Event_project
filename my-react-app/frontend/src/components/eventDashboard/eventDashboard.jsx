import {Link, Outlet} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState ,useEffect} from 'react';
import './eventdashboard.css'
import Sidenav from './sidebar'
import { FaBars, FaTimes,FaUser } from 'react-icons/fa';
import axios from 'axios';
import { IoMdOpen } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import Scanner from './Scanner';


// import './eventdashboard.css'


export default function Eventdashboard(){
  let { uniqueId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [eventDetails, setEventDetails] = useState(null);
  const [audienceList, setAudienceList] = useState([]);
  const [audience, setAudience] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch event details from the backend using uniqueId
    fetch(`http://localhost:3000/api/showevents/${uniqueId}`)
      .then((response) => response.json())
      .then((data) => setEventDetails(data))
      .catch((error) => console.error('Error fetching event details:', error));
  }, [uniqueId]);


  useEffect(() => {
    const fetchAudience = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/showaudience/${uniqueId}`);
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

 

  // useEffect(() => {
  //   // Fetch event details from the backend using uniqueId
  //   fetch(`http://localhost:3000/api/showaudience/${uniqueId}`)
  //     .then((response) => response.json())
  //     .then((data) => setAudienceList(data))
  //     .catch((error) => console.error('Error fetching Audience List:', error));

  //     // console.log("data : ", data);
  //     console.log("audience : ", audienceList);
  // }, [uniqueId]);



  if (!eventDetails) {
    return <p>Loading...</p>;
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  console.log("eventdetails",eventDetails)
  return (
    <>
      {/* <Sidenav heading = {eventDetails.eventName} isOpen={isOpen} toggleSidebar={toggleSidebar} closeSidebar={closeSidebar} /> */}
      <div className="w-[100vw] h-full">

      
      <nav className="bg-white border-gray-200 dark:bg-gray-900 mt-0 w-[100%]">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6 overflow-hidden">
    {/* <a
      href="https://flowbite.com/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    > */}
      {/* <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8"
        alt="Flowbite Logo"
      /> */}
      <div className='flex md:flex-row flex-col justify-start mx-6'>

      <span className="uppercase md:text-2xl text-lg font-bold whitespace-nowrap dark:text-white ml-0">
        {eventDetails.organizerName}, 
      </span>
      <span className=" md:text-2xl text-sm font-base whitespace-nowrap dark:text-white ml-0 ">
      &nbsp;Welcome to your Dashboard...
      </span>
      </div>
      {/* <span className="self-center text-2xl font-small whitespace-nowrap dark:text-white">to Dashboard</span> */}
    {/* </a> */}
    {/* <div className="flex md:order-2">
      <button
        type="button"
        data-collapse-toggle="navbar-search"
        aria-controls="navbar-search"
        aria-expanded="false"
        className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
      <div className="relative hidden md:block">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
      </div>
      <button
        data-collapse-toggle="navbar-search"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-search"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div> */}
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-search"
    >
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
      </div>
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center">
        <li>
          {/* <a
            href="#"
            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            aria-current="page"
          >
            Home
          </a> */}
        </li>
         <Link to="/forgotpassword">
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
            Change Password
          </a>
        </li>
            </Link>
        <li>
          {/* <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Logout
          </a> */}
          <Link to="/logout">

            <MdLogout className="text-white mx-2 md:dark:hover:text-blue-500"/>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div className='complete_dashboard mt-14'>

  <div className=' my-4 p-8 event_section w-11/12 m-auto p-4 border-2 border-slate-600/25 bg-white rounded-3xl'>
    <div className='w-full px-3 text-center pb-10'>

  <span className='text-[#302b63] text-xl md:text-3xl  font-semibold md:font-bold m-auto uppercase tracking-wide'>Event Details</span>


    </div>

  {/* <form className="w-full max-w-lg"> */}
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'> Event Name: </span>
      <span className='uppercase appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.eventName}</span>
      {/* <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-first-name"
      >
        First Name
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="grid-first-name"
        type="text"
        placeholder="Jane"
        value={eventDetails.organizerName}
        readonly
      /> */}
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div className="w-full md:w-1/2 px-3">
    <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'> Event Unique ID: </span>
      <span className='appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-fit'>{eventDetails.uniqueId}</span>

    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
    <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'> Event Category: </span>
      <span className='appearance-none block w-full text-xl font-medium bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.eventCategory}</span>

      {/* <p className="text-gray-600 text-xs italic">
        Make it as long and as crazy as you'd like
      </p> */}
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
    <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'> Event Description: </span>
      <span className='appearance-none block w-full text-xl font-medium bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.eventDescription}</span>

      {/* <p className="text-gray-600 text-xs italic">
        Make it as long and as crazy as you'd like
      </p> */}
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'> Event Date: </span>
      <span className='appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.eventDate}</span>

    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'> Event Time: </span>
      <span className='appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.organizerName}</span>

    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'> Event Location: </span>
      <span className='appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>Online</span>

    </div>
  </div>


  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'> Number of Seat: </span>
      <span className='appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.numberOfSeats}</span>

    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'> Ticket Price: </span>
      <span className='appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>&#8377; {eventDetails.Ticketprice}</span>

    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'> Ticket Refundable </span>
    {/* if(eventDetails.isRefundable){ */}
      <span className={` ${eventDetails.isRefundable ? 'hidden' : ''} appearance-none block w-full text-lg font-semibold bg-green-100 text-gray-700 text-black border border-green-500 border-4xl rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white `} >Yes</span>
    {/* } */}
      {/* else { */}
        <span className={` ${eventDetails.isRefundable ? '' : 'hidden'} appearance-none block w-full text-lg font-semibold bg-red-100 text-gray-700 border border-red-500 border-4xl rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white `}>No</span>
      {/* } */}
    </div>
  </div>
    <Link to="/eventdetail">
  <div className='w-18/20 m-0 mx-4 my-6  text-right flex justify-end items-center cursor-pointer'>

      <span className='font-xl  text-black font-semibold underline underlin'>Update Event Details </span>
      <IoMdOpen className='text-black mx-1'/>

  </div>
    </Link>
{/* </form> */}


  </div>


  <div className=' my-4 p-8 event_section w-11/12 m-auto p-4 border-2 border-slate-600/25 bg-white rounded-3xl'>
    <div className='w-full px-3 text-center pb-10'>

  <span className='w-full text-[#302b63] text-xl md:text-3xl my-4 p-12 font-semibold md:font-bold m-auto uppercase tracking-wide'>Organizer Details</span>
    </div>

  {/* <form className="w-full max-w-lg"> */}
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 md:mb-0">
      <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'> Organizer Name: </span>
      <span className='uppercase appearance-none block w-full text-lg font-semibold bg-gray-100 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.organizerName}</span>
      {/* <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-first-name"
      >
        First Name
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="grid-first-name"
        type="text"
        placeholder="Jane"
        value={eventDetails.organizerName}
        readonly
      /> */}
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    {/* <div className="w-full md:w-1/2 px-3">
    <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'> Event Category: </span>
      <span className='appearance-none block w-full text-lg font-semibold bg-gray-100 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-fit'>{eventDetails.eventCategory}</span>

    </div> */}
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'> Organizer Email: </span>
      <span className='appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>{eventDetails.organizerEmail}</span>

    </div>
    <div className="w-full md:w-1/2 px-3">
    <span className='block uppercase tracking-wide  font-medium text-gray-700  text-sm font-bold mb-2 ml-2'> Organizer Phone Number: </span>
      <span className='appearance-none block w-full text-lg font-semibold bg-gray-100 border border-gray-300 text-gray-700 text-black borde rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-fit'>{eventDetails.organizerPhone}</span>

    </div>
  </div>
{/* </form> */}


  </div>


<div className='audience Details my-10'>

<div className='w-full px-3 text-center pb-10'>

<span className='w-full text-[#302b63] text-xl md:text-3xl my-4 p-12 font-semibold md:font-bold m-auto uppercase tracking-wide'>Audience List</span>
  </div>


<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-11/12 m-auto text-sm md:text-lg text-left rtl:text-right text-gray-500 text-gray-0">
    <thead className="text-xs md:text-base uppercase bg-gray-900 text-gray-50  border border-gray-900 rounded-2xl">
      <tr >
        <th scope="col" className="px-6 py-3">
          Audience Name
        </th>
        <th scope="col" className="px-6 py-3 max-w-16">
          Email ID
        </th>
        <th scope="col" className="px-6 py-3">
          Phone Number
        </th>
        <th scope="col" className="px-6 py-3">
          {/* <span className="sr-only">df</span> */}
          Checked-In
        </th>
      </tr>
    </thead>

      {audience.length > 0 ? (
        <tbody>
          {audience.map(member => (
            <tr className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 hover:bg-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap uppercase "
            >
              {member.name}
            </th>
            <td className="px-6 py-4"><a href={`mailto:${member.email}`} className='font-semibold text-gray-900'>{member.email}</a></td>
            <td className="px-6 py-4">{member.phone}</td>
            <td className="px-6 py-4">
              <a
                href=""
                className={` ${member.checkin ? 'bg-green-200' : 'hidden'} hover:text-green-600 text-green-600 text-sm font-semibold px-4 py-1 border border-green-600 rounded-2xl`}
              >
                True
              </a>
              <a
                href=""
                className={` ${member.checkin ? 'hidden' : 'bg-red-200'} hover:text-red-600 text-sm font-semibold text-red-600 px-4 py-1 border border-red-600 rounded-2xl`}
              >
                False
              </a>
            </td>
          </tr>
          ))}
         </tbody>
      ) : (
        <p className=' text-center m-6 row-span-4'>No audience members found.</p>
      )}
    
  
   
  </table>

</div>

</div>
</div>
{/* <div className='absolute'> */}

  <div className='w-11/12 text-right  items-end flex justify-end m-auto fixed bottom-4 md:left-6 left-0'>
    <Link key={uniqueId} to={`/scannerpage/${uniqueId}`}><Scanner/></Link>
  </div>
</div>
      {/* </div> */}
    </>
  )
}

// Exporting eventDetails
