/* eslint-disable react/no-unescaped-entities */

import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, useProgress } from '@react-three/drei';
import { usePresence } from 'framer-motion';

import { Planet } from '../components/threeD_models/Planet';

import styles from './Contact.module.css';
import {
    handlePageTransitionScreenArrival,
    handlePageTransitionScreenRemoval,
} from '../utils/helpers';

const motionMatchMedia = window.matchMedia('(prefers-reduced-motion)');

const CanvasLoader = () => {
    const { progress } = useProgress();
    return (
        <Html
            as="div"
            center
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <span className="canvas-loader"></span>
            <p
                style={{
                    fontSize: 14,
                    color: '#F1F1F1',
                    fontWeight: 800,
                    marginTop: 40,
                }}
            >
                {progress.toFixed(2)}%
            </p>
        </Html>
    );
};

const PlanetCanvas = () => {
    return (
        <Canvas>
            <Suspense fallback={<CanvasLoader />}>
                <Planet />
                <OrbitControls autoRotate={!motionMatchMedia.matches} enableZoom={false} />
            </Suspense>
        </Canvas>
    );
};

const ContactPage = () => {
    const [isPresent, safeToRemove] = usePresence();
    const [sendingMsg, setSendingMsg] = useState(false);
    const [submitBtnDisable, setSubmitBtnDisable] = useState(false);

    const submitBtnRef = useRef(null);

    useEffect(() => {
        handlePageTransitionScreenRemoval();
    }, []);

    useEffect(() => {
        if (!isPresent) {
            handlePageTransitionScreenArrival(safeToRemove);
        }
    }, [isPresent, safeToRemove]);

    const handleEmailSending = e => {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                setSendingMsg(true);

                const formData = new FormData(e.target);
                const userData = Object.fromEntries(formData.entries());

                const toSendMessage = {
                    ...userData,
                    userLocation: `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`,
                };

                // TEST:
                setTimeout(() => {
                    setSendingMsg(false);
                    console.log(JSON.stringify(toSendMessage));

                    alert(
                        `Thank you ${
                            userData.username.split(' ')[0]
                        } :) I'll get back to you asap 🚀.`
                    );

                    handleSubmitBtnInteractivity(false);
                }, 5000);
            },
            function (error) {
                console.error('Error Code = ' + error.code + ' - ' + error.message);
                alert(
                    `Sorry, can't send the message :( Please give access to the location if you want to send the message.`
                );
                handleSubmitBtnInteractivity(false);
            }
        );
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        handleSubmitBtnInteractivity(true);

        setTimeout(() => {
            handleEmailSending(e);
        }, 2000);
    };

    const handleSubmitBtnInteractivity = disallow => {
        if (disallow) {
            submitBtnRef.current.classList.add(`${styles.plane_fly}`);
            setSubmitBtnDisable(true);
        } else {
            submitBtnRef.current.classList.remove(`${styles.plane_fly}`);
            setSubmitBtnDisable(false);
        }
    };

    return (
        <main className={styles.contact_page_main}>
            <div className={`frost_glass ${styles.contact_page_frost_glass}`}>
                <section
                    className={`section_container contact_page_container_generic_styling ${styles.contact_page_container}`}
                >
                    <div className={styles.earth_3d_model_container}>
                        <PlanetCanvas />
                    </div>
                    <div className={`${styles.contact_form_container}`}>
                        <div className={styles.contact_form_heading_container}>
                            <h2 className="body_text_900">Let's chat.</h2>
                            <p className="body_text_600">
                                Freelance inquiry or even a casual meet.
                            </p>
                        </div>
                        <form className={styles.contact_form} onSubmit={handleFormSubmit}>
                            <div className={styles.form_row}>
                                <label
                                    htmlFor="name"
                                    className={`body_text_400 ${styles.form_input_label}`}
                                >
                                    Your Full Name *
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className={`body_text_200 ${styles.form_input}`}
                                    name="username"
                                    required
                                    pattern="^\S+\s+\S+$"
                                    title="The name should consist of exactly two words."
                                />
                            </div>
                            <div className={styles.form_row}>
                                <label
                                    htmlFor="email"
                                    className={`body_text_400 ${styles.form_input_label}`}
                                >
                                    Your Email *
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className={`body_text_200 ${styles.form_input}`}
                                    name="useremail"
                                    required
                                    title="Please enter a valid email."
                                />
                            </div>
                            <div className={styles.form_row}>
                                <label
                                    htmlFor="message"
                                    className={`body_text_400 ${styles.form_input_label}`}
                                >
                                    Anything you'd like to say *
                                </label>
                                <textarea
                                    id="message"
                                    rows={2}
                                    className={`body_text_200 ${styles.form_input}`}
                                    name="usertext"
                                    required
                                />
                            </div>
                            <div className={styles.submit_btn_container}>
                                <button
                                    className={`second_frost_layer ${styles.submit_btn}`}
                                    disabled={submitBtnDisable}
                                    ref={submitBtnRef}
                                >
                                    <span className="body_text_500">
                                        {sendingMsg ? 'In progress...' : 'Send to Pravin'}
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        xmlSpace="preserve"
                                    >
                                        <path d="M462 54.955 355.371 437.187l-135.92-128.842L353.388 167l-179.53 124.074L50 260.973 462 54.955zM202.992 332.528v124.517l58.738-67.927-58.738-56.59z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    );
};
export default ContactPage;
