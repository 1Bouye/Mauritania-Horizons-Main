import Link from "next/link"

const FaqFour = () =>{
    return(
        <div id="uni_faq" className="uni-faq uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-padding-2xlarge-bottom@m">
            <div className="uk-container">
                <header className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid" data-uk-grid data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                    <div className="uk-panel">
                        <h2 className="uk-h3 uk-h1@m">
                            Your questions, <br />
                            <span className="uk-text-gradient">answered!</span>
                        </h2>
                    </div>
                </header>
                <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
                    <ul className="uk-card uk-card-small uk-card-large@m uk-card-border uk-radius uk-radius-large@m uk-width-2xlarge@m uk-margin-auto" data-uk-accordion="collapsible: false" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                        <li>
                            <a className="uk-accordion-title uk-h5@m" href="#">What’s an NFT?</a>
                            <div className="uk-accordion-content uk-padding-small-bottom">
                                <p className="uk-text-small uk-text-large@m">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                <p className="uk-text-small uk-text-large@m">Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                        </li>
                        <li>
                            <a className="uk-accordion-title uk-h5@m" href="#">What makes Nerko's special?</a>
                            <div className="uk-accordion-content uk-padding-small-bottom">
                                <p className="uk-text-small uk-text-large@m">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                            </div>
                        </li>
                        <li>
                            <a className="uk-accordion-title uk-h5@m" href="#">Who’s the team behind Nerko's NFT?</a>
                            <div className="uk-accordion-content uk-padding-small-bottom">
                                <p className="uk-text-small uk-text-large@m">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                        </li>
                        <li>
                            <a className="uk-accordion-title uk-h5@m" href="#">When does minting begin?</a>
                            <div className="uk-accordion-content uk-padding-small-bottom">
                                <p className="uk-text-small uk-text-large@m">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                            </div>
                        </li>
                        <li>
                            <a className="uk-accordion-title uk-h5@m" href="#">Who can mint one?</a>
                            <div className="uk-accordion-content uk-padding-small-bottom">
                                <p className="uk-text-small uk-text-large@m">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default FaqFour