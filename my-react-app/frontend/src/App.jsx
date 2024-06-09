import Features from "./components/Features/features"
import { Route, Routes } from "react-router-dom"
import Hero from "./components/Hero_Home/Hero"
import Events from "./components/Events_display/Events_display"
import Event_page from "./components/Event_page/event_page"
import RegisterEvent from "./components/Create_event/register_event"
import Event_login from "./components/Event_login/Event_login"
import LoginForm from "./components/Event_login/Event_login"
import AudienceRegistration from "./components/audienceRegister/audienceRegister"
import Verification from "./components/Create_event/verifcation"
import Forgotpassword from "./components/Event_login/forgotpassword"
import React, { useRef } from 'react';
// import Event_details from "./components/Events_display/Event_details"
// import Eventdashboard_mui from "./components/eventDashboard/eventDashboard_mui"
import Eventdashboard from './components/eventDashboard/eventDashboard';
import Event_details from "./components/eventDashboard/Eventdetails"
import Audience from "./components/eventDashboard/Audiences"
import Update_details from "./components/eventDashboard/Update_details"
import Overview from "./components/eventDashboard/overview"
import Changepassword from "./components/eventDashboard/Changepassword"
import ContactUs from "./components/contactus/contactus"
import Aboutus from "./components/aboutus/about"
import User_form from "./components/user_registration/user_form"
import Success from './components/successPage/Success'
// import Cancel from './components/cancelPage/cancel'



// import ModalComponent from "./components/Event_login/Event_login"
// import Buttonpages from "./components/Event_login/Event_login"

// import {React} from 'react';
// import {  Route, Switch } from 'react-router-dom';



function Home(){

  const contact = useRef(null);

  const contacts = () => {
    contact.current.scrollIntoView({ behavior: 'smooth' });
  };
  return(
    <>
    <Hero/>
     <Features/>
     <Events/>
     {/* <RegisterEvent/>
     <Event_login/> */}
     {/* <Buttonpages/> */}
     {/* <LoginForm/> */}
     {/* <AudienceRegistration/> */}
     <Aboutus/>
     <ContactUs/>
     {/* <showAudience/> */}
  
    </>
  )
}

function App() {
  return (
    <>
    {/* <BrowserRouter> */}
    <Routes>
     
         {/* <Route path="/new" element = {<New/>}></Route> */}
         <Route exact path='/' element={<Home/>}></Route>
         <Route path= '/events_page/:uniqueId' element = {<Event_page/>}></Route>
         <Route path= '/book_ticket/:uniqueId' element = {<AudienceRegistration/>}></Route>
         <Route path="/dashboard/:uniqueId" element= {<Eventdashboard/>}>
            <Route index element={<Overview/>}></Route>
            <Route path="/dashboard/:uniqueId/event_details" element={<Event_details/>}></Route>
            <Route path="/dashboard/:uniqueId/audience" element={<Audience/>}></Route>
            <Route path="/dashboard/:uniqueId/update_details" element={<Update_details/>}></Route>
            <Route path="/dashboard/:uniqueId/change_password" element={<Changepassword/>}></Route>

          </Route>      
         <Route path="/verify" element = {<Verification/>}></Route>
         <Route path="/login" element={<LoginForm/>}></Route>
         <Route path="/registerevent" element={<RegisterEvent/>}></Route>
         <Route path="/success" element= {<Success/>}></Route>
         {/* <Route path="/cancel" element= {<Cancel/>}></Route> */}
        

         <Route path="/forgotpassword" element={<Forgotpassword/>}></Route>
         
    </Routes>
    {/* </BrowserRouter> */}
    

    </>
  )
}

export  {App}
