import react from 'react'
import './about.css'
import suraj_img from '/suraj_img.png'

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
                         <img src={suraj_img} alt=''/>
                     </div>

                     <div className="details">
                        <div className="name">KARAN VERMA</div>
                        <div className="role">Frontend and Backend developer</div>
                        <div className="more">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non voluptatum mollitia delectus cum officia reiciendis? Ipsam minus similique blanditiis enim sapiente necessitatibus in laboriosam harum aspernatur ipsum quam, est ducimus ea nostrum nihil voluptates?</div>
                     </div>
                  </div>

                  <div className="member second">
                     <div className="image">
                         <img src={suraj_img} alt=''/>
                     </div>

                     <div className="details">
                        <div className="name">SURAJ JAIN</div>
                        <div className="role">Frontend and Backend developer</div>
                        <div className="more">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non voluptatum mollitia delectus cum officia reiciendis? Ipsam minus similique blanditiis enim sapiente necessitatibus in laboriosam harum aspernatur ipsum quam, est ducimus ea nostrum nihil voluptates?</div>
                     </div>
                  </div>
            </div>
        </div>
        </>
    )
}