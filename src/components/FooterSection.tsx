import React from 'react';

const FooterSection: React.FC = () => {
    const locations = [
        { name: 'Texas', url: 'http://kivastone.stoneprofitsweb.com/' },
        { name: 'Florida', url: 'http://kivastonefl.stoneprofitsweb.com/' },
        { name: 'Illinois', url: 'http://kivastonech.stoneprofitsweb.com/' },
        { name: 'Ohio', url: 'https://kivaohio.stoneprofitsweb.com/' },
    ];
    const info = ["About", "Stories", "Blog", "Contact", "Privacy-Policy", "Terms-and-Conditions"];

    const pageView = (page: string) => {
        window.location.href = `/${page === 'about' ? 'experience' : page.toLowerCase()}`;
    };

    const toUrl = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <div className="footer-box mt-5">
            <div className="footer-head">
                <img src="/kiva-white-logo-v2.png" width="120" alt="Kiva Logo" />
                <img className="country-logo" src="/kiva-white-country-logo-v2.png" width="100" alt="Country Logo" />
            </div>
            <div className="footer-list mb-5">
                {info.map((pageName) => (
                    <div key={pageName}>
                        <div className="mt-5 text-uppercase footer-text footer-text-right" onClick={() => pageView(pageName)}>
                            {pageName}
                        </div>
                    </div>
                ))}
            </div>

            <div className="locations-wrapper">
                {locations.map((loc) => (
                    <div key={loc.name} className="mb-4 footer-text mobile-text" onClick={() => toUrl(loc.url)}>
                        {loc.name}
                    </div>
                ))}
            </div>

            <div className="text-right footer-bottom mobile-icon">
                <a target="_blank" href="https://www.linkedin.com/company/kiva-stone/" rel="noreferrer">
                    <i className="fab fa-linkedin mr-3"></i>
                </a>
                <a target="_blank" href="https://www.facebook.com/kivastonedallas" rel="noreferrer">
                    <i className="fab fa-facebook-f mr-3"></i>
                </a>
                <a target="_blank" href="https://www.instagram.com/kivastonedallas/" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
            <style>{`
        .footer-head {
          display: flex;
          justify-content: space-between;
        }

        .footer-box {
          background-color: rgb(47, 47, 47);
          padding: 60px 80px 20px;
          position: relative;
          width: 100%;
          color: #e2e2e2;
        }

        .footer-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .footer-bottom {
          font-size: 12px;
          padding-bottom: 10px;
        }

        .footer-text {
          font-size: 12px;
          font-family: Nexa;
          color: #e2e2e2;
          letter-spacing: 5px;
          font-weight: lighter;
          cursor: pointer;
          padding-bottom: 10px;
          margin-right: 32px;
        }

        .locations-wrapper {
          display: flex;
          gap: 20px;
        }

        @media only screen and (max-width: 767px) {
          .footer-box {
            text-align: center;
            padding: 60px 20px 20px;
          }
          .footer-list, .locations-wrapper {
            justify-content: center;
          }
          .country-logo { display: none; }
          .footer-bottom { text-align: center; }
        }
      `}</style>
        </div>
    );
};

export default FooterSection;
