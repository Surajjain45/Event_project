import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Assuming you're using React Router
import './Sidebar.css'
import { useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'



const Sidenav = ({heading, isOpen, toggleSidebar, closeSidebar }) => {

 
            const location = useLocation();
            const { uniqueId } = useParams();
            const navigate = useNavigate()
            console.log(location.pathname)
           let split_string = location.pathname.split("/")
           console.log(split_string)
          
          // # Access the last element of the split_string, which contains "event_details"
          let text = split_string[3]
          console.log(text)

          const Logout = ()=>{

            Swal.fire({
              title: "Are you sure?",
              // text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes,Log out"
            }).then((result) => {
              if (result.isConfirmed) {
                console.log("LOgging out")
                navigate('/',{replace:true})
              }
            });
           
            
          }
  


  return (
    <>
      
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    {/* <button onClick={toggleSidebar} className="toggle-btn"> */}
      {/* </button> */}
      <div className="sidebar-content">
        <div className="sidenav_heading">
          <h2 className="event_nme">Nature</h2>
          <FaBars  className='toggle-btn' onClick={toggleSidebar}/>
        </div>
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
            <Link to={`/dashboard/${uniqueId}/change_password`} onClick={closeSidebar}>
          <li className={text==='change_password'?'active_link':''}>
              Changepassword
          </li>
            </Link>

           
          <li onClick={Logout} className= {text===''?'active_link logout':'logout' }>
              Logout
          </li>
            


        </ul>
      </div>
    </div>
    </>
  );
};

export default Sidenav;


           