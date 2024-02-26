import './Hero.css'
import {nav_items} from './Hero_assest/Nav'
export default function Hero(){
    return(
      <>
      <div className="section">
         
      </div>
      <div className="nav">
              <h2 className="nav_heading">Event Heading</h2>
              <div className="nav-links">
                  <ul>
                      {nav_items.map((item)=>(
                   <li key={item.index}>{item.title}</li>   
                      ))  }   
                  </ul>
              </div>

              <button className='btns event_btn'>Explore</button>

          </div>

          <div className="hero_text">
            <div className="hello">👋 Welcome to Event Planner</div>
            <h1 className="text_heading">One stop place for event organisers</h1>
            <p>Create,Manage and organise your events in easiest way</p>
          </div>

          <div className="Hero_buttons">
            <button className='btns'>Create Event</button>
            <button className='btns'>Login into Event</button>
          </div>
      </>
    )
}