import Link from "next/link"
import { useRouter } from 'next/router';
import { fr } from '../../assets/js/locales/fr';
import { en } from '../../assets/js/locales/en';

const HeroBannerFour = () => {
    const router = useRouter();
    const t = router.locale === 'fr' ? fr : en;

    return (
        <div id="uni_hero" className="uni-hero uni-hero-4 uk-section-2xlarge uk-section-xlarge@m uk-padding-remove-bottom@m uk-panel">
            <div className="uk-position-top uk-position-z-index-negative uk-overflow-hidden uk-blend-overlay" data-uk-height-viewport="">
                <img className="uk-position-top-left uk-position-fixed uk-blur-large" style={{ left: "-4%", top: "-4%" }} width="500" src="images/gradient-circle.svg" alt="Circle" />
                <img className="uk-position-bottom-right uk-position-fixed uk-blur-large" style={{ right: "-4%", bottom: "-4%" }} width="500" src="images/gradient-circle.svg" alt="Circle" />
            </div>
            <div className="uk-position-top uk-position-z-index-negative uk-opacity-80" data-uk-height-viewport="">
                <div className="uk-position-cover uk-background-cover 
                dark:uk-hidden home-background-image"
                    //  style={{
                    //         backgroundImage: "url('/images/main.jpeg')"
                    //     }} 

                    data-uk-img></div>
            </div>
            <div className="uk-panel uk-position-z-index">
                <div className="uk-container">
                    <div className="uk-panel">
                        <div className="uk-grid uk-grid-2xlarge uk-flex-middle uk-flex-between" data-uk-grid data-uk-height-viewport="offset-top: true;">
                            <div className="uk-width-6-12@m">
                                <div className="uk-panel uk-position-z-index uk-text-center uk-text-left@m" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                                    <h3 className="uk-h2 uk-heading-d3@m uk-margin-small uk-margin@m">{t.bannerFourTitle}</h3>
                                    <p className="uk-text-xlarge uk-width-xlarge@m">
                                    {t.bannerFourDescription1} <br className="uk-visible@m" />
                                        {t.bannerFourDescription2}
                                    </p>

                                    <p className="uk-text-xlarge uk-width-xlarge@m">
                                        {t.bannerFourDescription3}
                                    </p>


                                </div>
                            </div>
                            <div className="uk-width-6-12@m uk-flex-center">
                                <div className="uk-panel" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;">
                                    <img className="uk-position-top-right uk-text-primary-40 uni-animation-spin" width="64" src="images/objects/star-01.svg" alt="object" style={{ top: "24%", right: "24%" }} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" />
                                    <img className="uk-position-top-right uk-text-black-20 dark:uk-text-white-40" width="80" src="images/objects/star-01.svg" alt="object" style={{ top: "0%", right: "0%" }} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" />
                                    <img className="uk-position-bottom-left uk-text-secondary-40 uni-animation-spin" width="64" src="images/objects/star-01.svg" alt="object" style={{ bottom: "24%", left: "10%" }} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" />
                                    <div className="uk-grid uk-grid-xsmall uk-child-width-1-2" data-uk-grid="masonry: true;">
                                        <div>
                                            <div className="uni-item uk-card" style={{ transform: "rotate(10.84deg)" }}>
                                                <div className="uni-item-featured-image uk-panel uk-flex-middle uk-flex-center">
                                                    <div className="uk-cover uk-position-cover uk-background-darkgrey dark:uk-background-white uk-opacity-10 uk-radius uk-radius-2xlarge@m" style={{ transform: "translate(24px, 24px)" }} data-uk-cover></div>
                                                    <div className="uk-panel uk-image-middle uk-overflow-hidden uk-radius uk-radius-xlarge@m uk-box-shadow-small">
                                                       
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                        <canvas width="400" height="400"></canvas>
                                        </div>
                                        <div>
                                            <canvas width="400" height="400"></canvas>
                                        </div>
                                        <div className="uk-margin-large-top">
                                            <div className="uni-item uk-card" style={{ transform: "rotate(-10.25deg)" }}>
                                                <div className="uni-item-featured-image uk-panel uk-flex-middle uk-flex-center">
                                                    <div className="uk-cover uk-position-cover uk-border uk-radius uk-radius-2xlarge@m" style={{ transform: "translate(24px, 24px)" }} data-uk-cover></div>
                                                    <div className="uk-panel uk-image-middle uk-overflow-hidden uk-radius uk-radius-xlarge@m uk-box-shadow-small">
                                                        <canvas width="400" height="400"></canvas>
                                                        <img src="images/artwork/logo.jpg" alt="Artwork" className="uk-cover" data-uk-cover />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroBannerFour