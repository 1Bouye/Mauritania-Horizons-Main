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

const aboutUs = () => {
  const images = [
    "/images/places/tou1.jpg",
    "/images/places/tou2.jpg",
    "/images/places/tou3.jpg",
    "/images/places/tou4.jpg",
    "/images/places/tou5.jpg"
  ];
  const navigateToExternalURL = () => {
    window.location.href = 'https://mauritaniahorizons.com/';
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
      <div className="uk-form-controls uk-flex-center" style={{
        marginTop: '20px'
      }}>
        <button type="submit" className="uk-button uk-button-primary uk-width-small@m uk-margin-auto" onClick={navigateToExternalURL}>{t.buttonText}</button>
      </div>
      <Slidedive>
          <Link href="/" className="uk-navbar" locale={localeLink + router.pathname}>
            <img style={{height: '24px'}} src="/images/other/language.svg" alt="language" />
          </Link>
        <p className="uk-h4 uk-h1@m">{t.aboutUsTitle}<span className="uk-text-gradient"></span></p>
        <div>
          <div className="uk-panel uk-image-smalle uk-overflow-hidden uk-radius uk-radius-large@m" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;">
            <img src="https://mauritaniahorizons.com/images/mome.jpg" alt="890 " />
          </div>
        </div>

        <Divider />
        <Head>
          <title>Mauritania horizons</title>
          <link rel="icon" href="/images/artwork/06.jpg" />
        </Head>
        <p className="heading uk-h3 uk-h3@m ">{t.aboutUsDescription1}<span className="uk-text-gradient"></span></p>
        <p className="uk-text-xlarge@m">
          {t.aboutUsDescription2}
        </p>
        <p className="uk-text-xlarge@m">
          {t.aboutUsDescription3}
        </p>
        <Divider />
        <p className="heading uk-h3 uk-h3@m ">{t.aboutUsMissionTitle}<span className="uk-text-gradient"></span></p>
        <p className="uk-text-xlarge@m">{t.aboutUsMissionDescription1}</p>
        <p className="uk-text-xlarge@m">{t.aboutUsMissionDescription2}</p>
        <Divider />
        <p className="heading uk-h3 uk-h3@m ">{t.aboutUsTeamTitle}<span className="uk-text-gradient"></span></p>
        <p className="uk-text-xlarge@m">{t.aboutUsTeamDescription1}</p>
        <p className="uk-text-xlarge@m">{t.aboutUsTeamDescription2}</p>
        <Divider />
        <p className="heading uk-h3 uk-h3@m ">{t.aboutUsDirectorsTitle}: <span className="uk-text-gradient"></span></p>
        <p className="uk-text-xlarge@m">{t.aboutUsDirectorsDescription}</p>
        <Divider />
        <p className="heading uk-h3 uk-h3@m ">{t.aboutUsGuidesTitle}<span className="uk-text-gradient"></span></p>
        <p className="uk-text-xlarge@m">{t.processOneDescription}</p>
        <Divider />
        <p className="heading uk-h3 uk-h3@m ">{t.aboutUsCooksTitle}</p>
        <p className="uk-text-xlarge@m">{t.aboutUsCooksDescription}</p>
        <Divider />
        <p className="heading uk-h3 uk-h3@m ">{t.aboutUsTranslatorsTitle}</p>
        <p className="uk-text-xlarge@m">{t.aboutUsTranslatorsDescription}</p>
        <Divider />
        <p className="heading uk-h3 uk-h3@m ">{t.aboutUsDriversTitle}</p>
        <p className="uk-text-xlarge@m">{t.aboutUsDriversDescription}</p>
        <Divider />
        <p className="heading uk-h3 uk-h3@m ">
        {t.aboutUsValuesTitle}</p>
        <p className="uk-text-xlarge@m">
          1. {t.aboutUsValue1Title} : {t.aboutUsValue1Description}
          </p>

        <p className="uk-text-xlarge@m">
          2. {t.aboutUsValue2Title} : {t.aboutUsValue2Description}</p>

        <p className="uk-text-xlarge@m">
          3. {t.aboutUsValue3Title} : {t.aboutUsValue3Description}</p>

        <p className="uk-text-xlarge@m">
          4. {t.aboutUsValue4Title} : {t.aboutUsValue4Description}</p>
        <Divider />

    <p className="heading uk-h2 uk-h2@m ">{t.aboutUsWhyChooseUsTitle} <span className="uk-text-gradient"></span></p>

        <p className="heading uk-h3 uk-h3@m ">{t.aboutUsLocalExpertiseTitle} : <span className="uk-text-gradient"></span></p>
        <p className="uk-text-xlarge@m">
        {t.aboutUsLocalExpertiseDescription}</p>

        <p className="heading uk-h3 uk-h3@m ">{t.aboutUsCustomizationTitle} : <span className="uk-text-gradient"></span></p>
        <p className="uk-text-xlarge@m">
        {t.aboutUsCustomizationDescription}</p>

        <p className="heading uk-h3 uk-h3@m ">{t.aboutUsCommitmentTitle} : <span className="uk-text-gradient"></span></p>
        <p className="uk-text-xlarge@m">
        {t.aboutUsCommitmentDescription}</p>
        <Divider />
        <div className="uk-panel uk-width-expand">
          <h3 className="uk-h5 uk-h4@m">
            {t.aboutUsAdventureTitle} <br className="uk-visible@m" />

          </h3>
          <p> {t.aboutUsAdventureDescription}</p>
        </div>
      </Slidedive>
    </div>
  );
}

export default aboutUs;