import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Assuming you're using React Router
import './Sidebar.css'
import { useLocation } from 'react-router-dom';

const Sidenav = ({ isOpen, toggleSidebar, closeSidebar }) => {

 
            const location = useLocation();
            const { uniqueId } = useParams();
            console.log(location.pathname)
           let split_string = location.pathname.split("/")
           console.log(split_string)
          
          // # Access the last element of the split_string, which contains "event_details"
          let text = split_string[3]
          console.log(text)

  


  return (
    <>
      
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    <button onClick={toggleSidebar} className="toggle-btn">
        {isOpen ? 'Close' : 'Open'} Sidebar
      </button>
      <div className="sidebar-content">
        <ul>
        <Link to={`/dashboard/${uniqueId}`} onClick={closeSidebar}
            >
          <li className={text===undefined?'active_link':''}>
            
              Overview
          </li>
            </Link>
            <Link to={`/dashboard/${uniqueId}/event_details`} onClick={closeSidebar}>
          <li className={text==='event_details'?'active_link':''}>
              Event Details
          </li>
            </Link>
            <Link to={`/dashboard/${uniqueId}/audience`} onClick={closeSidebar}>
          <li className={text==='audience'?'active_link':''}>
              Audience
          </li>
            </Link>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Sidenav;


           