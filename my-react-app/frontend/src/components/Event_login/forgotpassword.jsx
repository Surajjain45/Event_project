import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";

export default function Forgotpassword(){

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
            await axios.post('http://localhost:3000/forgotpassword', data);
           } catch (error) {
            console.log('Error changing password', error);
           }
        }
    });
    return (
        <>
        <div className="changepassword">
            <form onSubmit={formik.handleSubmit}>
                <div className="email">
                    <div className="label">
                        <label htmlFor="email">Enter your email:</label>
                        {formik.touched.email && formik.errors.email && (
                            <p className="error">{formik.errors.email}</p>
                        )} 
                    </div>
                    <input
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
                    <input
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

                <button type="submit">Send email</button>
            </form>
        </div>
        </>
    );
}
