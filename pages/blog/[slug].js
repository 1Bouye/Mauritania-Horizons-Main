import { useRouter } from 'next/router';
import Image from 'next/image';
import HeaderInner from '../../components/layouts/HeaderInner';
import Divider from '../../components/Divider';
import postsFr from '../../data/Posts.json';
import postsEn from '../../data/PostsEn.json';
import Header4 from '../../components/layouts/Header4';
import Head from 'next/head';
import { fr } from '../../assets/js/locales/fr';
import { en } from '../../assets/js/locales/en';

import { Navigation, EffectFade, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



function SinglePost() {
    const navigateToExternalURL = () => {
        window.location.href = 'https://mauritaniahorizons.com/';
    };
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        },
        imageContainer: {
            width: '80%',
            position: 'relative',
            margin: '0 auto', // Center the image container
        },
        image: {
            width: '100%',
            height: '100%',
            display: 'block',
            margin: '0 auto',
        },
    };
    const router = useRouter();
    const posts = router.locale === 'fr' ? postsFr : postsEn
    const t = router.locale === 'fr' ? fr : en;
    var slug = router.query.slug;
    if (slug === undefined) {
        slug = 'pixel-kit-thinking-inside-the-box-for-a-change';
    }

    // Find the data for the current slug in your JSON data
    const post = posts.find(item => item.slug === slug)

    if (!post) {
        return <div>Post not found</div>
    }

    return (
        <>
            <Head>
                <title>Mauritania horizons</title>
                <link rel="icon" href="/images/artwork/06.jpg" />
            </Head>
            {/* <HeaderInner /> */}
            <div className="uk-form-controls uk-flex-center" style={{
                marginTop: '20px'
            }}>

                <button type="submit" className="uk-button uk-button-primary uk-width-small@m uk-margin-auto" onClick={navigateToExternalURL}>{t.buttonText}</button>
            </div>
            <article class="uk-article uk-section uk-section-xlarge@m uk-border-top">

                <div class="uk-container">
                    <header class="entry-header uk-container uk-container-xsmall">
                        <div class="uk-panel uk-text-center">
                            <ul class="uk-subnav uk-subnav-small uk-subnav-dot uk-flex-center uk-text-medium uk-text-muted">
                                <li><span>{post.publishedDate}</span></li>
                            </ul>
                            <h1 class="uk-h3 uk-h1@m uk-margin-medium-top@m">{post.title}</h1>
                            {/* <p class="uk-text-lead uk-text-muted">{post.description}</p> */}
                        </div>

                    </header>
                    {/* 
                    <div class="entry-featured-image uk-panel uk-overflow-hidden uk-radius uk-margin uk-margin-xlarge@m">
                        <canvas width="1200" height="600"></canvas>
                        <Image src={`/images/posts/${post.image}`} alt="Pixel Kit: thinking inside the box for a change" class="uk-cover" data-uk-cover="" loading="lazy" width={1200} height={600} />
                    </div> */}
                    <Divider />

                    <div class="entry-content uk-container uk-container-xsmall">
                        <div class="uk-panel uk-text-medium uk-text-xlarge@m">
                            {/* <p>Ex illo laudantium perferendis nemo! Impedit a sit, repellendus quasi sapiente dolorem veniam corporis cumque laboriosam nisi eaque earum, soluta ex nemo rerum velit? Repellendus consequatur amet aliquam nesciunt nemo, deserunt facilis. Sapiente repellat dicta ipsam quas corporis ex illo repellendus provident.</p>
                            <h3 class="uk-h4 uk-h3@m uk-margin-large-top">What's the Pixel Kit?</h3>
                            <p>Repellendus quasi sapiente dolorem veniam corporis cumque laboriosam nisi eaque earum, soluta ex nemo rerum velit? Repellendus consequatur amet aliquam nesciunt nemo, deserunt facilis. Sapiente repellat dicta ipsam quas corporis ex illo repellendus provident.</p>
                            <ul class="uk-list uk-list-bullet uk-margin-medium@m">
                                <li>The gratest resource any company has is its people</li>
                                <li>By unlocking new thinking and ideas, you can deliver new growth opportunities and transform cultures</li>
                                <li>Empowering people to to generate a pipeline of quality ideas</li>
                            </ul>
                            <figure class="uk-margin-large-top@m">
                                <img class="uk-radius" src={`/images/posts/${post.image}`} alt="Image caption" loading="lazy" />
                                <figcaption class="uk-text-meta uk-text-right uk-margin-2xsmall-top">Image copyright by @yegormeteor on dribbble.</figcaption>
                            </figure>
                            <p>Sapiente dolorem veniam corporis cumque laboriosam nisi eaque earum, soluta ex nemo rerum velit? Repellendus consequatur amet aliquam nesciunt nemo, deserunt facilis. Sapiente repellat dicta ipsam quas corporis ex illo repellendus provident.</p>
                            <h3 class="uk-h4 uk-h3@m uk-margin-large-top@m">A new Brand Book</h3>
                            <p>Ex illo laudantium perferendis nemo! Impedit a sit, repellendus quasi sapiente dolorem veniam corporis cumque laboriosam nisi eaque earum, soluta ex nemo rerum velit? Repellendus consequatur amet aliquam nesciunt nemo, deserunt facilis. Sapiente repellat dicta ipsam quas corporis ex illo repellendus provident.</p> */}
                            {/* <p>Repellendus quasi sapiente dolorem veniam corporis cumque laboriosam nisi eaque earum, soluta ex nemo rerum velit? Repellendus consequatur amet aliquam nesciunt nemo, ,<br />deserunt facilis. Sapiente repellat dicta ipsam quas corporis ex illo repellendus provident.  <br />

                                Repellendus quasi sapiente dolorem veniam corporis cumque laboriosam nisi eaque earum, soluta ex nemo rerum velit? Repellendus consequatur amet aliquam nesciunt nemo,<br /> deserunt facilis. Sapiente repellat dicta ipsam quas corporis ex illo repellendus provident.<br />

                            </p> */}
                            <div dangerouslySetInnerHTML={{
                                __html: post.description
                            }} />
                        </div>
                    </div>
                    <div style={styles.container}>
                        <Swiper
                            modules={[Navigation, A11y, Pagination, EffectFade]}
                            spaceBetween={32}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {post?.images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div style={styles.imageContainer} className="uk-panel uk-image-middle uk-overflow-hidden uk-radius uk-radius-large@m" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;">
                                        <img src={image} alt="" style={styles.image} loading="lazy" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <footer class="entry-footer uk-container uk-container-xsmall uk-margin-large-top uk-margin-xlarge-top@m">
                        <div class="uk-panel">
                            <div class="uk-grid-small uk-grid-medium@m uk-child-width-1-1 uk-grid uk-grid-stack" data-uk-grid="">
                                <div class="uk-first-column">
                                    <div class="uk-grid-small uk-grid-medium@m uk-flex-middle uk-flex-center uk-flex-between@m uk-grid" data-uk-grid="">
                                        <div class="uk-first-column">
                                            {/* <ul class="entry-tags uk-subnav uk-subnav-small uk-text-bold uk-text-muted">
                                                <li><a href="#0">#bitcoin</a></li>
                                                <li><a href="#0">#crypto</a></li>
                                                <li><a href="#0">#collectibles</a></li>
                                            </ul> */}
                                        </div>

                                    </div>
                                </div>
                                {/* <div class="uk-grid-margin uk-first-column">
                                    <div class="uk-panel uk-card uk-card-small uk-radius-large uk-background-black-5 dark:uk-background-white-5">
                                        <div class="uk-grid uk-flex-middle uk-flex-center uk-flex-between@m" data-uk-grid="">
                                            <div class="uk-first-column">
                                                <div class="entry-author uk-text-center uk-text-left@m">
                                                    <div class="uk-grid-xsmall uk-flex-middle uk-flex-center uk-flex-between@m uk-grid" data-uk-grid="">
                                                        <div class="uk-width-auto uk-first-column">
                                                            <div class="uk-panel uk-overflow-hidden uk-border-circle">
                                                                <canvas width="80" height="80"></canvas>
                                                                <Image src={`/images/posts/${post.authorImg}`} alt="Bruno Texira" class="uk-cover" data-uk-cover="" loading="lazy" width={80} height={80} /> <a href="#0" class="uk-position-cover" aria-label="Bruno Texira"></a>
                                                            </div>
                                                        </div>
                                                        <div class="uk-width-expand@m">
                                                            <div class="uk-panel">
                                                                <h4 class="uk-h6 uk-h5@m uk-margin-remove"><a class="uk-link-reset" href="blog-author.html">Bruno Texira</a></h4>
                                                                <p class="uk-text-small uk-margin-2xsmall-top uk-text-muted">Marketing Designer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <ul class="entry-social-links uk-subnav uk-subnav-small">
                                                    <li>
                                                        <a aria-label="twitter" href="https://twitter.com/unistudioco" rel="noopener" target="_blank"><i class="uk-icon-small brand-twitter"></i></a>
                                                    </li>
                                                    <li>
                                                        <a aria-label="facebook" href="https://facebook.com/unistudioco" rel="noopener" target="_blank"><i class="uk-icon-small brand-facebook"></i></a>
                                                    </li>
                                                    <li>
                                                        <a aria-label="behance" href="https://www.behance.net/unistudioco" rel="noopener" target="_blank"><i class="uk-icon-small brand-behance"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="mailto:hi.unistudio@gmail.com"><i class="uk-icon-small material-icons">mail</i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div class="uk-grid-margin uk-first-column">
                                    <div class="entry-comments">
                                        <a href="#load_comments" class="uk-button uk-button-large@m uk-button-default uk-button-outline uk-width-1-1">
                                            <i class="material-icons uk-icon-small">chat_bubble_outline</i>
                                            <span>Load comments</span>
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </footer>
                </div>
            </article>
            {/* <Footer /> */}
        </>
    );
}

export default SinglePost;
