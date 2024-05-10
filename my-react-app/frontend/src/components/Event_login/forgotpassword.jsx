import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import './forgotpassword.css'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
export default function Forgotpassword(){
 const navigate = useNavigate()
    const handleAboutUniqueIDClick = (e) => {
        e.preventDefault();
        alert('Event ID is : "Your Email id (without "@gmail.com") + "_" + Your event name with no space."');
      };

    const formik = useFormik({
        initialValues:{
            email:'',
            uniqueId:''
        },

        validationSchema: Yup.object({
          email: Yup.string().required().email(),
          uniqueId: Yup.string().required()
        }),

        onSubmit: async (values)=>{
            const data = {
                email: values.email,
                uniqueId: values.uniqueId
            };
            console.log(data)
           try {
            const response = await axios.post('http://localhost:3000/forgotpassword', data);
            
            if(response.data.message==='success'){
                Swal.fire({
                    icon: 'success',
                    title: 'Email Sent!',
                    // customClass: 'custom-swal-text-size',
                   html:`An email has been sent to '${data.email}' Please click on the link to change your password`
                  }).then((result) =>{
                    // Check if the user clicked "Ok"
                    if (result.isConfirmed) {
                      // Navigate to the desired location
                      navigate('/',{replace:true});
                    }})
            }

            else if(response.data.message==='failed'){
console.log("failed")
Swal.fire({
    icon: "error",
    title: "Oops...",
    html:'Something went wrong! <br> Please try again'
    
  });
            }

            else if(response.data.message==='wrong uniqueId'){
                Swal.fire({
                    icon: "error",
                    title: "UniqueId does not exist",                    
                  });
            }

            else if(response.data.message==='Does not Match'){
                Swal.fire({
                    icon: "error",
                    title: "UniqueId and email does not match",                    
                  });
            }
           } catch (error) {
            console.log('Error changing password catch', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                html: '<div class="swal-fail">Something went wrong!<br>Please try again after some time</div>',
                
              });
           }
        }
    });
    return (
        <>
        <div className="form">
        
        <div className="form-container">
        
            <form onSubmit={formik.handleSubmit}>

            <div className="stp step-1  ">
        <div className='stp-content'>
      <div className="header">
        <h1 className="title">Update your password</h1>
        <p className="exp">Please enter the <a href="#" onClick={handleAboutUniqueIDClick} >Unique Event ID</a> for your Event and the registered email
        </p>
      </div>
      <div className='form-section'>

                <div className="email">
                    <div className="label">
                        <label htmlFor="email">Enter your email:</label>
                        {formik.touched.email && formik.errors.email && (
                            <p className="error">{formik.errors.email}</p>
                        )} 
                    </div>
                    <input className="input"
                        required=""
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>

                <div className="unique_id">
                    <div className="label">
                        <label htmlFor="uniqueId">Enter your unique_id:</label>
                        {formik.touched.uniqueId && formik.errors.uniqueId && (
                            <p className="error">{formik.errors.uniqueId}</p>
                        )} 
                    </div>
                    <input className="input"
                        required=""
                        type="text"
                        id="uniqueId"
                        name="uniqueId"
                        placeholder="Enter your uniqueId"
                        value={formik.values.uniqueId}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>

                <button className="submit_btn"type="submit">Send email</button>
                </div>
                </div>
                </div>
            </form>
            </div>
       



      
      
     
                


     
      </div>
        </>
    );
}
