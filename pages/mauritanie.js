import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Divider from '../components/Divider';
import { counter } from '@fortawesome/fontawesome-svg-core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Pagination, A11y } from 'swiper';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { fr } from '../assets/js/locales/fr';
import { en } from '../assets/js/locales/en';

const imageStyle = {
  width: '350px',
  height: '250px',
  border: '10px solid IndianRed',
  backgroundColor: 'white',
  counter: '100px'
};
const Slidedive = styled.div`
  position: relative;
  width: 800px;
  margin: auto;
  overflow: hidden;
`;
const SliderContainer = styled.div`
  position: relative;
  width: 1000px;
  margin: auto;
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SlideImage = styled.img`
  width: 70%;
  height: 400px;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const line = styled(Button)`
  border: none;
    height: 1px;
    background-color: red; /* Customize color */
    margin: 20px 0; /* Adjust margin as needed */
`;

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

const ImageSlider = () => {
  const images = [
    "/images/places/tou1.jpg",
    "/images/places/tou2.jpg",
    "/images/places/tou3.jpg",
    "/images/places/tou4.jpg",
    "/images/places/tou5.jpg"
  ];
  const navigateToExternalURL = () => {
    window.location.href = `https://mauritaniahorizons.com/`;
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const router = useRouter();
  const localeLink = router.locale === 'en' ? 'fr' : 'en';
  const t = router.locale === 'fr' ? fr : en;

  return (
    <div>
      <Head>
        <title>{t.mauritaniaTitle}</title>
        <link rel="icon" href="/images/artwork/06.jpg" />
      </Head>
      <div className="uk-form-controls uk-flex-center" style={{
        marginTop: '20px'
      }}>
        <button type="submit" className="uk-button uk-button-primary uk-width-small@m uk-margin-auto" onClick={navigateToExternalURL}>{t.buttonText}</button>
      </div>
      <Slidedive>
        <Link href="/" className="uk-navbar" locale={localeLink + router.pathname}>
          <img style={{height: '24px'}} src="/images/other/language.svg" alt="language" />
        </Link>
        <p className="uk-h4 uk-h1@m">{t.aboutMauritania}<span className="uk-text-gradient"></span></p>
      </Slidedive>

      <Divider />

      <SliderContainer>
        <Swiper
          // install Swiper modules
          modules={[Navigation, A11y, Pagination, EffectFade]}
          spaceBetween={32}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((image, index) => (
            <SwiperSlide className="uk-radius-xlarge design" key={index}>
              <div>
                <div className="uni-artwork uk-card uk-overflow-hidden">
                  <div className="uni-artwork-featured-image uk-panel uk-flex-middle uk-flex-center">
                    <div className="uk-panel uk-image-middle">
                      <img src={image} alt="" className="uk-radius-small uk-radius-medium@m" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>

      <Divider />

      <Slidedive>
        <p className="uk-text-xlarge@m">{t.languageAndPopulation}<span className="uk-text-gradient"></span></p>
        <p className="uk-text-xlarge@m">{t.languageDescription}</p>
        <Divider />
        <p className="uk-text-xlarge@m">{t.capital}<span className="uk-text-gradient"></span></p>
        <p className="uk-text-xlarge@m">{t.capitalDescription}</p>
        <Divider />
        <p className="uk-text-xlarge@m">{t.government}<span className="uk-text-gradient"></span></p>
        <p className="uk-text-xlarge@m">{t.governmentDescription}</p>
        <Divider />
        <p className="uk-text-xlarge@m">{t.religion}<span className="uk-text-gradient"></span></p>
        <p className="uk-text-xlarge@m">{t.religionDescription}</p>
        <Divider />
        <p className="uk-text-xlarge@m">{t.size}<span className="uk-text-gradient"></span></p>
        <p className="uk-text-xlarge@m">{t.sizeDescription}</p>
        <p className="uk-text-xlarge@m">{t.currencyInfo}<span className="uk-text-gradient"></span></p>
        <Divider />

        <h3 className="uk-text-xlarge@m">{t.ancientCities}<span className="uk-text-gradient"></span></h3>
        <hr className="custom-hr" />
        <p className="uk-text-xlarge@m">{t.chinguetti}<span className="uk-text-gradient"></span></p>
        <div style={imageStyle}>
          <img
            src="/images/places/chin.jpg"
            alt="Square with Border"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <p className="uk-text-xlarge@m">{t.chinguettiDescription}</p>
        <hr className="custom-hr" />
        <p className="uk-text-xlarge@m">{t.oualata}<span className="uk-text-gradient"></span></p>
        <div style={imageStyle}>
          <img
            src="/images/places/Oualat.jpg"
            alt="Square with Border"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <p className="uk-text-xlarge@m">{t.oualataDescription}</p>
        <hr className="custom-hr" />
        <p className="uk-text-xlarge@m">{t.tichitt}<span className="uk-text-gradient"></span></p>
        <div style={imageStyle}>
          <img
            src="/images/places/Tichit.jpg"
            alt="Square with Border"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <p className="uk-text-xlarge@m">{t.tichittDescription}</p>
        <hr className="custom-hr" />
        <p className="uk-text-xlarge@m">{t.tidjikja}<span className="uk-text-gradient"></span></p>
        <div style={imageStyle}>
          <img
            src="/images/places/Tidjikj.jpg"
            alt="Square with Border"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <p className="uk-text-xlarge@m">{t.tidjikjaDescription}</p>
        <hr className="custom-hr" />
        <p className="uk-text-xlarge@m">{t.ouadane}<span className="uk-text-gradient"></span></p>
        <div style={imageStyle}>
          <img
            src="/images/places/Ouadane.jpg"
            alt="Square with Border"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <p className="uk-text-xlarge@m">{t.ouadaneDescription}</p>

        <Divider />
      </Slidedive>
    </div>
);
}

export default ImageSlider;