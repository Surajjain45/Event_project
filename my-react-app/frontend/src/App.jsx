import Features from "./components/Features/features"
import { Route, Routes } from "react-router-dom"
import Hero from "./components/Hero_Home/Hero"
import Events from "./components/Events_display/Events_display"
import Event_page from "./components/Event_page/event_page"
import RegisterEvent from "./components/Create_event/register_event"
import Event_login from "./components/Event_login/Event_login"
import LoginForm from "./components/Event_login/Event_login"
import AudienceRegistration from "./components/audienceRegister/audienceRegister"
import showAudience from "./components/eventDashboard/eventDashboard"

import EventDashboard from './components/eventDashboard/eventDashboard'
import Success from './components/successPage/success'
import Cancel from './components/cancelPage/cancel'

// import ModalComponent from "./components/Event_login/Event_login"
// import Buttonpages from "./components/Event_login/Event_login"

// import {React} from 'react';
// import {  Route, Switch } from 'react-router-dom';

function Home(){

  return(
    <>
     {/* <Buttonpages/> */}
    <Hero/>
     <Features/>
    <Events/>
     <RegisterEvent/>
     <Event_login/>
    <LoginForm/>
     <AudienceRegistration/>
     {/* <showAudience/> */}
  
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
         <Route path="/dashboard" element= {<EventDashboard/>}></Route>
         <Route path="/success" element= {<Success/>}></Route>
         <Route path="/cancel" element= {<Cancel/>}></Route>
         <Route path="/dashboard" element = {<EventDashboard/>}></Route>
    </Routes>
      
      {/* <Event_page/> */}

      {/* <Event_page/> */}

    </>
  )
}

export default App
