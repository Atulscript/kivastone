import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface OurCollectionProps {
  collectionText: string;
  imageUrl1: string;
  imageUrl2: string;
  url: string;
}

const OurCollection: React.FC<OurCollectionProps> = ({ collectionText, imageUrl1, imageUrl2, url }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const pageView = (page: string) => {
    window.location.href = page;
  };

  const getImgUrl = (url: string) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    if (url.startsWith('/')) return url.substring(1);
    return url;
  };

  return (
    <div className="mb-5 click-style" onClick={() => pageView(url)}>
      <div className="collection-text text-uppercase">{collectionText}</div>
      <div className="collection-box">
        <div className={`color-box ${url === 'levante' ? 'lav' : 'imp'}`}>
          <img
            className="logo"
            src={getImgUrl(imageUrl1)}
            alt="Logo"
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="true"
          />
          <div className="line"></div>
        </div>
        <div className="collection-stone-second">
          <img className="" src={getImgUrl(imageUrl2)} alt="Collection" />
          <div className={`know-more-bar ${url === 'levante' ? 'know-more-dark-bar' : 'know-more-blue-bar'}`}>
            <span className="know-more-text">KNOW MORE</span>
            <div className="horizontal-line-col">
              <span className="dot-white-col"></span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .click-style {
          cursor: pointer;
          margin-bottom: 3rem;
        }
        .collection-text {
          margin-left: 100px;
          font-family: "Nexa";
          letter-spacing: 10px;
          margin-bottom: 12px;
          color: #000;
          font-size: 18px;
          position: relative;
          z-index: 5;
          line-height: 1.5;
        }

        .collection-box {
          display: flex;
          flex: 1 1;
        }

        .line {
          position: absolute;
          display: none;
          width: 100%;
          height: 4px;
          bottom: 10px;
          background-image: linear-gradient(to right, #e0b87b, #8a643d);
        }

        .collection-stone-second {
          position: relative;
          width: 100%;
        }

        .collection-stone-second img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .color-box {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-height: 500px;
        }

        .lav { background-color: #27150a; }
        .imp { background-color: #101c32; }

        .color-box img {
          width: 50%;
        }

        .know-more-bar {
          position: absolute;
          bottom: 30px;
          right: 0;
          display: flex;
          align-items: center;
          height: 38px;
          width: calc(100% - 100px);
          color: #fff;
          padding-left: 60px;
          z-index: 2;
        }

        .know-more-dark-bar { background-color: #27150a; }
        .know-more-blue-bar { background-color: #101c32; }

        .know-more-text {
          font-family: "NexaLight";
          letter-spacing: 4px;
          font-size: 13px;
          font-weight: bold;
        }

        .horizontal-line-col {
          flex-grow: 1;
          height: 1px;
          margin-left: 40px;
          background-color: #fff;
          position: relative;
        }

        .dot-white-col {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -4px;
          background-color: #fff;
          border-radius: 50%;
          width: 8px;
          height: 8px;
        }

        @media only screen and (max-width: 1399px) {
           .color-box { min-height: 400px; }
           .know-more-bar { bottom: 20px; width: calc(100% - 60px); padding-left: 30px; }
        }

        @media only screen and (max-width: 780px) {
          .collection-box {
            flex-direction: column;
          }
          .color-box {
            min-height: 320px;
          }
          .know-more-bar {
            background-color: #e0b87b;
            top: 50%;
            transform: translateY(-50%);
            width: 240px;
            padding: 5px 20px;
            margin: auto;
            left: 0;
            right: 0;
            text-align: center;
            height: auto;
            bottom: auto;
            justify-content: center;
            color: #27150a;
          }
          .know-more-text {
             color: #27150a;
          }
          .horizontal-line-col {
            display: none;
          }
          .collection-text {
            margin-left: 0;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default OurCollection;
