import './features.css'
import icon1 from './features_assests/graph_icon.png' 
import icon2 from './features_assests/financial_icon.png' 
import icon3 from './features_assests/Rectangle 14.png'

import Feature_details from './Features_details'
export default function Features(){
    return(
        <>
         <h1 className='feature_heading'>Our <span className='highlight'>Features</span></h1>
        
        <div className="upper">
        <Feature_details  icon = {icon1} heading="QR Code Generation" des="Entry will be based on uniqily generated QR Codes to eliminate fake entries."/>
        <Feature_details icon = {icon2} heading="Analysis Dashboard" des="A visual Dashboard for organizer to easily analyse the Event and its Audience."/>
        <Feature_details  icon = {icon3} heading="Form Generator" des="Easily make Good Looking Registration page to attract people."/>
        </div>

        <div className="lower">
        <Feature_details icon = {icon1} heading="Audience" des="Connect with audience easily and answer their query easily."/>
        <Feature_details icon = {icon2} heading="Security" des="Security from fake Registration and black ticket sales."/>
        </div>

       

        </>
    )
}