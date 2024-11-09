import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
const TeamFIve =() =>{
    return(
        <div id="uni_team" className="uni-team uni-team-5 uk-section uk-section-large@m uk-panel uk-overflow-hidden swiper-parent">
            <div className="uk-container">
                <div className="uk-panel">
                    <header className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid" data-uk-grid>
                        <div className="uk-panel">
                            <h2 className="uk-h3 uk-h2@s uk-heading-d2@m uk-text-uppercase">Meet <span className="uk-text-gradient">our team</span></h2>
                        </div>
                    </header>
                </div>
                <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
                    <div className="uk-grid uk-grid-match" data-uk-grid>
                        <div className="uk-width-1-6@m">
                            <div className="uk-flex uk-flex-column uk-flex-between uk-height-1-1">
                                <p className="uk-margin-remove">Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>

                             
                                <div className="swiper-dotnav uk-margin-top uk-visible@m"></div>
                            </div>
                        </div>
                        <div className="uk-width-expand">
                        <Swiper 
                            modules={[Navigation, Scrollbar, A11y, Pagination]}
                            spaceBetween={32}
                            slidesPerView={2}
                            navigation                    
                            pagination={{
                                type: "fraction",
                              }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            breakpoints={{
                                // when window width is >= 640px
                                0: {
                                  width: 0,
                                  slidesPerView: 1,
                                },
                                // when window width is >= 768px
                                960: {
                                  width: 960,
                                  slidesPerView: 2,
                                },
                              }}
                        >
                            <SwiperSlide>
                              
                                    <div>
                                        <div className="uk-grid-2xsmall uk-grid@m uk-grid" data-uk-grid="">
                                            <div className="uk-width-3-5">
                                                <div className="uk-card uk-panel">
                                                    <div className="uk-panel uk-overflow-hidden uk-radius-large">
                                                        <canvas width="263" height="394"></canvas>
                                                        <img src="images/collections/01.jpg" alt="Artwork" className="uk-cover" data-uk-cover="" />
                                                    </div>
                                                    <h2 className="uk-h3 uk-h2@s uk-position-center-right-out uk-padding-medium-left uk-padding-2xsmall-left@s uk-padding-large-left@m uk-offset-2xlarge-left uk-offset-large-left@m uk-position-z-index uk-text-uppercase uk-text-gray-100 dark:uk-text-gray-10">
                                                        Steph <br />
                                                        Jobs
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="uk-width-expand">
                                                <div className="uk-flex uk-flex-column uk-flex-between uk-height-1-1">
                                                    <div className="uk-panel">
                                                        <p className="uk-text-muted">Artist</p>
                                                    </div>
                                                    <div className="uk-panel uk-margin-bottom">
                                                        <ul className="uk-subnav uk-subnav-xsmall uk-subnav-small@m">
                                                            <li>
                                                                <Link href="https://twitter.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-twitter"></i></Link>
                                                            </li>
                                                            <li>
                                                                <Link href="https://instagram.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-instagram"></i></Link>
                                                            </li>
                                                            <li>
                                                                <Link href="https://discord.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-discord"></i></Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               
                            </SwiperSlide>
                            <SwiperSlide>
                           
                                <div>
                                    <div className="uk-grid-2xsmall uk-grid@m uk-grid" data-uk-grid="">
                                        <div className="uk-width-3-5">
                                            <div className="uk-card uk-panel">
                                                <div className="uk-panel uk-overflow-hidden uk-radius-large">
                                                    <canvas width="263" height="394"></canvas>
                                                    <img src="images/collections/02.jpg" alt="Artwork" className="uk-cover" data-uk-cover="" />
                                                </div>
                                                <h2 className="uk-h3 uk-h2@s uk-position-center-right-out uk-padding-medium-left uk-padding-2xsmall-left@s uk-padding-large-left@m uk-offset-2xlarge-left uk-offset-large-left@m uk-position-z-index uk-text-uppercase uk-text-gray-100 dark:uk-text-gray-10">
                                                    Andry <br />
                                                    Morays
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="uk-width-expand">
                                            <div className="uk-flex uk-flex-column uk-flex-between uk-height-1-1">
                                                <div className="uk-panel">
                                                    <p className="uk-text-muted">Artist</p>
                                                </div>
                                                <div className="uk-panel uk-margin-bottom">
                                                    <ul className="uk-subnav uk-subnav-xsmall uk-subnav-small@m">
                                                        <li>
                                                            <Link href="https://twitter.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-twitter"></i></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://instagram.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-instagram"></i></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://discord.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-discord"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            </SwiperSlide>
                            <SwiperSlide>
                            
                                <div>
                                    <div className="uk-grid-2xsmall uk-grid@m uk-grid" data-uk-grid="">
                                        <div className="uk-width-3-5">
                                            <div className="uk-card uk-panel">
                                                <div className="uk-panel uk-overflow-hidden uk-radius-large">
                                                    <canvas width="263" height="394"></canvas>
                                                    <img src="images/collections/03.jpg" alt="Artwork" className="uk-cover" data-uk-cover="" />
                                                </div>
                                                <h2 className="uk-h3 uk-h2@s uk-position-center-right-out uk-padding-medium-left uk-padding-2xsmall-left@s uk-padding-large-left@m uk-offset-2xlarge-left uk-offset-large-left@m uk-position-z-index uk-text-uppercase uk-text-gray-100 dark:uk-text-gray-10">
                                                    Steve <br />
                                                    Allan
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="uk-width-expand">
                                            <div className="uk-flex uk-flex-column uk-flex-between uk-height-1-1">
                                                <div className="uk-panel">
                                                    <p className="uk-text-muted">Artist</p>
                                                </div>
                                                <div className="uk-panel uk-margin-bottom">
                                                    <ul className="uk-subnav uk-subnav-xsmall uk-subnav-small@m">
                                                        <li>
                                                            <Link href="https://twitter.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-twitter"></i></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://instagram.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-instagram"></i></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://discord.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-discord"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            </SwiperSlide>
                            <SwiperSlide>
                            
                                <div>
                                    <div className="uk-grid-2xsmall uk-grid@m uk-grid" data-uk-grid="">
                                        <div className="uk-width-3-5">
                                            <div className="uk-card uk-panel">
                                                <div className="uk-panel uk-overflow-hidden uk-radius-large">
                                                    <canvas width="263" height="394"></canvas>
                                                    <img src="images/collections/04.jpg" alt="Artwork" className="uk-cover" data-uk-cover="" />
                                                </div>
                                                <h2 className="uk-h3 uk-h2@s uk-position-center-right-out uk-padding-medium-left uk-padding-2xsmall-left@s uk-padding-large-left@m uk-offset-2xlarge-left uk-offset-large-left@m uk-position-z-index uk-text-uppercase uk-text-gray-100 dark:uk-text-gray-10">
                                                    John <br />
                                                    Clark
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="uk-width-expand">
                                            <div className="uk-flex uk-flex-column uk-flex-between uk-height-1-1">
                                                <div className="uk-panel">
                                                    <p className="uk-text-muted">Artist</p>
                                                </div>
                                                <div className="uk-panel uk-margin-bottom">
                                                    <ul className="uk-subnav uk-subnav-xsmall uk-subnav-small@m">
                                                        <li>
                                                            <Link href="https://twitter.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-twitter"></i></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://instagram.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-instagram"></i></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://discord.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-discord"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           
                            </SwiperSlide>
                            <SwiperSlide>
                           
                                <div>
                                    <div className="uk-grid-2xsmall uk-grid@m uk-grid" data-uk-grid="">
                                        <div className="uk-width-3-5">
                                            <div className="uk-card uk-panel">
                                                <div className="uk-panel uk-overflow-hidden uk-radius-large">
                                                    <canvas width="263" height="394"></canvas>
                                                    <img src="images/collections/05.jpg" alt="Artwork" className="uk-cover" data-uk-cover="" />
                                                </div>
                                                <h2 className="uk-h3 uk-h2@s uk-position-center-right-out uk-padding-medium-left uk-padding-2xsmall-left@s uk-padding-large-left@m uk-offset-2xlarge-left uk-offset-large-left@m uk-position-z-index uk-text-uppercase uk-text-gray-100 dark:uk-text-gray-10">
                                                    Alfonso <br />
                                                    Pedro
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="uk-width-expand">
                                            <div className="uk-flex uk-flex-column uk-flex-between uk-height-1-1">
                                                <div className="uk-panel">
                                                    <p className="uk-text-muted">Artist</p>
                                                </div>
                                                <div className="uk-panel uk-margin-bottom">
                                                    <ul className="uk-subnav uk-subnav-xsmall uk-subnav-small@m">
                                                        <li>
                                                            <Link href="https://twitter.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-twitter"></i></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://instagram.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-instagram"></i></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://discord.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-discord"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            </SwiperSlide>
                            <SwiperSlide>
                            
                                <div>
                                    <div className="uk-grid-2xsmall uk-grid@m uk-grid" data-uk-grid="">
                                        <div className="uk-width-3-5">
                                            <div className="uk-card uk-panel">
                                                <div className="uk-panel uk-overflow-hidden uk-radius-large">
                                                    <canvas width="263" height="394"></canvas>
                                                    <img src="images/collections/06.jpg" alt="Artwork" className="uk-cover" data-uk-cover="" />
                                                </div>
                                                <h2 className="uk-h3 uk-h2@s uk-position-center-right-out uk-padding-medium-left uk-padding-2xsmall-left@s uk-padding-large-left@m uk-offset-2xlarge-left uk-offset-large-left@m uk-position-z-index uk-text-uppercase uk-text-gray-100 dark:uk-text-gray-10">
                                                    Jasse <br />
                                                    Davy
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="uk-width-expand">
                                            <div className="uk-flex uk-flex-column uk-flex-between uk-height-1-1">
                                                <div className="uk-panel">
                                                    <p className="uk-text-muted">Artist</p>
                                                </div>
                                                <div className="uk-panel uk-margin-bottom">
                                                    <ul className="uk-subnav uk-subnav-xsmall uk-subnav-small@m">
                                                        <li>
                                                            <Link href="https://twitter.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-twitter"></i></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://instagram.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-instagram"></i></Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://discord.com/unistudioco"><i className="uk-icon uk-icon-medium unicon-logo-discord"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                            
                            </SwiperSlide>                           
                            
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TeamFIve