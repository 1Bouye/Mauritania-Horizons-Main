import Link from "next/link"
import { useRouter } from 'next/router';
import { fr } from '../../assets/js/locales/fr';
import { en } from '../../assets/js/locales/en';

const MobileMenu = () => {
    const router = useRouter();
    const t = router.locale === 'fr' ? fr : en;

    return (
        <div id="uni_mobile_menu" className="uni-mobile-menu uk-offcanvas" data-uk-offcanvas="mode: push; overlay: true; flip: true; selPanel: .uk-offcanvas-bar-panel;">
            <div className="uk-offcanvas-bar-panel uk-panel dark:uk-background-gray-100">
                <div className="uni-mobile-menu-wrap uk-flex-column uk-flex-between" data-uk-height-viewport="offset-bottom: true;">
                    <div className="uni-mobile-menu-content">
                        <header className="uk-card uk-card-2xsmall uk-flex-middle uk-flex-between">
                            <div className="uk-flex-1">
                                <button aria-label="Close Menu" className="uk-offcanvas-close uk-button uk-button-small uk-button-icon uk-button-default uk-button-outline uk-radius-circle" type="button">
                                    <i className="uk-icon uk-icon-small unicon-close"></i>
                                </button>
                            </div>
                            <div>
                                <h5 className="uk-h5 uk-text-uppercase uk-margin-remove">Navigation</h5>
                            </div>
                            <div className="uk-flex-1"></div>
                        </header>
                        <hr className="uk-margin-remove" />
                        <div className="uk-card uk-card-small">
                            <div className="uk-panel">
                                <ul className="uk-nav uk-nav-default">
                                    <li><a href="/">{t.headerItemMobile}</a></li>
                                    <li><a href="/#uni_collection">{t.headerItem1}</a></li>
                                    <li><a href="/#uni_about">{t.headerItem2}</a></li>
                                    <li><a href={"/" + router.locale + "/aboutUs"}>{t.headerItem3}</a></li>
                                    <li><a href={"/" + router.locale + "/mauritanie"}>{t.headerItem4}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MobileMenu