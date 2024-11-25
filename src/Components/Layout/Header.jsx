import facebook from "../../../src/assets/image/Facebook.png";
import twitter from "../../../src/assets/image/Twitter.png";
import instagram from "../../../src/assets/image/Instagram.png";
import linkedIn from "../../../src/assets/image/LinkedIn.png";
import YouTube from "../../../src/assets/image/YouTube.png";
import telephoneIcon from"../../../src/assets/image/telephone-icon.png"
import localtionIcon from"../../../src/assets/image/localtion-icon.png"
import logoDesing from"../../../src/assets/image/logo-desing.png"
import logoStar from"../../../src/assets/image/logo-star.png"
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div style={{overflow:"hidden"}}>
        <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="top-con dp-between">
              <div className="left dp-align">
                <div className="social dp-align rp-none">
                  <div>
                    <a href="#">
                      <img src={facebook} alt="Facebook" />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src={twitter} alt="Twitter" />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src={instagram} alt="Instagram" />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src={linkedIn} alt="LinkedIn" />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src={YouTube} alt="YouTube" />
                    </a>
                  </div>
                </div>
                <div className="phone dp-align">
                  <div>
                    <img src={telephoneIcon} alt="telephoneIcon" />
                  </div>
                  <p>+994868743535</p>
                </div>
              </div>
              <div className="right dp-align">
                <div className="location dp-align">
                  <div>
                    <img src={localtionIcon} alt="localtionIcon" />
                  </div>
                  <p>Baku, Azerbaijan</p>
                </div>
                <div className="look-map rp-none">
                  <p>( Xəritədə bax )</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <nav className="navbar navbar-expand-lg bg-white py-3">
            <div className="container">
              <a className="navbar-brand" href="#">
                <div className="logo-block">
                  <div className="logo-desing">
                    <img
                      src={logoDesing}
                      alt="logo-desing"
                    />
                  </div>
                  <p className="logo-text">
                    ST
                    <img
                      className="logo-star"
                      src={logoStar}
                      alt="logo-star"
                    />
                    R DECOR
                  </p>
                </div>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-5 gap-sm-1 gap-1">
                  <li className="nav-item">
                    <NavLink to='/' className="nav-link" aria-current="page" href="#">
                      Ana Səhifə
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/about' className="nav-link" href="#">
                      Haqqımızda
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/contact' className="nav-link" href="#">
                      Əlaqə
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/catalog' className="nav-link" href="#">
                      Kataloq
                    </NavLink>
                  </li>
                </ul>
                <Link to="/order" className="btn order-btn" type="submit">
                  Sifariş
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header