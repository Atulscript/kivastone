import React, { useState } from 'react';

const MobileNavBar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="mob-nav">
      <button
        className={`btn btn-link ${visible ? '' : 'collapsed'}`}
        onClick={() => setVisible(!visible)}
        aria-expanded={visible}
      >
        <i className="fa fa-bars"></i>
      </button>
      {visible && (
        <div className="collapse-item show">
          <div className="row nav-box m-0">
            <div className="col-12 mb-2 mt-2 text-center border-nav"><a href="/">HOME</a></div>
            <div className="col-12 mb-2 mt-2 text-center border-nav">
              <div className="dropdown">
                <button
                  className="btn btn-link dropdown-toggle nav-link-dropdown"
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  LIVE INVENTORY
                </button>
                <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} style={{ display: dropdownOpen ? 'block' : 'none', position: 'relative', width: '100%' }}>
                  <a className="dropdown-item dropdown-nav-item" href="http://kivastonefl.stoneprofitsweb.com">Florida</a>
                  <a className="dropdown-item dropdown-nav-item" href="http://kivastone.stoneprofitsweb.com">Dallas</a>
                  <a className="dropdown-item dropdown-nav-item" href="http://kivastonech.stoneprofitsweb.com">Chicago</a>
                  <a className="dropdown-item dropdown-nav-item" href="https://kivaohio.stoneprofitsweb.com/">Ohio</a>
                </div>
              </div>
            </div>
            <div className="col-12 mb-2 mt-2 text-center border-nav"> <a href="/inventory">COLLECTION</a></div>
            <div className="col-12 mb-2 mt-2 text-center border-nav"><a href="/experience">EXPERIENCE</a></div>
            <div className="col-12 mb-2 mt-2 text-center border-nav"><a href="/sourcing">SOURCING</a></div>
            <div className="col-12 mb-2 mt-2 text-center border-nav"><a href="/partner-program">PARTNER PROGRAM</a></div>
            <div className="col-12 mb-2 mt-2 text-center border-nav"> <a href="/contact">CONTACT</a></div>
          </div>
        </div>
      )}
      <style>{`
        .mob-nav {
          display: none;
          position: absolute;
          margin-top: 40px;
          z-index: 4;
          right: 20px;
          top: 0;
        }

        .nav-link-dropdown .dropdown-toggle {
          font-size: 16px;
          color: white !important;
        }

        .collapse-item {
          margin-left: 0;
          position: absolute;
          right: 0;
          width: 250px;
        }

        .nav-box {
          background-color: rgba(0, 0, 0, 0.9);
          border-radius: 8px;
          box-shadow: 2px 2px 2px 2px solid grey;
        }

        .border-nav a {
          color: white;
          font-size: 14px;
          letter-spacing: 2px;
        }

        .btn-link {
          color: white !important;
          font-weight: 600;
          font-size: 24px;
        }

        @media only screen and (max-width: 767px) and (min-width: 240px) {
          .mob-nav {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileNavBar;
