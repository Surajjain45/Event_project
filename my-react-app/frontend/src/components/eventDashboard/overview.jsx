// Section.js

import Seatspie from "./pie_chart";
import './overview.css'


function Overview() {
 

  return (
    <div >
      <h2 >Overview Title</h2>
      <p>This is the content of the Overview.</p>

      <div className="box-row">
      <div className="box">< Seatspie classname='pie_box'/></div>
      <div className="box">< Seatspie classname='pie_box'/></div>
      <div className="box">< Seatspie classname='pie_box'/></div>
      <div className="box">< Seatspie classname='pie_box'/></div>
      </div>
    </div>
  );
}

export default Overview;

