import Link from 'next/link';
import Logo from '../common/Logo';
import MobileMenu from './MobileMenu';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { fr } from '../../assets/js/locales/fr'
import { en } from '../../assets/js/locales/en'

const Header4 = ({ headerSetting = {} }) => {

    const router = useRouter();
    const localeLink = router.locale === 'en' ? 'fr' : 'en';
    const t = router.locale === 'fr' ? fr : en;

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);

        };

    });
    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const styles = {
            marginLeft: '20px', // or any value you prefer
            marginRight: '20px' // or any value you prefer
        };
        const header = document.querySelector('.uni-header-navbar');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('uk-sticky-fixed') : header.classList.remove('uk-sticky-fixed');
    };

    return (
        <>
            <MobileMenu />
            <header className="uni-header uk-position-top">
                <div className="uni-header-navbar" data-uk-sticky="top: 70; show-on-up: false; animation: uk-animation-slide-top">
                    <div className="uk-container">
                        <nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
                            <div className="uk-navbar-top">
                                <div className="uk-navbar-left uk-flex-1@m">
                                    <a className="uk-logo uk-navbar-item uk-h4 uk-h3@m uk-margin-remove" href="/">
                                        <Logo /> </a>
                                </div>

                                <div className="uk-navbar-center styles">
                                    <ul className="uk-navbar-nav dark:uk-text-gray-10 uk-visible@m" data-uk-scrollspy-nav="closest: li; scroll: true; offset: 40" data-uk-navbar-bound>
                                        <li><a href="#uni_collection">{t.headerItem1}</a></li>
                                        <li><a href="#uni_about">{t.headerItem2}</a></li>
                                        <li><a href={"/" + router.locale + "/aboutUs"}>{t.headerItem3}</a></li>
                                        <li><a href={"/" + router.locale + "/mauritanie"}>{t.headerItem4}</a></li>

                                    </ul>
                                </div>

                                <div className="uk-navbar-right uk-flex-1 uk-flex-right">
                                    <div className="uk-navbar-item">
                                        <Link href="/" className="uk-navbar" locale={localeLink}>
                                            <img src="/images/other/language.svg" alt="language" />
                                        </Link>
                                    </div>
                                    <div className="uk-navbar-item uk-hidden@m">
                                        <a href="#uni_mobile_menu" className="uk-navbar" data-uk-toggle="">
                                            <i className="uk-icon uk-icon-medium unicon-menu"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};
export default Header4;