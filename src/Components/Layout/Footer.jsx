const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-con">
        <div className="row">
          <div className="col-md-5 col-sm-12 col-12">
            <div className="left">
              <div className="logo">
                <h2 className=" dp-align">
                  ST
                  <img
                    style={{ width: "2.2rem" }}
                    src="../../../src/assets/image/logo-star.png"
                    alt=""
                  />
                  R DECOR
                </h2>
                <img
                  className="logo-design"
                  src="../../../src/assets/image/logo-desing.png"
                  alt=""
                />
              </div>
              <div className="text">
                <p>
                  Uncover the joy of woodworking at Wood Academy. Discover the
                  enriching experience of creating something with your own
                  hands. Join our vibrant community and embark on a journey of
                  creativity, fulfillment, and lifelong learning.
                </p>
              </div>
              <p className="copy-right rp-none">Copyright © 2024.</p>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 col-12">
            <div className="middle">
              <div className="top dp-align ">
                <input placeholder="E-mail" type="email" />
                <button>SUBSCRIBE</button>
              </div>
              <div className="bottom">
                <div className="row">
                  <div className="col-md-4 col-sm-4 col-12">
                    <div>
                      <h4>ABOUT US</h4>
                      <p>Our Academy</p>
                      <p>Our Instructor</p>
                      <p>Our Blog</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-12">
                    <div>
                      <h4>INFORMATION</h4>
                      <p>Term of Use</p>
                      <p>Privacy Policy</p>
                      <p>FAQ</p>
                      <p>Instructions</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-12">
                    <div>
                      <h4>ABOUT US</h4>
                      <p>
                        A:6/8 Wilmette Pl, Mona Vale <br />
                        NSW 2103
                      </p>
                      <p>E:info@woodacademy.com</p>
                      <p>P:1800 888 888</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-12 col-12 ">
            <div className="right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.264688129472!2d3.039124875300162!3d36.740217271079366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad8bcc1b5629%3A0x7e36faab00bfbddf!2sStar-D%C3%A9co!5e0!3m2!1saz!2saz!4v1732441313743!5m2!1saz!2saz"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <p className="copy-right">Copyright © 2024.</p>
            </div>
          </div>
        </div>
        <div className="middle"></div>
        <div className="right"></div>
      </div>
    </footer>
  );
};

export default Footer;
