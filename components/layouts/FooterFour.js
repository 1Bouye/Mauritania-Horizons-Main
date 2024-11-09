import Link from 'next/link';
import Copyright from '../Copyright';
import ScrollUp from './ScrollUp';
import ThemeSwitcher from './ThemeSwitcher';

const FooterFour = ({footerSetting = {}}) => {

   return (
        <footer className="uni-footer uk-section uk-section-xlarge@m uk-border-top">
        <div className="uk-container">
            <div className="uk-panel uk-position-z-index">
                <div className="uk-grid" data-uk-grid>
                    <div className="uk-width-expand@m">
                        <div className="uk-panel uk-width-medium@m">
                            <Link href="#" className="uk-logo">
                                <img className="uk-visible dark:uk-hidden" width="120" src="images/nerko-light.svg" alt="Nerko" />
                                <img className="uk-hidden dark:uk-visible" width="120" src="images/nerko-dark.svg" alt="Nerko" />
                            </Link>
                            <p className="uk-margin-medium@m">Join our Discord channel or follow us on Twitter keep up to date with our latest work and announcements.</p>
                            <ul className="uk-subnav uk-subnav-small">
                                <li>
                                    <Link href="https://twitter.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-twitter"></i></Link>
                                </li>
                                <li>
                                    <Link href="https://discord.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-discord"></i></Link>
                                </li>
                                <li>
                                    <Link href="https://instagram.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-instagram"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="uk-width-2-5@m">
                        <div className="uk-grid" data-uk-grid>
                            <div className="uk-width-1-2 uk-width-expand@m">
                                <ul className="uk-list">
                                    <li><Link href="#">About</Link></li>
                                    <li><Link href="#">Collection</Link></li>
                                    <li><Link href="#">Roadmap</Link></li>
                                    <li><Link href="#">FAQs</Link></li>
                                </ul>
                            </div>
                            <div className="uk-width-1-2 uk-width-expand@m">
                                <ul className="uk-list">
                                    <li><Link href="#">How it works!</Link></li>
                                    <li><Link href="#">Community</Link></li>
                                    <li><Link href="#">Get in touch</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-panel uk-text-small uk-margin-medium-top uk-margin-2xlarge-top@m">
                    <div className="uk-grid uk-child-width-auto@m uk-flex-between" data-uk-grid>
                        <div>
                            <ul className="uk-subnav uk-subnav-small">
                                <li><Link href="/blog">Blog</Link></li>
                                <li><Link href="privacy">Privacy policy</Link></li>
                                <li><Link href="terms">Terms of use</Link></li>
                                <li><Link href="sign-in">Sign In</Link></li>
                                    <li><Link href="sign-up">Sign Up</Link></li>
                                <li className="uk-margin-small-left">
                                  <ScrollUp/>
                                </li>
                            </ul>
                        </div>
                        <div className="uk-flex-first@m">
                            <Copyright/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ThemeSwitcher/>
        </footer>
    )
}
export default FooterFour