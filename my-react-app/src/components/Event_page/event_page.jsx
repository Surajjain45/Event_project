import './event_page.css'
// import image1 from './Event_assest/Frame 5.png'


import icon3 from './Event_assest/link.png'
import icon1 from './Event_assest/whatsapp.png'

import icon2 from './Event_assest/instagram.png'


export default function Event_page(){

    const image_section_c = {
      // backgroundImage: `url(${image1})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '400px',
    }
    return(
        <>
        <div className="image_section_css">
        <div className="image_section_event" style={image_section_c}>

        </div>

           <div className="image_text">
            <div className="category">Music concert</div>
            <div className="title">Aaina 2.0</div>
           <div className='timeline'>
             <span className="duration">2hr</span>
            <span className="date border">23,oct 2023</span>
            <span className="time border">11:00</span>
            </div>

            <div className="location">Location / online</div>
           </div>

        </div>

        <div className="white_box_background">
          <div className="white_box">

            <div className="about_event">
              <div className="left">
               <div className="heading">Aaina 2.0</div>
               <div className="about_des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt recusandae earum voluptatem soluta id libero minima delectus temporibus reiciendis itaque nihil repudiandae modi culpa, minus accusantium ipsa dolore. Vel quia tempore aliquam dolorum? Provident, rerum. Mollitia itaque neque perferendis recusandae quam possimus, sed, culpa, harum expedita ipsam iure illum eaque?
                div.

                <div className="price_des">Price:<span className='price'>Amount (</span><span className='count'>10</span> seats left)</div>

                <div className="heading_des"> <h4>Date and Time:</h4></div>
                <p className="answer_heading_des">
                  <span className="time">23 october 2023</span>

                  <span className="border time">  3:00pm</span>
                </p>


                <div className="heading_des"> <h4>Location:</h4></div>
                <p className="answer_heading_des">KIET GROUP<span><a href="#">(See location)</a></span></p>


                <div className="heading_des"> <h4>Refundable:</h4></div>
                <p className="answer_heading_des">Tickets are non-refundable</p>


                </div>

               </div>

               <div className="right">

                <div className='share_icon'><img src={icon3} alt="" width='50px' height='50px' /></div>
                <div className="timer">
                    <div className="heading_des register">Registration ends in: </div>
                    <span className="timer_box">
                     34
                    </span>
                    <span className="colon">:</span>

                    <span className="timer_box">
                       12
                    </span>
                    <span className="colon">:</span>

                    <span className="timer_box">
              10
                    </span>
                </div>
               </div>

            </div>
               <button className='book_ticket btns'>Book Ticket</button>

            <div className="about_organiser">

                  <div className="about_organiser_heading">
                    About organiser
                  </div>

                  <div className="about_organiser_name">
                    Karan Verma
                  </div>

                  <div className="about_organiser_des">
                    Feel free to contact for any query
                  </div>

                  <div className="profile_icons">
                    <img className='icon' src={icon1} alt="" width='40px' height='40px'/>
                    <img className='icon' src={icon2} alt="" width='40px' height='40px'/>
                    <img className='icon' src={icon3} alt="" width='40px' height='40px'/>

                  </div>
            </div>

          </div>
        </div>
         </>
    )
}