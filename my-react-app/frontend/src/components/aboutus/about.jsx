import react from 'react'
import './about.css'
// import suraj_img from '/suraj_img.png'
import Karan_img from '/karan.png'
// import suraj_img from '/suraj_img.png'
import suraj_img from '/PROFESSIONAL PIC.jpg'

import icon3 from '../../assets/git.png'
import icon1 from '../../assets/portfolio.png'

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
                            
                            <a href='https://iamkaranverma.netlify.app/'>  <img className='a_icon' src={icon1} alt="" width='40px' height='40px'/></a>
                            <a href='https://surajjainportfolio.netlify.app/'>  <img className='a_icon' src={icon2} alt="" width='40px' height='40px'/></a>
                            <a href='https://surajjainportfolio.netlify.app/'>  <img className='a_icon' src={icon3} alt="" width='40px' height='40px'/></a>
    
    
                      </div>
                        <div className="break"></div>
                        <div className="role">Frontend and Backend developer</div>
                        <div className="more1">Lorem ipsum dolor sit amet.</div>
                        <div className="more2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, deleniti?</div>
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
                            
                        <a href='https://surajjainportfolio.netlify.app/'>  <img className='a_icon' src={icon1} alt="" width='40px' height='40px'/></a>
                        <a href='https://surajjainportfolio.netlify.app/'>  <img className='a_icon' src={icon2} alt="" width='40px' height='40px'/></a>
                        <a href='https://surajjainportfolio.netlify.app/'>  <img className='a_icon' src={icon3} alt="" width='40px' height='40px'/></a>


                  </div>
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