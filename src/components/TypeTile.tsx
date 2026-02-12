import React from 'react';

interface TypeTileProps {
  tileName: string;
  imageUrl: string;
  url: string;
}

const TypeTile: React.FC<TypeTileProps> = ({ tileName, imageUrl, url }) => {
  const pageView = (page: string) => {
    window.location.href = `/${page}`;
  };

  return (
    <div className="" onClick={() => pageView(url)}>
      <div className="type-tile-box text-center">
        <div className="tile-name text-uppercase">{tileName}</div>
        <img className="tile-image" src={imageUrl.startsWith('http') ? imageUrl : (imageUrl.startsWith('/') ? imageUrl.substring(1) : imageUrl)} alt={tileName} />
      </div>
      <style>{`
        .type-tile-box {
          border: 1px;
          background-color: rgb(250, 249, 249);
          max-width: 200px;
          margin: 0 20px;
          cursor: pointer;
          position: relative;
          text-align: center;
          height: 240px;
          overflow: hidden;
        }

        .tile-name {
          top: 20px;
          font-size: 12px;
          font-family: Nexa;
          letter-spacing: 4px;
          position: absolute;
          text-align: center;
          margin: auto;
          left: 0;
          right: 0;
          z-index: 1;
          color: #000;
        }

        .tile-image {
          position: relative;
          margin-left: -30px;
          width: calc(100% + 60px);
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default TypeTile;
