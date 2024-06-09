import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="contact-bg">
        <div className="cards-container">
          <div className="d-flax">
            <div className="left-side">
              <h2>Looking for more information?</h2>
              <div className="section-title-bottom-line"></div>
              <input type="text" placeholder="Enter Name" />
              <input type="text" placeholder="Enter Email" />
              <input type="text" placeholder="Enter Contact Number" />
              <textarea
                placeholder="Enter Message"
                className="textarea"
              ></textarea>
              <button
                type="submit"
                name="sub"
                id="sub"
                class="btn btn-primary btn-lg"
              >
                Submit
              </button>
            </div>
            <div className="right-side">
              <h2>Our Address</h2>
              <div class="section-title-bottom-line"></div>

              <div className="panel1">
                <ul class="no-bullet">
                  <li>
                    <strong>Fahim Shakir Sidiqui</strong>
                  </li>
                  <li>Block C-11B, Top Floor, New</li>
                  <li>Ashok Nagar New Delhi 110096, INDIA.</li>
                </ul>
                <hr />
                <ul class="no-bullet">
                  <li>
                    <strong>Follow</strong>
                  </li>
                </ul>
                <ul class="small-block-grid-1 chooseus">
                  <li>
                    <i class="fa fa-envelope-o"></i>{" "}
                    <a href="mailto:info@fahimshakir.com">
                      info@fahimshakir.com
                    </a>
                  </li>
                  <li>
                    <i class="fa fa-envelope-o"></i>{" "}
                    <a href="mailto:fahimshakir786@gmail.com">
                      fahimshakir786@gmail.com
                    </a>
                  </li>
                  <li>
                    {" "}
                    <i class="foundicon-skype"></i>
                    <a href="skype:fahim.shakir40"> fahim.shakir40</a>
                  </li>
                  <li>
                    <i class="fa fa-phone"></i>
                    <a href="tel:09718925775">09718925775</a>{" "}
                  </li>
                  <li>
                    <i class="fa fa-phone"></i>
                    <a href="tel:09268751849">09268751849</a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
