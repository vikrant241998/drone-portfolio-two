import React from "react";
import "../styles/about.css";

function page() {
  return (
    <>
      <div id="about-us">
        <div className="about-container">
          <div className="about-wrapper">
            <h2>About US</h2>
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
              <div className="about-btn">
                <button>Contact us </button>
              </div>
            </div>
            <div className="about-img"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
