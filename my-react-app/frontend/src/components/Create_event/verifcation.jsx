import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import querystring from "query-string"
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Verification() {
    const Navigate = useNavigate()
    const [isverified, setIsverified] = useState(false);
    const location = useLocation();
    const queryParams = querystring.parse(location.search);
    const token = queryParams.token;
    const uniqueId = queryParams.uniqueId;
    console.log("It is the token", token);

    useEffect(() => {
        const verifyToken = async () => {
            try {
                if (token) {
                    let response = await fetch(`http://localhost:3000/verify?token=${token}&uniqueId=${uniqueId}`);
                    setIsverified(true);
                    // console.log(response.data.issaved)
                    console.log(response)
                    if(response.status===201){
                        Swal.fire({
                            icon: "success",
                            title: "Email Verified and Data Saved successfully", 
                            html:'Please change the password for your event <br> Your current password is same as your email id'                   
                          });
                    }
                    console.log("verified");
                }
            } catch (error) {
                console.log("Failed to verify the token", error);
            }
        };

        verifyToken(); // Call verifyToken only once when the component mounts
    }, [token]);

       
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmpassword: '',
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters long')
                .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
                .matches(/[0-9]/, 'Password must contain at least one digit')
                .test('password', 'Password must contain at least one letter and one digit', value => {
                    return /[a-zA-Z]/.test(value) && /[0-9]/.test(value);
                })
                .required('Password is required'),

            confirmpassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
        }),
        onSubmit: async (values) => {
            const { password, confirmpassword } = formik.values;
            console.log("passwords", password, confirmpassword);
            if (password !== confirmpassword) {
                console.log("Passwords do not match");
                return;
            }
            try {
                const response = await axios.post('http://localhost:3000/password', { password, uniqueId });
                console.log("Data sent");

                if(response.data.message==='success'){
                   
                        Swal.fire({
                            icon: "success",
                            title: "Password changed successfully",                    
                          }).then((response)=>{
                            if(response.isConfirmed){
                                console.log("hereeeeeeeeee")
                                Navigate(`/dashboard/${uniqueId}`)
                            }
                          })
                    
                }

                else if(response.data.message==='Failed'){

                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        html: 'Failed to change the password',
                        
                      });
                }

            } catch (error) {
                console.error("Failed to send data", error);
                
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
        <div className="login_page">
         <div className="form_login">
        
        <div className="form-container_login">
            <form onSubmit={formik.handleSubmit}>
            <div className="stp step-1  ">
        <div className='stp-content_login'>
      <div className="header">
        <h1 className="title">Update your password</h1>
        {/* <p className="exp">Please enter the <a href="#"  >Unique Event ID</a> for your Event and the registered email
        </p> */}
      </div>
      <div className='form-section_login'>

        <div className="email_login">
                <div className="label">
                    <label htmlFor="password">Enter your password:</label>
                    {formik.touched.password && formik.errors.password && (
                        <p className="error">{formik.errors.password}</p>
                    )}
                </div>
                <input className='input'
                    required=""
                    type="password"
                    name="password"
                    id="password"
                    placeholder="e.g. Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                </div>

         <div className="email_login">
                <div className="label">
                    <label htmlFor="confirmpassword">Confirm Password:</label>
                    {formik.touched.confirmpassword && formik.errors.confirmpassword && (
                        <p className="error">{formik.errors.confirmpassword}</p>
                    )}
                </div>
                <input className='input'
                    required=""
                    type="password"
                    name="confirmpassword"
                    id="confirmpassword"
                    placeholder="e.g. Confirm Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmpassword}
                />
                </div>
                {/* <Link to="/forgotpassword"><p className='forgotpassword'>Forgot Password?</p></Link> */}
                <button className="submit_btn login-stp forgot-stp"type="submit">Update</button>
                </div>
                </div>
                </div>
            </form>
            </div>
            </div>
            </div>
        </>
    )
}
