import highIcon1 from "../../src/assets/image/high-icon1.png";
import highIcon2 from "../../src/assets/image/highIcon2.png";
import highIcon3 from "../../src/assets/image/highIcon3.png";
import highIcon4 from "../../src/assets/image/highIcon4.png";

const HighNumber = () => {
  const boxData = [
    {
      id: 1,
      img:highIcon1,
      title: "High Quality",
      desc: "In fringilla sollicitudin euismod sed. At urna adipiscing commodo suspendisse nunc enim tristique et.",
    },
    {
      id: 2,
      img:highIcon2,
      title: "Professional Technique",
      desc: "In fringilla sollicitudin euismod sed. At urna adipiscing commodo suspendisse nunc enim tristique et.",
    },
    {
      id: 3,
      img:highIcon3,
      title: "Varierty of Wood",
      desc: "In fringilla sollicitudin euismod sed. At urna adipiscing commodo suspendisse nunc enim tristique et.",
    },
    {
      id: 4,
      img:highIcon4,
      title: "Custom Production",
      desc: "In fringilla sollicitudin euismod sed. At urna adipiscing commodo suspendisse nunc enim tristique et.",
    },
  ];
  const getBoxData=(id)=>{
    const box=boxData.find(item=>item.id===id)
    return(
      <div className="box dp-align">
      <div className="img-block">
        <img src={box.img} alt="" />
      </div>
      <div className="text-con">
        <h5>{box.title}</h5>
        <p>
          {box.desc}
        </p>
      </div>
    </div>
    )
  }
  return (
    <section className="high-number">
      <div className="container">
        <div className="high-con">
          <div className="row">
            <div className="col-md-4 col-sm-12 col-12">
              <div className="high-left">
                <h3>230+</h3>
                <p>
                  Bespoke order <br /> production
                </p>
              </div>
            </div>
            <div className="col-md-8 col-sm-12 col-12">
              <div className="high-right">
                <div className="row g-5">
                  <div className="col-md-6 col-sm-12 col-12">
                    <div className="left">
                      <div>
                      {getBoxData(1)}
                      {getBoxData(3)}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-12">
                    <div className="right">
                      <div>
                      {getBoxData(2)}
                      {getBoxData(4)}
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighNumber;
