import Footer from '../components/layouts/Footer';
import HeaderInner from '../components/layouts/HeaderInner';
export default function NerkoTemplate() {
  return (
    
        <>		
        <HeaderInner/>
		<div class="uni-sign-up uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-border-top">

                <header class="uni-page-header">
                    <div class="uk-container">
                        <h1 class="heading uk-h3 uk-h1@m uk-text-uppercase uk-text-center">Sign up</h1>
                    </div>
                </header>
                <div class="uk-margin-top uk-margin-large-top@m">
                    <div class="uk-container">
                        <div class="uk-flex-column uk-flex-center uk-width-medium@m uk-margin-auto">
                            <form class="uk-form-stacked uk-panel uk-width-1-1" action="?" method="post" data-uk-margin="margin: uk-margin">
                                <div class="uk-first-column">
                                    <label for="username-signup" class="uk-form-label">Your username: <span class="uk-text-danger">*</span></label>
                                    <input id="username-signup" type="text" name="username" class="uk-input uk-form-medium uk-radius-large" required/>
                                </div>
                                <div class="uk-margin uk-first-column">
                                    <label for="email-signup-page" class="uk-form-label">Your email: <span class="uk-text-danger">*</span></label>
                                    <input id="email-signup-page" type="email" name="email" class="uk-input uk-form-medium uk-radius-large" required/>
                                </div>
                                <div class="uk-margin uk-first-column">
                                    <label for="password-signup-page" class="uk-form-label">Your password: <span class="uk-text-danger">*</span></label>
                                    <input id="password-signup-page" type="password" name="password" class="uk-input uk-form-medium uk-radius-large" required/>
                                </div>
                                <div class="uk-margin uk-first-column">
                                    <button type="submit" class="uk-button uk-button-medium@m uk-button-gradient uk-width-expand">Sign up</button>
                                </div>
                                <div class="uk-grid uk-grid-xsmall uk-flex-center uk-text-xlarge uk-margin-medium-top@m uk-margin uk-first-column" data-uk-grid="">
                                    <a aria-label="facebook" href="#facebook" class="uk-first-column"><i class="brand-facebook-alt"></i></a>
                                    <a aria-label="google" href="#google"><i class="brand-google"></i></a>
                                    <a aria-label="twitter" href="#twitter"><i class="brand-twitter"></i></a>
                                </div>
                            </form>
                            <p class="uk-text-small uk-text-bold uk-text-center uk-margin-large-top@m">
                                You already have an account? <a href="sign-in" class="uk-link-line uk-text-primary"><span>Log in</span></a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
        
  	);
}
