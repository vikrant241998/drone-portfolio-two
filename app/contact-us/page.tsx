"use client";
import React, { useState, useCallback } from "react";
import "../styles/contact.css";

const Page = () => {
  const [formData, setFormData] = useState({
    yourname: "",
    youremail: "",
    yourmessage: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      const { yourname, youremail, yourmessage } = formData;

      if (!yourname || !youremail || !yourmessage) {
        alert("Please fill out all required fields.");
        return; 
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(youremail)) {
        alert("Please enter a valid email address.");
        return; 
      }

      console.log("Submitting Data:", formData);

  
      alert(`Thank you, ${yourname}! Your message has been sent successfully.`);

   
      setFormData({
        yourname: "",
        youremail: "",
        yourmessage: "",
      });
    },
    [formData]
  ); 

  return (
    <>
      <section id="contact-us" className="contact-section">
        <div className="contact-bg-animation"></div>

        <div className="contact-container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Contact</h2>
              <div className="contact-handler">
                <div className="info-block">
                  <h3>Our Address</h3>
                  <p>3869 Sherwood Forest Drive</p>
                  <p>Glendale, NH 03246</p>
                  <p>United States</p>
                </div>

                <div className="info-block contact-details">
                  <p>
                    <a href="mailto:hello@example.com">
                      &#9993; hello@example.com
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i> we.are.scrape
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      <i className="fab fa-twitter"></i> @scrapeagency
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* --- Right Side: Contact Form --- */}
            <div className="contact-form-area">
              <h3>Contact Form</h3>

              {/* onSubmit handler aur form tag */}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="yourname">Your Name</label>
                  <input
                    type="text"
                    id="yourname"
                    name="yourname"
                    placeholder="Your Name"
                    value={formData.yourname} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="youremail">Your Email</label>
                  <input
                    type="email"
                    id="youremail"
                    name="youremail"
                    placeholder="Your Email"
                    value={formData.youremail}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="yourmessage">Your Message</label>
                  <textarea
                    id="yourmessage"
                    name="yourmessage"
                    rows={5}
                    placeholder="Your Message"
                    value={formData.yourmessage} 
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="send-btn">
                  Send a Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
