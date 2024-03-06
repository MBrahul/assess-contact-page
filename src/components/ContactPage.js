import React, { useState } from 'react'
import validation from '../js/validation';
import img from '../assets/img3-ezgif.com-crop.gif';
import insta from '../assets/instagram.png';
import ln from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPage() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    msg: ''
  });

  //ERROR IN VALIDATIONS
  const [errors, setErrors] = useState({
    is: true,
    name: '',
    email: '',
    phone: '',
    msg: ''
  });

  const handleChange = (event) => {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  }

  //Connection to google sheet  
  const sendData = async () => {
    const scriptURL = "https://script.google.com/macros/s/AKfycbyg1PIV9OYBinK6aoGFMWFo3MiJnBSVPPge4W4LlmRIMzqlA-i1UPz5KfroEggIzzkW/exec";
    const form = document.forms['contact-form'];
    const response = await fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    });
    const res = await response.json();
    console.log(res);
    //Showing pop-up notifications
    if (res.result === "success") {
      toast.success('Thanks for contacting us!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      });
    }
    else {
      toast.error('Something is Wrong!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    setValues({
      name: '',
      email: '',
      phone: '',
      msg: ''
    });
  }


  // Function to validation data and send it to google sheet if there is no error.
  const handleSubmit = (event) => {
    event.preventDefault();
    const newObj = validation(values);
    setErrors(newObj);
    if (!newObj.is) {
      // If there is no error - send data to google sheet
      sendData(values);
    }
  }
  return (
    <>
      <section className="contact-section my-2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 form-section p-5 order-lg-0 order-1">
              <h2 className='font-main fw-bolder'>Get in touch</h2>
              <p className='fw-lighter'>How we can help you? please write down your query.</p>
              <form className='mt-5' name='contact-form'>
                <div className="mb-3">
                  <input type="text" name='name' className="form-control shadow-none" id="exampleInputEmail1" placeholder='Write your Name' value={values.name} onChange={handleChange} />
                  <span className="error-span">{errors.name}</span>
                </div>
                <div className="mb-3">
                  <input type="text" id="numericInput" name='phone' className="form-control shadow-none" placeholder='Write your Phone Number' value={values.phone} onChange={handleChange} />
                  <span className="error-span">{errors.phone}</span>
                </div>
                <div className="mb-3">
                  <input type="email" name='email' className="form-control shadow-none" id="exampleInputEmail1" placeholder='Write your Email' value={values.email} onChange={handleChange} />
                  <span className="error-span">{errors.email}</span>
                  <div id="emailHelp" className="form-text fw-lighter">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <textarea className="form-control shadow-none" name='msg' id="exampleFormControlTextarea1" rows="5" placeholder='Write your Message' value={values.msg} onChange={handleChange}></textarea>
                  <span className="error-span"> {errors.msg}</span>
                </div>

                <button type="button" className="btn btn-outline-primary submit-btn shadow-none" onClick={handleSubmit}>Submit</button>
              </form>
              <div className="mt-3 d-flex">
                <div className="fw-lighter">
                  Folllow us on social media :
                </div>
                <div className="social-icons d-flex px-2 gap-3">
                  <a href="https://www.instagram.com/assessli_ai/"><img src={insta} alt="instagram" /></a>
                  <a href="https://www.linkedin.com/company/assessli/"><img src={ln} alt="instagram" /></a>
                  <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjcgdKOrN-EAxXCka8BHf0mAzYQFnoECA8QAQ&url=https%3A%2F%2Ftwitter.com%2Fassessli&usg=AOvVaw0CgG_pQf7zAGCOySvlewHD&opi=89978449"><img src={twitter} alt="instagram" /></a>

                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 order-0 order-lg-1 d-flex justify-content-center align-items-center">
              <div className="container img-section">
                <img className='' src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  )
}
