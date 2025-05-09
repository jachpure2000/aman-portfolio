
import React, { useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'aman2000',    // from EmailJS dashboard
      'template_hwacy4z',   // from EmailJS dashboard
      form.current,
      'hGEh4SoieOIqdeEtI'        // from EmailJS dashboard
    ).then((result) => {
      alert('Message sent successfully!');
    }, (error) => {
      alert('Failed to send message.');
    });

    e.target.reset();
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
     <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} action="https://formspree.io/f/your-form-id" method="POST">
         <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="_replyto" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;