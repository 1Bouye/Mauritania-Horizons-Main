import Head from 'next/head';
import Copyright from '../components/Copyright';
import Divider from '../components/Divider';
import HeroBannerFour from '../components/banners/HeroBannerFour';
import ChoseUs4 from '../components/choseus/ChoseUs4';
import HomeFourCollection from '../components/collection/HomeFourCollection';
import Header4 from '../components/layouts/Header4';
import HomeFourNumber from '../components/number/HomeFourNumber';
import ProcessOne from '../components/process/ProcessOne';
import ContactUs from './contact';
import VideoPlayer from './videoplayer';

export default function NerkoTemplate() {

    return (
        <div class="wrap uk-overflow-hidden">
            <Head>
                <title>Mauritania horizons</title>
                <link rel="icon" href="/images/artwork/06.jpg" />
            </Head>
            <Header4 />
            <HeroBannerFour />
            <Divider />
            <HomeFourCollection />
            <Divider />
            <ChoseUs4 />
            <Divider />
            <HomeFourNumber />
            <Divider />
            <ProcessOne />
            <Divider />
            <VideoPlayer />
            <Divider />
            <ContactUs />
            <Divider />
            <Copyright />

            {/* <HomeFourCta /> */}
        </div>

    );
}
