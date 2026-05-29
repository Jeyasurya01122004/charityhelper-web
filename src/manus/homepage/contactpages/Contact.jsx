import React from 'react';
import './Contact.css';
import Head from '../../../component/header/Header';
import Footers from '../../../component/footer/Footer';
// import Donatebtn from '../../../component/buttons/Donatebtn';
import { useState } from 'react';


export default function Contact() {
  const [logindata, setlogindata] = useState({
    uname: "",
    uemail: "",
    umobile: "",
    umsg: ""
  });

  const handleChange = (e) => {
    setlogindata({
      ...logindata,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !logindata.uname ||
      !logindata.uemail ||
      !logindata.umobile ||
      !logindata.umsg
    ) {
      alert("Form not submitted");
    } else {
      alert("Form submitted successfully");
    }
  };

  return (
    <div>
      <Head/>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Get in Touch</h1>

        <div className="formname">
          <p>Name:</p>
          <input
            className="fname"
            type="text"
            name="uname"
            value={logindata.uname}
            onChange={handleChange}
          />
        </div>

        <div className="formmail">
          <p>E-mail:</p>
          <input
            className="fmail"
            type="text"
            name="uemail"
            value={logindata.uemail}
            onChange={handleChange}
          />
        </div>

        <div className="formmobile">
          <p>Mobile:</p>
          <input
            className="fmobile"
            type="number"
            name="umobile"
            value={logindata.umobile}
            onChange={handleChange}
          />
        </div>

        <div className="formmsg">
          <p>Message:</p>
          <input
            className="fmsg"
            type="text"
            name="umsg"
            value={logindata.umsg}
            onChange={handleChange}
          />
        </div>

        <div className="formbtn">
          <button type="submit">Send</button>
        </div>
      </form>
      <Footers/>
    </div>
  );
}
  
