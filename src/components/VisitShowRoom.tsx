import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VisitShowRoom: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container-fluid visit">
      <div className="row">
        <div className="visit-showroom">
          <div
            className="visit-our-text text-center"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            VISIT OUR
          </div>
          <div
            className="showroom-text text-center"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            SHOWROOM
          </div>
        </div>
        <div className="image-showroom-wrapper">
          <img className="image-showroom" src="/showroom.png" alt="Showroom" />
        </div>
      </div>
      <style>{`
        .visit {
          position: relative;
          z-index: 1;
        }
        .visit-showroom {
          width: 100%;
          height: 500px;
          background-color: rgb(47, 47, 47);
          color: white;
          margin-top: 150px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 80px;
          position: relative;
        }

        .image-showroom-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        .image-showroom {
          margin-top: -300px; /* Adjusted to balance overlap and text visibility */
          width: 1100px;
          position: relative;
          z-index: 1;
          display: block;
        }

        .showroom-text {
          font-size: 220px;
          line-height: 1;
          margin-top: 20px; /* Added positive margin to create distance from VISIT OUR */
          font-family: Madesaonara;
          letter-spacing: 5px;
          position: relative;
          z-index: 10;
        }

        .visit-our-text {
          font-size: 22px;
          font-family: NexaLight;
          letter-spacing: 12px;
          width: 100%;
          display: block;
          position: relative;
          z-index: 11;
          margin-bottom: 20px; /* Added additional distance */
        }

        @media only screen and (max-width: 1399px) and (min-width: 1280px) {
          .image-showroom { width: 900px; }
          .showroom-text { font-size: 190px; }
        }

        @media only screen and (max-width: 1023px) and (min-width: 768px) {
          .image-showroom { margin-top: -180px; width: 500px; }
          .showroom-text { font-size: 90px; margin-top: 10px; }
          .visit-showroom { height: 300px; padding-top: 40px; }
          .visit-our-text { font-size: 14px; margin-bottom: 10px; }
        }

        @media only screen and (max-width: 767px) {
          .image-showroom { margin-top: -180px; width: 93.6%; height: auto; margin-bottom: 20px; }
          .showroom-text { font-size: 55px; margin-top: 5px; }
          .visit-our-text { font-size: 8px; margin-bottom: 5px; }
          .visit-showroom { height: 300px; padding-top: 70px; }
        }
      `}</style>
    </div>
  );
};

export default VisitShowRoom;
