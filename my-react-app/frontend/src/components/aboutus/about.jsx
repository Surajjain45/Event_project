import react from 'react'
import './about.css'
import suraj_img from '/suraj_img.png'
import Karan_img from '/karan.png'
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
                         <img src={Karan_img} alt=''/>
                         <img src={suraj_img} alt='' width="400px"/>
                     </div>

                     <div className="details">
                        <div className="name">KARAN VERMA</div>
                        <div className="role">Frontend and Backend developer</div>
                        <div className="more">As a pre-final year B.Tech student in Computer Science Engineering, I have a strong foundation in programming languages such as C/C++, SQL and JavaScript, as well as Web development languages including HTML, CSS, and JavaScript and Frameworks like ReactJS, MongoDB, Express JS, Node JS , TailwindCSS, Material UI and Figma. I have applied these skills in several projects, demonstrating my ability to effectively use these technologies to solve real-world problems. 
In addition to my technical skills, I have a solid understanding of data structures and algorithms, which i have proved at multiple occasion through coding competition such as TCS CodeVita ,HackwithINFY and Codechef contest and i have solved over 300+ DSA Question on various platform like Leetcode, CodeChef, GFG, which has allowed me to approach problems with a structured and efficient mindset. I am passionate about using my knowledge and skills to create innovative solutions in the field of technology.</div>
                     </div>
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