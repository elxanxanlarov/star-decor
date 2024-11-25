import Slider from "react-slick";
import homeAboutImage1 from "../../src/assets/image/home-about1.png";
import homeAboutImage2 from "../../src/assets/image/home-about2.png";
import brendImage1 from "../../src/assets/image/brend-one.png";
import brendImage2 from "../../src/assets/image/brend2.png";
import brendImage3 from "../../src/assets/image/brend3.png";
import brendImage5 from "../../src/assets/image/brend5.png";
import productImg1 from "../../src/assets/image/product1.png";
import ProductCard from "../Components/ProductCard";
import HighNumber from "../Components/HighNumber";
import homeVideoImg from "../../src/assets/image/home-video-img.png";
import videoPlayIcon from "../../src/assets/image/video-play-icon.png";
import { useState } from "react";
const Home = () => {
  const [isOpenVideo,setIsOpenVideo]=useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    touchMove: true,
    autoplaySpeed: 3000,
    arrows: false,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const brendsImage = [
    brendImage1,
    brendImage3,
    brendImage2,
    brendImage5,
    brendImage3,
    brendImage2,
  ];
  const productData = [
    {
      id: 1,
      img: productImg1,
      title: "Eclypse Bookcase",
    },
    {
      id: 2,
      img: productImg1,
      title: "Eclypse Bookcase",
    },
    {
      id: 3,
      img: productImg1,
      title: "Eclypse Bookcase",
    },
    {
      id: 4,
      img: productImg1,
      title: "Eclypse Bookcase",
    },
  ];
  return (
    <>
      <main className="home-hero">
        <div className="container h-100">
          <div className="hero-con h-100">
            <div className="text-con">
              <h1>
                Elevate Your Home with <br /> Exquisite Wood Furniture
              </h1>
              <p>
                Risus scelerisque a non turpis vitae malesuada sed venenatis. In
                fringilla sollicitudin euismod sed. At urna adipiscing commodo
                suspendisse nunc enim tristique et.{" "}
              </p>
              <button className="btn">DISCOVER</button>
            </div>
          </div>
        </div>
      </main>
      <section className="home-about">
        <div className="container">
          <div className="about-con">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-12">
                <div className="about-left">
                  <div className="img-con img-one">
                    <img src={homeAboutImage1} alt />
                  </div>
                  <div className="img-con img-two">
                    <img src={homeAboutImage2} alt />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-12">
                <div className="about-right">
                  <div className="text-con">
                    <h6>ABOUT US</h6>
                    <h3>
                      OUR HISTORY OF MAKING <br /> THE BEST WOOD PRODUCT
                    </h3>
                    <p>
                      Risus scelerisque a non turpis vitae malesuada sed
                      venenatis. In fringilla sollicitudin euismod sed. At urna
                      adipiscing commodo suspendisse nunc enim tristique et.
                    </p>
                    <button className="btn">READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="brends">
        <div className="container">
          <div className="brends-con">
            <h2>Brendlər</h2>
            <div className="slider-container">
              <Slider {...settings}>
                {brendsImage.map((item, index) => (
                  <div key={index}>
                    <img src={item} alt="" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-product">
        <div className="container">
          <div className="featured-con">
            <div className="featured-head w-50">
              <div className="text-con">
                <h6>FEATURED PRODUCT</h6>
                <h3>
                  EXPLORE BEST PRODUCT <br />
                  FROM OUR MASTER CRAFTSMAN
                </h3>
                <p>
                  Risus scelerisque a non turpis vitae malesuada sed venenatis.
                  In fringilla sollicitudin euismod sed. At urna adipiscing
                  commodo suspendisse nunc enim tristique et.
                </p>
                <button className="btn">EXPLORE ALL PRODUCT</button>
              </div>
            </div>
            <div className="featured-body">
              <div className="row g-5">
                {productData.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <HighNumber />
      <section className="partners">
        <div className="container">
          <div className="partners-con">
            <h2>Partnyorlar</h2>
            <div className="box-con">
              {brendsImage.slice(0, 5).map((item, index) => (
                <div key={index} className="box">
                  <img src={item} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="youTube-video">
        <div className="container">
          <div className="img-block">
            <img className="bg-img" src={homeVideoImg} alt="" />
            <img onClick={()=>setIsOpenVideo(true)} className="video-play-icon" src={videoPlayIcon} alt="" />
          </div>

          <div  className={isOpenVideo ?"video active":"video"}>
           {isOpenVideo && <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/NV-TSUwy-TM?si=bIzrl4esgX3Fmf2m"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>}
          </div>
          <div onClick={()=>setIsOpenVideo(false)} className={isOpenVideo &&"dark-bg"}>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
