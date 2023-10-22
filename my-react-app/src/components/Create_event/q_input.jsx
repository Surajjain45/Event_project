import './register_event.css'

export default function Questions( {classnam ,name, label , input_type, placeholder}) {
    return (
        <>
        <div className={`${classnam} question`}>
         <div className="label">
          <label htmlFor="name">{label}</label>
          {/* <p className="error">This Field Is Required</p> */}
        </div>
        <input  className=' input'
          required=""
          type={input_type}
          name={name}
          id="name"
          placeholder={placeholder}
          // onChange={handleChange}

        />
        </div>
        </>
    );
}