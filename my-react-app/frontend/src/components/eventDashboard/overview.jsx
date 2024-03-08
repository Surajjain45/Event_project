import React, { useState } from 'react';
import Sidebar from './sidebar';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (item) => {
    console.log("Selected item:", item);
    // Add logic here to open the selected tab
  };

  return (
    <div>
      <button onClick={handleSidebarToggle}>Three dots</button>
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} onItemClick={handleItemClick} />
      <div className="content">
        {/* Your dashboard content goes here */}
        <h1>Welcome to the Dashboard!</h1>
      </div>
    </div>
  );
};

export default Dashboard;
