const HomeFourCta = () => {
    const phoneNumber = '22246656594'; // Replace with the actual phone number
  const message = 'Bonjour ! J\'aimerais discuter avec vous.'; // Replace with your custom message

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return(
        <div className="uni-cta uk-section uk-section-xlarge@m uk-panel uk-overflow-hidden">
            <div className="uk-container">
                <div className="uk-card uk-flex-center uk-text-center">
                    <div className="uk-panel uk-width-2xlarge@m uk-position-z-index" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;">
                        <img className="uk-position-top-left" width="24" src="images/objects/circle-01.png" alt="Object" style={{top: "0%", left: ",-16%"}}/>
                        <img className="uk-position-bottom-right" width="24" src="images/objects/x.png" alt="Object" style={{bottom: "16%", right: ",-8%"}}/>
                        <img className="uk-position-top-right" width="40" src="images/objects/ethereum-02.png" alt="Object" style={{top: "0%", right: ",-16%"}}/>
                        <img className="uk-position-bottom-left" width="48" src="images/objects/bitcoin-01.png" alt="Object" style={{bottom: "16%", left: ",-8%"}}/>
                        <div className="uk-panel" data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; delay: anime.stagger(100);">
                            <h2 className="uk-h3 uk-heading-d1@m">Contactez-<span className="uk-text-gradient">nous</span></h2>
                            <h5 className="uk-h5 uk-heading-d1@m">LANGUE ET POPULATION<span className="uk-text-gradient">nous</span></h5>

                            <p className="uk-text-xlarge@m">
                            L’arabe standard moderne est reconnu comme langue officielle de la Mauritanie. Le français est parlé comme langue étrangère dans le pays. Plusieurs langues minoritaires sont également parlées par les minorités ethniques vivant en Mauritanie. Il s’agit notamment du wolof, du pulaar, du soninké et du bambara. Très peu de gens parlent anglais.</p>
                            <a href={whatsappUrl} className="uk-button uk-button-small uk-button-large@m uk-button-gradient uk-margin-small-top uk-margin-medium-top@m">
                                <span>Démarrer le chat</span>
                                <i className="uk-icon-small unicon-arrow-up-right uk-text-bold"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFourCta