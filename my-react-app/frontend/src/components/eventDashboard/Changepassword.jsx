import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import querystring from "query-string"
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Changepassword() {
    const Navigate = useNavigate()
    // const location = useLocation();
    // const queryParams = querystring.parse(location.search);
    // const token = queryParams.token;
    const uniqueId = useParams();
    console.log("UniqueId",uniqueId.uniqueId)
    // console.log("It is the token", token);

   

       
    const formik = useFormik({
        initialValues: {
            currentpassword:'',
            newpassword: '',
            confirmpassword: '',
        },
        validationSchema: Yup.object({
            newpassword: Yup.string()
                .min(8, 'Password must be at least 8 characters long')
                .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
                .matches(/[0-9]/, 'Password must contain at least one digit')
                .test('password', 'Password must contain at least one letter and one digit', value => {
                    return /[a-zA-Z]/.test(value) && /[0-9]/.test(value);
                })
                .required('Password is required'),

            confirmpassword: Yup.string()
                .oneOf([Yup.ref('newpassword'), null], 'Passwords must match')
                .required('Confirm Password is required'),
        }),
        onSubmit: async (values) => {
            const { currentpassword, newpassword,confirmpassword } = formik.values;
            console.log("passwords", currentpassword,newpassword, confirmpassword);
            if (newpassword !== confirmpassword) {
                console.log("Passwords do not match");
                return;
            }

            const data = {
                newpassword:newpassword,
                currentpassword:currentpassword,
                uniqueId : uniqueId.uniqueId
            }
            console.log("data",data)
            try {
                const response = await axios.post('https://event-project-2-e1g8.onrender.com/dashboard/updatepassword', data);
                console.log("Data sent");

                if(response.data.message==='success'){
                   
                        Swal.fire({
                            icon: "success",
                            title: "Password changed successfully",                    
                          }).then((response)=>{
                            if(response.isConfirmed){
                                console.log("hereeeeeeeeee")
                                Navigate(`/dashboard/${uniqueId.uniqueId}`)
                            }
                          })
                    
                }

                else if(response.data.message==='No'){

                    Swal.fire({
                        icon: "error",
                        title: "Wrong Current Password",
                      });
                }

                else if(response.data.message==='Failed'){
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        html: '<div class="swal-fail">Something went wrong!<br>Please try again </div>',
                        
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
         <div className="form">
        
        <div className="form-container">
            <form onSubmit={formik.handleSubmit}>
            <div className="stp step-1  ">
        <div className='stp-content'>
      <div className="header">
        <h1 className="title">Update your password</h1>
        
      </div>
      <div className='form-section'>

        <div className="email">
                <div className="label">
                    <label htmlFor="currentpassword">Current password:</label>
                    {formik.touched.currentpassword && formik.errors.currentpassword && (
                        <p className="error">{formik.errors.currentpassword}</p>
                    )}
                </div>
                <input className='input'
                    required=""
                    type="password"
                    name="currentpassword"
                    id="currentpassword"
                    placeholder="e.g. Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.currentpassword}
                />
                </div>

                <div className="email">
                <div className="label">
                    <label htmlFor="newpassword">New password:</label>
                    {formik.touched.newpassword && formik.errors.newpassword && (
                        <p className="error">{formik.errors.newpassword}</p>
                    )}
                </div>
                <input className='input'
                    required=""
                    type="password"
                    name="newpassword"
                    id="newpassword"
                    placeholder="e.g.New Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.newpassword}
                />
                </div>

         <div className="email">
                <div className="label">
                    <label htmlFor="confirmpassword">Confirm New Password:</label>
                    {formik.touched.confirmpassword && formik.errors.confirmpassword && (
                        <p className="error">{formik.errors.confirmpassword}</p>
                    )}
                </div>
                <input className='input'
                    required=""
                    type="password"
                    name="confirmpassword"
                    id="confirmpassword"
                    placeholder="e.g. Confirm New Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmpassword}
                />
                </div>
                <Link to="/forgotpassword"><p className='forgotpassword'>Forgot Password?</p></Link>
                <button className="submit_btn"type="submit">Update</button>
                </div>
                </div>
                </div>
            </form>
            </div>
            </div>
        </>
    )
}
