import React, { useEffect, useState } from 'react';
import MobileNavBar from './MobileNavBar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NavBar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative-nav">
      <div
        className="navigation"
        data-aos="fade-in"
        data-aos-offset="0"
        data-aos-delay="0"
        data-aos-duration="800"
        data-aos-once="true"
      >
        <a href="/">
          <img src="/kiva-white-logo-v2.png" className="margin-logo" alt="Kiva Logo" />
        </a>
        <div className="links">
          <div className="ml-3 mr-3 hide-class">
            <a href="/">HOME</a>
          </div>
          <div className="ml-3 mr-3 hide-class">
            <div className="dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button
                className="btn btn-link dropdown-toggle nav-link-dropdown"
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                LIVE INVENTORY
              </button>
              <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} style={{ display: dropdownOpen ? 'block' : 'none' }}>
                <a className="dropdown-item dropdown-nav-item" href="http://kivastonefl.stoneprofitsweb.com">Florida</a>
                <a className="dropdown-item dropdown-nav-item" href="http://kivastone.stoneprofitsweb.com">Dallas</a>
                <a className="dropdown-item dropdown-nav-item" href="http://kivastonech.stoneprofitsweb.com">Chicago</a>
                <a className="dropdown-item dropdown-nav-item" href="https://kivaohio.stoneprofitsweb.com/">Ohio</a>
              </div>
            </div>
          </div>
          <div className="ml-3 mr-3 hide-class">
            <a href="/inventory">COLLECTION</a>
          </div>
          <div className="ml-3 mr-3 hide-class">
            <a href="/experience">EXPERIENCE</a>
          </div>
          <div className="ml-3 mr-3 hide-class">
            <a href="/sourcing">SOURCING</a>
          </div>
          <div className="ml-3 mr-3 hide-class">
            <a href="/partner-program">PARTNER PROGRAM</a>
          </div>
          <div className="ml-3 mr-3 hide-class">
            <a href="/contact">CONTACT</a>
          </div>
        </div>
      </div>
      <MobileNavBar />

      <style>{`
        .navigation {
          position: absolute;
          align-items: center;
          display: flex;
          flex-direction: column;
          font-family: "Nexa";
          font-size: 11px;
          justify-content: center;
          left: 0;
          letter-spacing: 3px;
          margin-left: auto;
          margin-right: auto;
          right: 0;
          text-align: center;
          top: 60px;
          width: 100%;
          z-index: 2;
        }

        .links {
          align-items: center;
          display: flex;
        }

        .links a {
          color: #fff;
          text-decoration: none;
        }

        .nav-link-dropdown {
          color: #fff !important;
          margin-top: -2px;
          font-size: 11px;
          letter-spacing: 3px;
          font-family: "Nexa";
        }

        .margin-logo {
          margin-bottom: 20px;
          margin-top: -20px;
          max-width: 160px;
        }

        .dropdown-toggle::after {
          display: none;
        }

        @media only screen and (max-width: 767px) and (min-width: 240px) {
          .hide-class {
            display: none;
          }

          .margin-logo {
            max-width: 120px;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default NavBar;
