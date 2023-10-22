import Features from "./components/Features/features"
import { Route, Routes } from "react-router-dom"
import Hero from "./components/Hero_Home/Hero"
import Events from "./components/Events_display/Events_display"
import Event_page from "./components/Event_page/event_page"
import RegisterEvent from "./components/Create_event/register_event"

// import {React} from 'react';
// import {  Route, Switch } from 'react-router-dom';

function Home(){

  return(
    <>
    <Hero/>
     <Features/>
     <Events/>
     {/* <RegisterEvent/> */}
    </>
  )
}

function App() {
  return (
    <>
    
    <Routes>
         <Route exact path='/' element={<Home/>}></Route>
         <Route exact path= '/events_page' element = {<Event_page/>}></Route>
    </Routes>
      
      {/* <Event_page/> */}

      {/* <Event_page/> */}

    </>
  )
}

export default App
