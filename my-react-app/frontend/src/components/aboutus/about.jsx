import react from 'react'
import './about.css'
// import suraj_img from '/suraj_img.png'
import suraj_img from '/PROFESSIONAL PIC.jpg'

export default function Aboutus(){
    return(
        <>
        <div className="about_section">
            <div className="heading">
             <h2>Our <span>Team</span></h2>
            </div>

            <div className="members_section">
                  <div className="member">
                     <div className="image">
                         <img src={suraj_img} alt='' width="400px"/>
                     </div>

                     <div className="details">
                        <div className="name">KARAN VERMA</div>
                        <div className="break"></div>
                        <div className="role">UI UX DESIGNER | BACKEND DEVELOPER
</div>
                        <div className="more1">Lorem ipsum dolor sit amet.</div>
                        <div className="more2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, deleniti?</div>                     </div>
                  </div>

                  <div className="middle_line"></div>

                  <div className="member second">
                     <div className="image">
                         <img src={suraj_img} alt='' width="400px" height="48px"/>
                     </div>

                     <div className="details">
                        <div className="name">SURAJ JAIN</div>
                        <div className="break"></div>
                        <div className="role">Frontend and Backend developer</div>
                        <div className="more1">Lorem ipsum dolor sit amet.</div>
                        <div className="more2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, deleniti?</div>
                     </div>
                  </div>
            </div>
        </div>
        </>
    )
}