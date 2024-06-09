import react from 'react'
import './about.css'
// import suraj_img from '/suraj_img.png'
import Karan_img from '/karan.png'
// import suraj_img from '/suraj_img.png'
import suraj_img from '/PROFESSIONAL PIC.jpg'

import icon3 from '../../assets/git.png'
import icon1 from '../../assets/portfolio.png'
import { FaBeer } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";

import icon2 from '../../assets/linkedin.png'

export default function Aboutus(){
    return(
        <>
        <div className="about_section">
            <div className="heading">
             <h2>Our <span>Team</span></h2>
            </div>

            <div className="members_section">
            <div className="member ">
                     <div className="image">
                         <img src={Karan_img} alt='' width="400px" height="48px"/>
                     </div>

                     <div className="details">
                        <div className="name">KARAN VERMA</div>
                        <div className="about_icons">
                            
                            <a href='https://iamkaranverma.netlify.app/'>  <FaBriefcase className='a_icon' width='40px' height='40px'/></a>
                            <a href='https://www.linkedin.com/in/imkaranverma/'>  <FaLinkedin className='a_icon'  width='40px' height='40px'/></a>
                            <a href='https://github.com/imkaranverma'>  <FaGithub className='a_icon' width='40px' height='40px'/></a>
    
    
                      </div>
                        <div className="break"></div>
                        <div className="role">Frontend and Backend developer</div>
                        <div className="more1">Final Year Btech Student in CSE.</div>
                        <div className="more2">Skilled in full-stack development and web design using ReactJS, Node JS, MongoDB, ExpressJS, (MERN), Figma and TailwindCSS.</div>
                     </div>
                  </div>

                  <div className="middle_line"></div>

                  <div className="member second">
                     <div className="image">
                         <img src={suraj_img} alt='' width="400px" height="48px"/>
                     </div>

                     <div className="details">
                        <div className="name">SURAJ JAIN</div>
                        <div className="about_icons">
                            
                        <a href='https://surajjainportfolio.netlify.app/'>  <FaBriefcase className='a_icon' width='40px' height='40px'/></a>
                            <a href='https://www.linkedin.com/in/surajjain45/'>  <FaLinkedin className='a_icon'  width='40px' height='40px'/></a>
                            <a href='https://github.com/Surajjain45'>  <FaGithub className='a_icon' width='40px' height='40px'/></a>

                  </div>
                        <div className="break"></div>
                        <div className="role">Frontend and Backend developer</div>
                        <div className="more1">Final Year Btech Student in CS.</div>
                        <div className="more2">Skilled in full-stack development using (MERN) and Problem solving.</div>
                     </div>
                  </div>
            </div>
        </div>
        </>
    )
}