import Link from "next/link"
import Dvider from "../Divider"
import BannerThreeSlider from "../banners/BannerThreeSlider"

const HeroBannerThree = () => {
    return(
        <div id="uni_hero" className="uni-hero  uk-section-2xlarge uk-padding-large-bottom uk-padding-2xlarge-bottom@m uk-panel swiper-parent">
                <div className="uk-position-top uk-position-z-index-negative uk-overflow-hidden uk-blend-soft-light" data-uk-height-viewport="">
                    <img className="uk-position-top-left uk-position-fixed uk-blur-large" style={{left: "-4%", top: "-4%"}} width="500" src="images/gradient-circle.svg" alt="Circle" />
                    <img className="uk-position-bottom-right uk-position-fixed uk-blur-large" style={{right: "-4%", bottom: "-4%"}} width="500" src="images/gradient-circle.svg" alt="Circle" />
                </div>
                <div className="uk-position-top uk-position-z-index-negative uk-blend-hard-light" data-uk-height-viewport="">
                    <img className="uk-position-top uk-position-fixed uk-blur-large" style={{left: "25%", top: "-80%"}} width="700" src="images/gradient-circle.svg" alt="Circle" />
                </div>
                <div className="uk-panel uk-position-z-index">
                    <div className="uk-container">
                        <div className="uk-panel">
                            <div className="uk-grid uk-grid-2xlarge uk-flex-middle uk-flex-between" data-uk-grid data-uk-height-viewport="offset-top: true; offset-bottom: 20;">
                                <div className="uk-width-6-12@m">
                                    <div className="uk-panel uk-position-z-index uk-text-center" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                                        <img className="uk-position-top-left" width="44" src="images/objects/ethereum-01.png" alt="object" style={{top: "-10%", left: "50%"}} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" />
                                        <img className="uk-position-left" width="16" src="images/objects/circle-01.png" alt="object" style={{top: "16%", left: "-4%"}} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 420;" />
                                        <img className="uk-position-bottom-left" width="24" src="images/objects/circle-03.png" alt="object" style={{bottom: "-16%", left: "16%"}} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 440;" />
                                        <h2 className="uk-h2 uk-heading-d2@m uk-font-display uk-text-uppercase uk-margin-remove-top uk-margin-large-bottom@m">
                                            Became <br />
                                            a Player Now
                                        </h2>
                                        <Link href="#" className="uk-button uk-button-medium uk-button-large@m uk-button-gradient">
                                            <span>Whitelist now</span>
                                        </Link>
                                        <Dvider/>
                                        <div className="uk-grid uk-grid-small uk-grid-medium@m uk-flex-center uk-flex-between@m uk-child-width-1-3 uk-margin-medium-top uk-margin-large-top@m" data-uk-grid="">
                                            <div>
                                                <div className="uk-panel">
                                                    <h4 className="uk-h3 uk-h2@m uk-margin-2xsmall uk-font-display">2k+</h4>
                                                    <span className="uk-text-small uk-text-muted">Collection items</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="uk-panel">
                                                    <h4 className="uk-h3 uk-h2@m uk-margin-2xsmall uk-font-display">0.55</h4>
                                                    <span className="uk-text-small uk-text-muted">Floor price (eth)</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="uk-panel">
                                                    <h4 className="uk-h3 uk-h2@m uk-margin-2xsmall uk-font-display">2.5x</h4>
                                                    <span className="uk-text-small uk-text-muted">Estimated value</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-width-6-12@m uk-flex-center">
                                    <div className="uk-panel" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;">
                                        <img className="uk-position-left uk-text-primary" width="44" src="images/objects/bitcoin-01.png" alt="object" style={{top: "75%", left: "-20%"}} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 460;" />
                                        <img className="uk-position-right" width="28" src="images/objects/x.png" alt="object" style={{top: "16%", right: "-16%"}} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 480;" />
                                        <img className="uk-position-left uk-opacity-10" width="400" src="images/blob-dashed.svg" alt="Blog dashed" style={{top: "-6%", left: "-16%", fill: "transparent"}} />
                                        <img className="uk-position-bottom-right uk-opacity-10" width="400" src="images/blob-dashed.svg" alt="Blog dashed" style={{bottom: "4%", right: "-16%", fill: "transparent"}} />
                                        <div className="uk-panel uk-width-medium uk-margin-auto swiper-match">
                                            <BannerThreeSlider />
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
export default HeroBannerThree