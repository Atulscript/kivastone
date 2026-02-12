import React, { useEffect } from 'react';
import Slider from 'react-slick';
import NavBar from './components/NavBar';
import TypeTile from './components/TypeTile';
import InspirationSection from './components/InspirationSection';
import Tile from './components/Tile';
import OurCollection from './components/OurCollection';
import VisualizeStone from './components/VisualizeStone';
import VisitShowRoom from './components/VisitShowRoom';
import FooterSection from './components/FooterSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    dotsClass: "slick-dots slickdots",
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 5 } },
      { breakpoint: 1160, settings: { slidesToShow: 4 } },
      { breakpoint: 930, settings: { slidesToShow: 3 } },
      { breakpoint: 680, settings: { slidesToShow: 2 } },
    ],
  };

  const featuredListFirstRow = [
    { title: "Blue Deep", item_code: "#ABC1275", category_code: "QUARTZITE", slab_images: "bluedeep.png" },
    { title: "Venatino", item_code: "#34567", category_code: "QUARTZ", slab_images: "venatino.png" },
    { title: "Calacatta Michelangelo", item_code: "#34569", category_code: "PORCELAIN", slab_images: "Michelangelo.png" },
  ];

  const featuredListSecondRow = [
    { title: "Explosion", item_code: "#34511", category_code: "QUARTZITE", slab_images: "explosion.png" },
    { title: "Pompeii", item_code: "#34522", category_code: "PORCELAIN", slab_images: "https://i.ibb.co/yy2skRp/5.png" },
    { title: "Calacatta ORO", item_code: "#23410", category_code: "PORCELAIN", slab_images: "https://i.ibb.co/ChGG9Gg/6.png" },
  ];

  return (
    <div className="x-hidden">
      <div className="header-wrapper">
        <NavBar />
        <img className="header-shadow" src="sha.png" alt="Shadow" />

        <div className="scroll-text">SCROLL</div>
        <div className="scroll-line-white"></div>

        <div className="video-container video-desktop">
          <iframe
            src="https://www.youtube.com/embed/o3m0qvFAfd4?playlist=o3m0qvFAfd4&modestbranding=1&autohide=1&autoplay=1&controls=0&showinfo=0&mute=1&loop=1&rel=0"
            allowFullScreen
            title="Desktop Background Video"
          ></iframe>
        </div>
        <div className="video-container video-mobile">
          <iframe
            src="https://www.youtube.com/embed/ULR3rxkdxyY?playlist=ULR3rxkdxyY&modestbranding=1&autohide=1&autoplay=1&controls=0&showinfo=0&mute=1&loop=1&rel=0"
            allowFullScreen
            title="Mobile Background Video"
          ></iframe>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="scroll-line-gray"></div>
        <span className="dot dot-one-top"></span>

        <div className="carousel-wrapper" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800" data-aos-once="true">
          <Slider {...settings}>
            <TypeTile tileName="Quartz" imageUrl="https://i.ibb.co/4K4jf1W/f.png" url="levante" />
            <TypeTile tileName="Porcelain" imageUrl="https://i.ibb.co/TMQYXRD/b.png" url="imperia" />
            <TypeTile tileName="Semi Precious" imageUrl="https://i.ibb.co/DtWN22R/a.png" url="inventory/semi-precious" />
            <TypeTile tileName="Granites & Dolomites" imageUrl="https://i.ibb.co/pQvWM5Y/c.png" url="inventory/granite-dolomites" />
            <TypeTile tileName="Quartzite" imageUrl="quartzite.png" url="inventory/quartzite" />
            <TypeTile tileName="Marble" imageUrl="https://i.ibb.co/dsvh9jn/e.png" url="inventory/marble" />
          </Slider>
        </div>

        <div className="inspiration mt-4">
          <InspirationSection isHome={true} mainText="Space" firstText="Find your" />
        </div>

        <span className="dot dot-two-top"></span>

        <div className="container-fluid">
          <div className="collection-container mt-5 mb-5">
            <div className="collection-title">
              <div className="featured" data-aos="fade-up" data-aos-delay="0" data-aos-duration="800" data-aos-once="true">FEATURED</div>
              <div className="collection" data-aos="fade-up" data-aos-delay="0" data-aos-duration="800" data-aos-once="true">COLLECTION</div>
            </div>

            <div className="collection-list desktop">
              {featuredListFirstRow.map((tile, i) => (
                <Tile key={`r1-${i}`} tileCode={tile.item_code} category_code={tile.category_code} tileName={tile.title} imageUrl={tile.slab_images} />
              ))}
            </div>
            <div className="collection-list desktop">
              {featuredListSecondRow.map((tile, i) => (
                <Tile key={`r2-${i}`} tileCode={tile.item_code} category_code={tile.category_code} tileName={tile.title} imageUrl={tile.slab_images} />
              ))}
            </div>

            <div className="collection-list mobile">
              <Tile tileCode="#ABC1275" tileName="Blue Deep" imageUrl="bluedeep.png" category_code="QUARTZITE" />
              <Tile tileCode="#34567" tileName="Venatino" imageUrl="venatino.png" category_code="QUARTZ" />
              <Tile tileCode="#34569" tileName="Calacatta Michelangelo" imageUrl="Michelangelo.png" category_code="PORCELAIN" className="uneven" />
            </div>
          </div>
        </div>

        <OurCollection collectionText="Our signature quartz collection" imageUrl1="l-logo.png" imageUrl2="pexel.jpg" url="levante" />
        <OurCollection collectionText="Our signature collection" imageUrl1="i-logo.png" imageUrl2="imperia-1.png" url="imperia" />

        <span className="dot dot-three-top"></span>

        <div className="visualizatin-container">
          <VisualizeStone />
        </div>

        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true">
          <VisitShowRoom />
        </div>
      </div>

      <FooterSection />

      <style>{`
        .x-hidden { overflow-x: hidden; position: relative; }
        .header-shadow { position: absolute; width: 100%; top: 0; left: 0; z-index: 1; pointer-events: none; }
        
        .video-container {
          background-color: black;
          position: relative;
          padding-bottom: 56.25%;
          width: 300%;
          left: -100%;
          overflow: hidden;
          z-index: -1;
        }
        .video-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0; }
        .video-desktop { display: block; }
        .video-mobile { display: none; }

        .carousel-wrapper { margin-top: -180px; width: 100%; padding-left: 50px; }
        
        .collection-title { padding: 40px 60px; }
        .featured { color: #b4b4b4; letter-spacing: 12px; font-size: 18px; font-family: Nexa; margin-bottom: -60px; }
        .collection { font-size: 180px; font-family: Madesaonara; color: #0a0a0a; margin-bottom: 20px; }

        .collection-list { display: flex; gap: 40px; padding: 0 20px; justify-content: space-around; align-items: center; }
        .mobile { display: none; }

        @media only screen and (max-width: 767px) {
          .video-desktop { display: none; }
          .video-mobile { display: block; height: 100vh; }
          .carousel-wrapper { padding-left: 0; margin-top: -60px; }
          .collection-list { flex-direction: column; }
          .collection { font-size: 48px; }
          .featured { font-size: 8px; margin-bottom: -10px; }
          .desktop { display: none; }
          .mobile { display: flex; }
        }
      `}</style>
    </div>
  );
}

export default App;
