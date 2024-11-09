const HeroBannerOne = () => {
    return (        
        <>
            <div id="uni_hero" className="uni-hero uk-section uk-section-xlarge uk-padding-remove-bottom uk-panel">
                <div className="uk-position-top uk-position-z-index-negative uk-overflow-hidden uk-blend-overlay" data-uk-height-viewport="">
                    <img className="uk-position-top-left uk-position-fixed uk-blur-large" style={{left: "-4%", top: "-4%"}} width="500" src="images/gradient-circle.svg" alt="Circle" />
                    <img className="uk-position-bottom-right uk-position-fixed uk-blur-large" style={{right: "-4%", bottom: "-4%"}} width="500" src="images/gradient-circle.svg" alt="Circle" />
                </div>
                <div className="uk-position-top uk-position-z-index-negative" data-uk-height-viewport="">
                    <div className="uk-position-cover uk-background-cover uk-opacity-10 dark:uk-hidden" style={{backgroundImage: 'url("images/gradient-01.png")'}} data-uk-img></div>
                    <div className="uk-position-cover uk-background-cover uk-opacity-20 uk-hidden dark:uk-visible" style={{backgroundImage: 'url("images/gradient-01.png")'}} data-uk-img></div>
                </div>
                <div className="uk-panel uk-position-z-index">
                    <div className="uk-container">
                        <div className="uk-panel">
                            <div className="uk-grid uk-grid-2xlarge uk-flex-middle uk-flex-between" data-uk-grid data-uk-height-viewport="offset-top: true; offset-bottom: 20;">
                                <div className="uk-width-5-12@m">
                                    <div className="uk-panel uk-position-z-index uk-text-center uk-text-left@m" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                                        <img className="uk-position-top-left" width="44" src="images/objects/ethereum-01.png" alt="object" style={{top: "-20%", left: "50%"}} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" />
                                        <img className="uk-position-left" width="16" src="images/objects/circle-01.png" alt="object" style={{top: "16%", left: "-16%"}} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 420;" />
                                        <img className="uk-position-bottom-left" width="24" src="images/objects/circle-03.png" alt="object" style={{bottom: "-16%", left: "16%"}} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 440;" />
                                        <h2 className="uk-h2 uk-heading-d3@m uk-margin-small uk-margin@m">Supercharge your NFT Adventure</h2>
                                        <p className="uk-text-xlarge uk-width-xlarge@m uk-text-muted">Find the right NFT collections to buy within the platform.</p>
                                        <a href="#" className="uk-button uk-button-medium@m uk-button-gradient uk-margin-small-top">
                                            <span>View in OPENSEA</span>
                                            <i className="uk-icon-small unicon-arrow-right uk-text-bold"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="uk-width-6-12@m uk-flex-center">
                                    <div className="uk-panel" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;">
                                        <img className="uk-position-left uk-text-primary" width="44" src="images/objects/bitcoin-01.png" alt="object" style={{top: "75%", left: "-20%"}} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 460;"  />
                                        <img className="uk-position-right" width="28" src="images/objects/x.png" alt="object" style={{top: "-4%", right: "16%"}} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 480;" />
                                        <img className="uk-position-right uk-opacity-10" width="300" src="images/blob-dashed.svg" alt="Blog dashed" style={{top: "-10%", right: "16%", fill: "transparent"}} />
                                        <svg style={{top: "-20%"}} className="uk-position-right uk-opacity-30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#F796FF" d="M47.5,-67.2C55.9,-59.3,53.2,-37.9,56.7,-20.1C60.2,-2.3,69.9,11.8,70.8,27.3C71.7,42.9,63.8,59.9,50.6,64.4C37.3,68.9,18.6,60.8,-0.3,61.2C-19.3,61.6,-38.6,70.7,-53.5,66.7C-68.4,62.8,-78.9,45.9,-78.8,29.5C-78.7,13.2,-67.9,-2.7,-59.8,-16.8C-51.6,-31,-46,-43.3,-36.5,-50.9C-27,-58.4,-13.5,-61.1,3,-65.2C19.6,-69.4,39.1,-75.1,47.5,-67.2Z" transform="translate(100 100)"></path>
                                        </svg>
                                        <div className="uk-grid uk-grid-xsmall uk-child-width-1-2" data-uk-grid="masonry: true;">
                                            <div>
                                                <div className="uni-item uk-card uk-overflow-hidden uk-radius uk-radius-large@m uk-box-shadow-hover-medium uk-visible-toggle uk-transition-toggle uk-box-shadow-medium uk-background-white dark:uk-background-white-5">
                                                    <div className="uni-item-featured-image uk-panel uk-flex-middle uk-flex-center">
                                                        <div className="uk-panel uk-image-middle">
                                                            <img src="images/artwork/05.jpg" alt="Artwork" className="uk-radius-small uk-radius-large@m" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="uk-margin-large-top">
                                                <div className="uni-item uk-card uk-overflow-hidden uk-radius uk-radius-large@m uk-box-shadow-hover-medium uk-visible-toggle uk-transition-toggle uk-box-shadow-medium uk-background-white dark:uk-background-white-5">
                                                    <div className="uni-item-featured-image uk-panel uk-flex-middle uk-flex-center">
                                                        <div className="uk-panel uk-image-middle">
                                                            <img src="images/artwork/13.jpg" alt="Artwork" className="uk-radius-small uk-radius-large@m" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="uni-circle-text uk-background-white dark:uk-background-gray-80 uk-box-shadow-large uk-visible@m" href="#view_in_opensea">
                                        <svg className="uni-circle-text-path uk-text-secondary uni-animation-spin" viewBox="0 0 100 100" width="120" height="120">
                                                <defs>
                                                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0">
                                                </path></defs>
                                                <text style={{fontSize:"12px"}}>
                                                    <textPath xlinkHref="#circle">view in opensea • view in opensea •</textPath>
                                                </text>
                                            </svg>
                                            <i className="uk-position-center uk-text-secondary uk-icon-medium@m unicon-arrow-up-right uk-text-bold"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroBannerOne;