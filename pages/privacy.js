import Footer from '../components/layouts/Footer';
import HeaderInner from '../components/layouts/HeaderInner';
export default function NerkoTemplate() {
    return (

        <>
            <HeaderInner />
            <Head>
                <title>Mauritania horizons</title>
                <link rel="icon" href="/images/artwork/06.jpg" />
            </Head>
            <article className="uni-privacy uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-border-top">
                <div className="uk-container uk-container-xsmall">
                    <header>
                        <div className="uk-panel uk-text-center">
                            <h1 className="uk-h4 uk-h1@m">Privacy policy</h1>
                        </div>
                    </header>
                    <div className="uk-panel uk-text-medium uk-text-xlarge@m uk-margin uk-margin-xlarge-top@m">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        <h3 className="uk-h4 uk-h3@m uk-margin-large-top">Determination of personal information of users</h3>
                        <ul className="uk-list uk-list-decimal uk-margin-medium@m">
                            <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</li>
                            <li>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</li>
                            <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</li>
                        </ul>
                        <h3 className="uk-h4 uk-h3@m uk-margin-large-top@m">Reasons for collecting and processing user personal information</h3>
                        <ul className="uk-list uk-list-decimal uk-margin-medium@m">
                            <li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</li>
                            <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</li>
                            <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
                        </ul>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        <p className="uk-text-meta uk-margin-large-top@m">Last updated: 27 Oct, 2021</p>
                    </div>
                </div>
            </article>
            <Footer />
        </>

    );
}
