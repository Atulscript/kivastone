import React from 'react';

interface TileProps {
  id?: string | number;
  tileName: string;
  tileCode: string;
  imageUrl: string;
  category_code: string;
  className?: string;
}

const Tile: React.FC<TileProps> = ({ tileName, tileCode, imageUrl, category_code, className }) => {
  const goToInventoryDetail = (path: string) => {
    window.location.href = `/inventory/${path}`;
  };

  const getImgUrl = (url: string) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    if (url.startsWith('/')) return url.substring(1);
    return url;
  };

  return (
    <div
      className={`tile-box text-center ${className || ''}`}
      data-aos="zoom-in"
      data-aos-offset="0"
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos-once="true"
      onClick={() => goToInventoryDetail(`${tileName}/${category_code}`)}
    >
      <div className="col-12 tile-name text-uppercase text-center">
        {tileName}
      </div>
      <div className="col-12 tile-code text-uppercase text-center">
        Item Code {tileCode}
      </div>
      <span className="image-top">
        <img className="tile-image" src={imageUrl.startsWith('http') ? imageUrl : (imageUrl.startsWith('/') ? imageUrl.substring(1) : imageUrl)} alt={tileName} />
      </span>
      <style>{`
        .tile-box {
          width: 260px;
          height: 300px;
          background-color: #f6f6f6;
          padding-top: 25px;
          margin: auto;
          cursor: pointer;
          position: relative;
          margin-bottom: 20px;
          word-wrap: break-word;
          transition: transform 0.4s ease-in-out;
        }

        .tile-box:hover {
          transform: scale(1.1);
        }

        .tile-image {
          width: 122%;
          margin: auto;
          margin-left: -10%;
        }

        .tile-name {
          font-size: 13px;
          letter-spacing: 6px;
          font-weight: bold;
          font-family: Poppins;
          color: #000;
        }

        .tile-code {
          font-size: 8px;
          font-weight: bold;
          color: #acacac;
        }

        .image-top {
          width: calc(100% + 120px);
          margin-left: -60px;
          overflow: hidden;
          display: inline-block;
          position: absolute;
          bottom: -20px;
          left: 0;
        }
      `}</style>
    </div>
  );
};

export default Tile;
