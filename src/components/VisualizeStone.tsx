import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VisualizeStone: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const toUrl = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="click-feature container-fluid" onClick={() => toUrl('https://visualizer.kivastone.com')}>
      <div
        className="visualize-text mt-5"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="800"
        data-aos-once="true"
      >
        <div>VISUALIZE</div>
        <div>YOUR</div>
        <div>STONE</div>
      </div>
      <img className="visualizer-image" src="3dvisualizer.png" alt="3D Visualizer" />
      <button className="btn know-more-button">ENTER VISUALIZER</button>
      <div className="row">
        <div className="col-lg-6 col-md-3 hide-mobile"></div>
        <div className="know-more col-lg-6 col-md-9 hide-mobile">
          ENTER 3D VISUALIZER
          <span className="dot-one"></span>
          <div className="horizontle-line"></div>
        </div>
      </div>
      <style>{`
        .visualize-text {
          font-size: 40px;
          letter-spacing: 38px;
          font-weight: 500;
          position: absolute;
          font-family: NexaBold;
          padding-left: 40px;
          color: #000;
          line-height: 1.2;
          z-index: 2;
        }

        .know-more-button {
          display: none;
        }

        .hide-mobile {
          display: block;
        }

        .know-more {
          height: 30px;
          padding-left: 60px;
          letter-spacing: 7px;
          background-color: #4d4d4d;
          width: 100%;
          color: white;
          margin-top: -60px;
          position: relative;
          font-weight: bold;
          font-size: 14px;
          border-left: 5px solid #fff;
          font-family: NexaBold;
          display: flex;
          align-items: center;
          padding-right: 0;
        }

        .visualizer-image {
          width: 980px;
          margin-left: 200px;
        }

        .dot-one {
          height: 10px;
          width: 10px;
          background-color: rgb(255, 255, 255);
          border-radius: 50%;
          display: inline-block;
          margin-left: 36px;
          position: relative;
        }

        .horizontle-line {
          border-bottom: 1px solid rgb(243, 240, 240);
          flex-grow: 1;
          margin-left: 20px;
          margin-right: 0;
          position: relative;
          top: 0px;
        }

        /* Adjusting line to match original margin-left logic */
        .horizontle-line {
           margin-left: 346px;
           position: absolute;
           right: 0;
           left: 0;
           bottom: 14px;
        }

        .click-feature {
          cursor: pointer;
          padding-left: 120px;
          position: relative;
        }

        @media only screen and (max-width: 1399px) and (min-width: 1280px) {
          .visualizer-image {
            width: 860px;
            margin-left: 0px;
          }
          .know-more {
            width: 60%;
          }
          .visualize-text {
            margin-left: -60px;
          }
          .horizontle-line {
             margin-left: 346px;
          }
        }

        @media only screen and (max-width: 767px) {
          .visualizer-image {
            margin-left: -127%;
            height: 100%;
          }
          .click-feature {
            margin-bottom: -160px;
            text-align: center;
            width: 280px;
            overflow: hidden;
            padding-left: 0;
          }
          .visualize-text {
            margin-left: -70px;
            font-size: 22px;
            letter-spacing: 22px;
            margin-top: -50px !important;
            text-align: left;
          }
          .hide-mobile {
            display: none;
          }
          .know-more-button {
            display: block;
            margin: -120px auto 0;
            width: 226px;
            background: #000;
            color: #fff;
            border: 1px solid #fff;
            font-size: 7px;
            letter-spacing: 5px;
            padding: 10px;
            position: absolute;
            left: 0;
            right: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default VisualizeStone;
