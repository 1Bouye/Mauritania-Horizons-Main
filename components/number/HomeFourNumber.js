import { useRouter } from 'next/router';
import { fr } from '../../assets/js/locales/fr';
import { en } from '../../assets/js/locales/en';

const HomeFourNumber = () =>{
    const router = useRouter();
    const t = router.locale === 'fr' ? fr : en;

    return(
        <div id="uni_numbers" class="uni-numbers uk-section uk-section-large@m">
            <div class="uk-container">
                <div class="uk-panel">
                    <img class="uk-position-top-right" width="24" src="images/objects/ethereum-01.png" alt="Object" style={{top: "-25%", right: "25%"}} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200;" />
                    <div class="uk-grid uk-grid-large uk-grid-divider uk-child-width-expand@m uk-text-center" data-uk-grid="" data-anime="targets: > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -250; delay: anime.stagger(100);">
                    <div>
                            <div class="uk-panel">
                                <h5 class="uk-h3 uk-h1@m uk-margin-xsmall uk-margin@m">+10000</h5>
                                <span>{t.homeFourNumber1}</span>
                            </div>
                        </div>

                        <div>
                            <div class="uk-panel">
                                <h5 class="uk-h3 uk-h1@m uk-margin-xsmall uk-margin@m">150</h5>
                                <span>{t.homeFourNumber2}</span>
                            </div>
                        </div>

                        
                        <div>
                            <div class="uk-panel">
                                <h4 class="uk-h3 uk-h1@m uk-margin-xsmall uk-margin@m">65</h4>
                                <span>{t.homeFourNumber3}</span>
                            </div>
                        </div>
                        <div>
                            <div class="uk-panel">
                                <h4 class="uk-h3 uk-h1@m uk-margin-xsmall uk-margin@m">20</h4>
                                <span>{t.homeFourNumber4}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeFourNumber
