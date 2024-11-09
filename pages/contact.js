
import React, { useState } from 'react';
import { Form, message } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { fr } from '../assets/js/locales/fr';
import { en } from '../assets/js/locales/en';

export default function ContactUs() {
    const router = useRouter();
    const t = router.locale === 'fr' ? fr : en;

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',    // Center vertically
        height: '10vh',         // Full height of the viewport
    };
    const [form] = Form.useForm();
    const submit = (e) => {
        e.preventDefault();
        form.validateFields()
            .then(values => fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            }))
            .then(response => message.success('Message sent successfully'))
            .then(result => form.resetFields())
            .catch(error => message.error("An error occurred while sending the message. Please try again later."));
    };

    return (


        <Form form={form}>
            <Head>
                <title>Mauritania horizons</title>
                <link rel="icon" href="/images/artwork/06.jpg" />
            </Head>
            <div className="uni-contact uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-border-top">
                <header className="uni-page-header">
                    <div className="uk-container">
                        <h4 className="heading uk-h3 uk-h1@m uk-text-center">Contact</h4>
                        <p className="heading uk-h6 uk-h6@m uk-text-center">
                            {t.contactDescription}
                        </p>
                    </div>
                </header>

                <div style={containerStyle}>
                    <ul className="uk-subnav uk-subnav-small uk-margin-top uk-text-gray-70 dark:uk-text-gray-40">
                        <li>
                            <a aria-label="twitter" href="https://wa.me/22236818101"><i className="uk-icon-small brand-whatsapp"></i></a>
                        </li>
                        <li>
                            <a aria-label="facebook" href="https://www.facebook.com/share/AhnVTKWdCD1kEogY/?mibextid=LQQJ4d"><i className="uk-icon-small brand-facebook"></i></a>
                        </li>
                        <li>
                            <a aria-label="Instagram" href="https://www.instagram.com/mauritania_horizons/"><i className="uk-icon-small brand-instagram"></i></a>
                        </li>

                    </ul>

                </div>


                <div className="uk-margin-top uk-margin-large-top@m">
                    <div className="uk-container uk-container-xsmall">
                        <div className="uk-grid uk-child-width-1-1" data-uk-grid>
                            <div>
                                <div className="uk-card uk-card-small uk-card-large@m uk-card-default uk-card-border uk-radius-medium uk-radius-large@m dark:uk-background-white-5">
                                    {/* <form action="?" className="" data-uk-grid> */}
                                    <div className='uk-grid uk-grid-xsmall uk-child-width-1-1'>

                                        <div className="uk-width-1-2@m">
                                            <div className="uk-form-controls">
                                                <Form.Item name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
                                                    <input className="uk-input uk-form-medium uk-text-bold" type="text" placeholder="Name" />
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div className="uk-width-1-2@m">
                                            <div className="uk-form-controls">
                                                <Form.Item name="email" rules={[{ required: true, message: 'Please enter your email' }, { type: "email", message: "Please sumbit a valid email" }]}>
                                                    <input className="uk-input uk-form-medium uk-text-bold" type="email" placeholder="Email" />
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div className="uk-form-controls">
                                            <Form.Item name="subject" rules={[{ required: true, message: 'Please enter your subject' }]}>
                                                <input className="uk-input uk-padding uk-form-medium uk-text-bold" type="text" placeholder="Subject" />
                                            </Form.Item>
                                        </div>
                                        <div className="uk-form-controls"
                                            style={{
                                                marginTop: '20px'
                                            }}>
                                            <Form.Item name="message" rules={[{ required: true, message: 'Please enter your message' }]}>
                                                <textarea className="uk-textarea uk-padding uk-height-xsmall uk-radius-large uk-text-bold" rows="5" placeholder="Type your message"></textarea>
                                            </Form.Item>
                                        </div>

                                        <div className="uk-form-controls uk-flex-center" style={{
                                            marginTop: '20px'
                                        }}>

                                            <button type="submit" className="uk-button uk-button-primary uk-width-small@m uk-margin-auto" onClick={submit}>Send message</button>
                                        </div>
                                    </div>
                                    {/* </form> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </Form>
    );
}
