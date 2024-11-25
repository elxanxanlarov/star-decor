import { CiTwitter } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-head">
        <h2>Contact</h2>
      </div>
      <div className="contact-body">
        <div className="container">
          <div className="body-con">
            <div className="top">
              <div className="up dp-between">
                <div>
                  <span>Get Started</span>
                  <p>
                    <span>Get in touch </span>with us. <br /> We're here to{" "}
                    <span>assist you.</span>
                  </p>
                </div>
                <div className="social">
                  <div>
                    <FaFacebookF />
                  </div>
                  <div>
                    <FaInstagram />
                  </div>
                  <div>
                    <FaTwitter />
                  </div>
                </div>
              </div>
              <div className="down">
                <div className="inputs">
                  <div className="row">
                    <div className="col-md-4 col-sm-6 col-12">
                      <div>
                        <input placeholder="Your Name" type="text" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                      <div>
                        <input placeholder="Email Address" type="email" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-12">
                      <div>
                        <input
                          placeholder="Phone Number (optional)"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="textarea">
                  <textarea
                    name=""
                    id="textarea"
                    placeholder="Message"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="bottom">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.264688129472!2d3.039124875300162!3d36.740217271079366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad8bcc1b5629%3A0x7e36faab00bfbddf!2sStar-D%C3%A9co!5e0!3m2!1saz!2saz!4v1732441313743!5m2!1saz!2saz"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
