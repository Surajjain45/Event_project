import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import querystring from "query-string"

export default function Verification() {
    const [isverified, setIsverified] = useState(false);
    const location = useLocation();
    const queryParams = querystring.parse(location.search);
    const token = queryParams.token;
    const uniqueId = queryParams.uniqueId;
    console.log("It is the token", token);

       
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
            } catch (error) {
                console.error("Failed to send data", error);
            }
        }
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
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

                <button type="submit">Submit</button>
            </form>
        </>
    )
}
