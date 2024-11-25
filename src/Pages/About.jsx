import aboutBox1 from "../../src/assets/image/about-box1.png";
import aboutBox2 from "../../src/assets/image/about-box2.png";
import aboutBox3 from "../../src/assets/image/about-box3.png";
import aboutBox4 from "../../src/assets/image/about-box4.png";
import HighNumber from "../Components/HighNumber";
const About = () => {
  return (
    <div className="about-page">
      <div className="about-head ">
        <h2>About Us</h2>
      </div>
      <div className="about-body">
        <div className="top">
          <h3>
            OUR HISTORY OF MAKING THE BEST <br />
            <span>WOOD PRODUCT</span>
          </h3>
          <p>
            Risus scelerisque a non turpis vitae malesuada sed venenatis. In
            fringilla sollicitudin euismod sed. At urna adipiscing commodo
            suspendisse nunc enim tristique et. Risus scelerisque a non turpis
            vitae malesuada sed venenatis. In fringilla sollicitudin euismod
            sed. At urna adipiscing commodo suspendisse nunc enim tristique et.
            Risus scelerisque a non turpis vitae malesuada sed venenatis. In
            fringilla sollicitudin euismod sed. At urna adipiscing commodo
            suspendisse nunc enim tristique et.
          </p>
        </div>
        <div className="bottom">
          <div className="frispes-text">
            <span>Frispes gallery</span>
            <p>
              Immersive beautiful co-
              <br className="br-none" />
              working space gallery
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-12">
                <div className="box first">
                  <img src={aboutBox1} alt="" />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="box second">
                  <img src={aboutBox2} alt="" />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="box">
                  <img src={aboutBox3} alt="" />
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="box">
                  <img src={aboutBox4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HighNumber/>
    </div>
  );
};

export default About;
