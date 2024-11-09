import Footer from '../components/layouts/Footer';
import HeaderInner from '../components/layouts/HeaderInner';
import Head from 'next/head';

export default function NerkoTemplate() {
    return (

        <>
            <HeaderInner />
            <Head>
                <title>Mauritania horizons</title>
                <link rel="icon" href="/images/artwork/06.jpg" />
            </Head>
            <div className="uni-error uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-border-top">
                <div className="uk-container">
                    <div className="uk-width-2xlarge@m uk-margin-auto uk-text-center">
                        <img className="dark:uk-hidden" src="images/404-light.png" alt="Page not found!" />
                        <img className="uk-hidden dark:uk-visible" src="images/404-dark.png" alt="Page not found!" />
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}
