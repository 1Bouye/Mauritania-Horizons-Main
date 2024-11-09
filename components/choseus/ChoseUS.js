const ChoseUs = () => {
    return(
        <>
            <div id="uni_whyus" className="uni-whyus uk-section uk-section-xlarge@m uk-panel">
                <div className="uk-container">
                    <header className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-grid" data-uk-grid>
                        <div className="uk-panel uk-text-center">
                            <h2 className="uk-h3 uk-h1@m">Why choose us?</h2>
                        </div>
                    </header>
                    <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
                        <img className="uk-position-top-left uk-text-secondary" width="16" src="images/objects/circle-01.png" alt="Object" style={{top: "-16%", left: "8%"}} />
                        <img className="uk-position-bottom-right uk-text-primary" width="24" src="images/objects/circle-02.png" alt="Object" style={{bottom: "16%", right: "-8%"}} />
                        <img className="uk-position-bottom-left uk-text-muted" width="28" src="images/objects/x.png" alt="Object" style={{bottom: "16%", left: "-8%"}} />
                        <div className="uk-grid uk-child-width-1-4@s" data-uk-grid="masonry: true;">
                            <div>
                                <div className="uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                    <span className="uk-h3 uk-h2@m uk-text-gradient">01.</span>
                                    <div className="uk-panel uk-margin-top">
                                        <h3 className="uk-h5 uk-h4@m">
                                            Huge <br />
                                            collection
                                        </h3>
                                        <p className="uk-text-muted">A collection of 5,000 unique Nerkos built to go beyond the digital space that will unlock numerous benefits for our community.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5 uk-margin-large-top@m">
                                    <span className="uk-h3 uk-h2@m uk-text-gradient">02.</span>
                                    <div className="uk-panel uk-margin-top">
                                        <h3 className="uk-h5 uk-h4@m">
                                            High <br />
                                            quality
                                        </h3>
                                        <p className="uk-text-muted">The nerko’s collection includes dozens of rare heads, costumes, and colorways of the artist's palette. They are drawn with great care.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                    <span className="uk-h3 uk-h2@m uk-text-gradient">03.</span>
                                    <div className="uk-panel uk-margin-top">
                                        <h3 className="uk-h5 uk-h4@m">
                                            Top <br />
                                            ressource
                                        </h3>
                                        <p className="uk-text-muted">Tasty design resources made with care for each pixel. Tokens, NFTs, metaverse and game resources. Access additional drops.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5 uk-margin-large-top@m">
                                    <span className="uk-h3 uk-h2@m uk-text-gradient">04.</span>
                                    <div className="uk-panel uk-margin-top">
                                        <h3 className="uk-h5 uk-h4@m">
                                            Big <br />
                                            community
                                        </h3>
                                        <p className="uk-text-muted">Be part of a community of nerko owners and create user generated items. Rent, advertise, lounch stores, create items. We make it easy to discover.</p>
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

export default ChoseUs;