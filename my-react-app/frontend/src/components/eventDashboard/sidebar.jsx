import React from 'react';
import './Sidebar.css'; // Import your CSS file

const Sidebar = ({ isOpen, onClose, onItemClick ,uniqueId}) => {

    Eventinfo = 
    audidienceinfo =
    scanner =
    

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h2>Dashboard</h2>
      <ul>
       <Link to=''><li><a href="#" onClick={() => {onItemClick('home'); onClose()}}>Home</a></li></Link> 
       <Link to=''></Link> <li><a href="#" onClick={() => {onItemClick('analytics'); onClose()}}>Analytics</a></li>
       <Link to=''></Link> <li><a href="#" onClick={() => {onItemClick('reports'); onClose()}}>Reports</a></li>
       <Link to=''></Link> <li><a href="#" onClick={() => {onItemClick('settings'); onClose()}}>Settings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
