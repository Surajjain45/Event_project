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
import showAudience from "./components/eventDashboard/eventDashboard"
import Forgotpassword from "./components/Event_login/forgotpassword"

import EventDashboard from './components/eventDashboard/eventDashboard';
import Dashboard from './components/eventDashboard/overview'
import Add_ticket from "./components/eventDashboard/Addtickets"

// import ModalComponent from "./components/Event_login/Event_login"
// import Buttonpages from "./components/Event_login/Event_login"

// import {React} from 'react';
// import {  Route, Switch } from 'react-router-dom';

function Home(){

  return(
    <>
    <Hero/>
     <Features/>
     <Events/>
     <RegisterEvent/>
     <Event_login/>
     {/* <Buttonpages/> */}
     <LoginForm/>
     <AudienceRegistration/>
     <showAudience/>
  
    </>
  )
}

function App() {
  return (
    <>
    
    <Routes>
         <Route exact path='/' element={<Home/>}></Route>
         <Route path= '/events_page/:uniqueId' element = {<Event_page/>}></Route>
         <Route path= '/book_ticket/:uniqueId' element = {<AudienceRegistration/>}></Route>
         <Route path="/dashboard/:uniqueId" element= {<Dashboard/>}></Route>
         <Route path="/dashboard/:uniqueId/addtickets" element={<Add_ticket/>}></Route>
         <Route path="/verify" element = {<Verification/>}></Route>
         <Route path="/forgotpassword" element={<Forgotpassword/>}></Route>
    </Routes>
      
      {/* <Event_page/> */}

      {/* <Event_page/> */}

    </>
  )
}

export default App
