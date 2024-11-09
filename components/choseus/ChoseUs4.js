import { useRouter } from 'next/router';
import { fr } from '../../assets/js/locales/fr';
import { en } from '../../assets/js/locales/en';

const ChoseUs4 = () => {
    const router = useRouter();
    const t = router.locale === 'fr' ? fr : en;

    return(
        <>
             <div id="uni_about" className="uni-about uk-section uk-section-xlarge@m uk-panel">
                <div className="uk-container">
                    <header className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-grid" data-uk-grid data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;">
                        <div className="uk-panel uk-text-center">
                            <h2 className="uk-h3 uk-h1@m">{t.choseUs4Title1} <span className="uk-text-gradient">{t.choseUs4Title2}</span></h2>
                        </div>
                    </header>
                    <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;">
                        <img className="uk-position-top-left uk-text-secondary" width="16" src="images/objects/circle-01.png" alt="Object" style={{top: "-16%", left: "8%"}} />
                        <img className="uk-position-bottom-right uk-text-primary" width="24" src="images/objects/circle-02.png" alt="Object" style={{bottom: "16%", right: "-8%"}} />
                        <img className="uk-position-bottom-left" width="28" src="images/objects/x.png" alt="Object" style={{bottom: "16%", left: "-8%"}} />
                        <div className="uk-grid uk-child-width-1-4@s" data-uk-grid="" data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; onview: -250; delay: anime.stagger(100);">
                            <div>
                                <div className="uk-panel uk-card uk-card-small uk-card-medium@m uk-card-border uk-padding-large-horizontal uk-radius-medium uk-radius-large@m">
                                    <div className="uk-grid uk-grid-small@m uk-flex-column" data-uk-grid="">
                                        <div>
                                            <i className="uk-icon uk-icon-large uk-text-gradient unicon-layers"></i>
                                        </div>
                                        <div className="uk-panel uk-width-expand">
                                            <h3 className="uk-h5 uk-h4@m">
                                            {t.choseUs4CardTitle1}<br className="uk-visible@m" />
                                            </h3>
                                            <p> {t.choseUs4CardDescription1}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-margin-large-top@m">
                                <div className="uk-panel uk-card uk-card-small uk-card-medium@m uk-card-border uk-padding-large-horizontal uk-radius-medium uk-radius-large@m">
                                    <div className="uk-grid uk-grid-small@m uk-flex-column" data-uk-grid="">
                                        <div>
                                            <i className="uk-icon uk-icon-large uk-text-gradient unicon-checkmark-outline"></i>
                                        </div>
                                        <div className="uk-panel uk-width-expand">
                                            <h3 className="uk-h5 uk-h4@m">
                                            {t.choseUs4CardTitle2}<br className="uk-visible@m" />

                                            </h3>
                                            <p> {t.choseUs4CardDescription2}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-panel uk-card uk-card-small uk-card-medium@m uk-card-border uk-padding-large-horizontal uk-radius-medium uk-radius-large@m">
                                    <div className="uk-grid uk-grid-small@m uk-flex-column" data-uk-grid="">
                                        <div>
                                            <i className="uk-icon uk-icon-large uk-text-gradient unicon-task-approved"></i>
                                        </div>
                                        <div className="uk-panel uk-width-expand">
                                            <h3 className="uk-h5 uk-h4@m">
                                            {t.choseUs4CardTitle3} <br className="uk-visible@m" />
                                                
                                            </h3>
                                            <p> {t.choseUs4CardDescription3}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-margin-large-top@m">
                                <div className="uk-panel uk-card uk-card-small uk-card-medium@m uk-card-border uk-padding-large-horizontal uk-radius-medium uk-radius-large@m">
                                    <div className="uk-grid uk-grid-small@m uk-flex-column" data-uk-grid="">
                                        <div>
                                            <i className="uk-icon uk-icon-large uk-text-gradient unicon-collaborate"></i>
                                        </div>
                                        <div className="uk-panel uk-width-expand">
                                            <h3 className="uk-h5 uk-h4@m">
                                            {t.choseUs4CardTitle4}<br className="uk-visible@m" />
                                                
                                            </h3>
                                            <p>{t.choseUs4CardDescription4}</p>
                                        </div>
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

export default ChoseUs4;