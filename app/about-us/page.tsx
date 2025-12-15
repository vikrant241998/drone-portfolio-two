import React from "react";
import "../styles/about.css";

function page() {
  return (
    <>
      <div id="about-us">
        <div className="about-container">
          <div className="about-wrapper">
            <h2 data-aos="fade-up-right"  > About US</h2>
          </div>

          <div className="about-handler">
            <div className="about-content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus ratione adipisci aliquam, id animi quae reprehenderit
                ea dicta architecto vero alias quas optio, assumenda nemo sit
                tenetur. Blanditiis, laboriosam nesciunt! Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Temporibus ratione adipisci
                aliquam, id animi quae reprehenderit ea dicta architecto vero
                alias quas optio, assumenda nemo sit tenetur. Blanditiis,
                laboriosam nesciunt!
              </p>
              <div className="about-btn" data-aos="fade-up-right">
                <button>Contact us </button>
              </div>
            </div>
            <div
              className="about-img"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
