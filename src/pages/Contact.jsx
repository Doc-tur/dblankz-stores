import React from 'react';
import {useState} from 'react';

export default function Contact(){
  const [sent,setSent]=useState(false);
  
  return (
    <main className="container page prose">
      <span className="eyebrow">GET IN TOUCH</span>
      <h1>Contact Us</h1>
      <p>Questions about our products? Send us a message.</p>
      {sent?<div className="notice">Thanks! Your demo message has been received. No message was sent to a server.</div>:<form onSubmit={e=>{e.preventDefault();setSent(true)}}><label>Name<input required placeholder="Your name"/></label><label>Email<input required type="email" placeholder="you@example.com"/></label><label>Message<textarea required rows="5" placeholder="How can we help?"/></label><button className="primary">Send Message</button></form>}
    </main>
  );
}
