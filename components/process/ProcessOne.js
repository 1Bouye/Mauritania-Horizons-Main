import Link from "next/link"
import { useRouter } from 'next/router';
import { fr } from '../../assets/js/locales/fr';
import { en } from '../../assets/js/locales/en';

const ProcessOne = () =>{
    const router = useRouter();
    const t = router.locale === 'fr' ? fr : en;

    return(
        <div id="uni_process" className="uni-process uk-section uk-section-xlarge@m uk-panel">
            <div className="uk-container">
                <header className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-grid" data-uk-grid data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                    <div className="uk-panel uk-text-center">
                        <h2 className="uk-h3 uk-h1@m">{t.processOneTitle1} <span className="uk-text-gradient">{t.processOneTitle2}</span></h2>
                    </div>
                </header>
                <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
                    <div className="uk-grid uk-grid-2xlarge uk-grid-3xlarge@m uk-child-width-1-1" data-uk-grid="">
                        <div>
                            <div className="uk-panel">
                                <div className="uk-grid uk-grid-3xlarge@m uk-flex-middle uk-child-width-1-2@m" data-uk-grid="">
                                    <div>
                                        <div className="uk-panel uk-image-middle uk-overflow-hidden uk-radius uk-radius-large@m" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;">
                                            <img src="images/features-07.jpg" alt="890 " />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="uk-panel" data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;">
                                            
                                            <p className="uk-text-large@m uk-margin-medium-top@m">{t.processOneDescription}</p>
                                            
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
export default ProcessOne