import React from 'react'
import "./ContactUsMain.css"
import ContactUsForm from './ContactUsForm'
import ContactUsAddress from './ContactUsAddress'
const ContactUsMain = () => {
  return (
    <div className='contactUsMain'>
      <div className="contactUsMainContent1"><ContactUsAddress/></div>
      <div className="contactUsMainContent2"><ContactUsForm/></div>
    </div>
  )
}

export default ContactUsMain
