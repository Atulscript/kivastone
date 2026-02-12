import React from 'react';

interface InspirationSectionProps {
  firstText: string;
  mainText: string;
  isHome?: boolean;
}

const InspirationSection: React.FC<InspirationSectionProps> = ({ firstText, mainText, isHome }) => {
  const backImgs = [
    "https://i.ibb.co/m0D51xQ/k.png",
    "https://i.ibb.co/M19h238/l.png",
    "https://i.ibb.co/ZX7RdJG/m.png",
    "https://i.ibb.co/fNfCLnS/o.png",
    "https://i.ibb.co/P1TqNPy/p.png",
    "https://i.ibb.co/F0MCdyw/q.png",
  ];

  return (
    <div className="inspiration-wrapper">
      <div className="text-box">
        <div
          className="text-uppercase find-text"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-once="true"
        >
          {firstText}
        </div>
        <div
          className="text-uppercase space-text"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-once="true"
        >
          {mainText}
        </div>
        <div
          className="decription-text"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-once="true"
        >
          Find your inspiration with Kiva stone. We have the perfect collection
          of ideas and inspiration from all the spaces that we have transformed
          over the years. Transform your next dream home with Kiva
        </div>
      </div>

      {isHome ? (
        <div className="section image-margin-home">
          {backImgs.map((img, index) => (
            <div key={index} className="image-margin">
              <img
                className="section-image"
                src={img}
                alt="Inspiration"
                data-aos="zoom-in"
                data-aos-offset="400"
                data-aos-delay="200"
                data-aos-duration="800"
                data-aos-once="true"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="section">
          {['/p5.png', '/p2.png', '/p10.png', '/partner/retailor.jpg', '/p6.png', '/p7.png'].map((img, index) => (
            <div key={index} className="image-margin">
              <img
                className="section-image"
                src={img}
                alt="Inspiration"
                data-aos="zoom-in"
                data-aos-offset="400"
                data-aos-delay="200"
                data-aos-duration="800"
                data-aos-once="true"
              />
            </div>
          ))}
        </div>
      )}

      <div
        className="decription-text-mobile"
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="400"
        data-aos-duration="800"
        data-aos-once="true"
      >
        Find your inspiration with Kiva stone. We have the perfect collection of
        ideas and inspiration from all the spaces that we have transformed over
        the years. Transform your next dream home with Kiva
      </div>

      <style>{`
        .inspiration-wrapper {
          position: relative;
        }

        .find-text {
          text-align: left;
          letter-spacing: 12px;
          font-size: 18px;
          font-family: Nexa;
          color: rgb(180, 180, 180);
        }

        .text-box {
          position: absolute;
          z-index: 1;
          margin-left: 120px;
          margin-top: -123px;
        }

        .space-text {
          font-size: 160px;
          font-family: Madesaonara;
          line-height: 160px;
          color: #000;
        }

        .decription-text,
        .decription-text-mobile {
          font-family: NexaBold;
          font-size: 15px;
          text-align: left;
          margin-top: 50px;
          width: 420px;
          word-wrap: break-word;
          color: #000;
        }

        .decription-text-mobile {
          margin-left: 122px;
          display: none;
          max-width: 320px;
          width: 100%;
        }

        .section-image {
          width: 100%;
        }

        .section {
          display: grid;
          column-gap: 15px;
          row-gap: 15px;
          grid-template-columns: auto auto auto;
          position: relative;
          margin-top: 220px;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }

        @media only screen and (max-width: 1280px) {
          .space-text {
            font-size: 120px;
            line-height: 120px;
          }

          .text-box {
            margin-top: -100px;
          }

          .decription-text-mobile {
            margin-left: 122px;
          }
        }

        @media only screen and (max-width: 640px) {
          .space-text {
            font-size: 80px;
            line-height: 80px;
          }

          .decription-text {
            display: none;
          }

          .decription-text-mobile {
            display: block;
          }

          .section {
            grid-template-columns: auto;
            margin-top: 140px;
          }

          .text-box {
            margin-left: 40px;
            margin-top: -48px;
          }

          .decription-text-mobile {
            margin-left: 0;
            padding: 0 20px;
            max-width: 540px;
          }

          .find-text {
            font-size: 8px;
          }

          .image-margin-home {
            grid-template-columns: auto auto;
          }
        }
      `}</style>
    </div>
  );
};

export default InspirationSection;
