import Link from "next/link";
import { Navigation, EffectFade, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import postsFr from '../../data/Posts.json';
import postsEn from '../../data/PostsEn.json';
import { useRouter } from 'next/router';
import { fr } from '../../assets/js/locales/fr';
import { en } from '../../assets/js/locales/en';


const HomeFourCollection = () => {
    const router = useRouter();
    const t = router.locale === 'fr' ? fr : en;
    const posts = router.locale === 'fr' ? postsFr : postsEn

    // it is better not to have console.log in the project - console.log(posts)
    return (
        <div id="uni_collection" className="uni-collection uni-collection-four uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-padding-2xlarge-bottom@m swiper-parent">
            <div className="uk-container">
                <header className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid" data-uk-grid data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 200;">
                    <div className="uk-panel">
                        <h2 className="uk-h4 uk-h1@m">{t.homeFourCollectionTitle1} <span className="uk-text-gradient">{t.homeFourCollectionTitle2}</span></h2>
                    </div>
                </header>
                <div className="uk-panel uk-margin-top uk-margin-xlarge-top@m">

                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, A11y, Pagination, EffectFade]}
                        spaceBetween={32}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}

                    >
                        {posts.map((post, index) => (
                            <SwiperSlide className="uk-radius-xlarge design">
                                <div>
                                    <div className="uni-artwork uk-card uk-overflow-hidden">
                                        <div className="uni-artwork-featured-image uk-panel uk-flex-middle uk-flex-center">
                                            <div className="uk-panel uk-image-middle"><img src={post.image} alt="" className="uk-radius-small uk-radius-medium@m" loading="lazy" /> <Link href={`blog/${post.slug}`} className="uk-position-cover" aria-label="Metaverse"></Link></div>
                                        </div>

                                        <div className="uni-artwork-content uk-card-xsmall uk-card-small@m uk-panel uk-flex-column uk-flex-middle">
                                            {/* <h4 className="uk-h6 uk-h4@m uk-margin-remove"> */}
                                            <a className="uk-link-reset" href={`blog/${post.slug}`}>{post.title}</a>
                                            {/* </h4> */}
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        )
                        )}


                    </Swiper>

                </div>

            </div>
        </div>
    )
}
export default HomeFourCollection 