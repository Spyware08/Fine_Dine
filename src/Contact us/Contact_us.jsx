import React from 'react'
import "./contact.css"

export default function Contact_us() {
  return (

    <div className='contact'>
      <h2>Contact us</h2><hr />
      <div className='contact_maps'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6806.107932392964!2d76.26581382229001!3d31.46770161487849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ad1f3311f1d07%3A0x9a2ee3a1f4ad366a!2sReliance%20Digital!5e0!3m2!1sen!2sin!4v1704872575619!5m2!1sen!2sin" width="80%" height="280" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div> 

      <div className='contact_form'>
        <form action="https://formspree.io/f/xayrnwzy" method="post" className=' contact_form'>
          <input name="Name" type="text" placeholder='Username' required autoComplete='off' />
          <input name="Email" placeholder='email@123.com' required type="email" autoComplete='off' />
          <textarea name="text" id="" cols="20" rows="5" autoComplete='off' required placeholder='Write a note for Us : -'></textarea> <br /> 
          <input type="submit" value="Submit" className='contact_btn' />
        </form>
      </div>
    </div>

  )
}
