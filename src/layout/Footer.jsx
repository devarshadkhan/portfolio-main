/* eslint-disable react/no-unescaped-entities */

import { useRef } from 'react';
import { m } from 'framer-motion';
import styles from './Footer.module.css';

import { useFloatingMsgContext, useGlobalContext } from '../store';

import selfDescentPic from '../assets/images/self-images/self-descent-pic-min.webp';
import indianFlag from '../assets/images/footer-indian-flag-min.png';
import footerLogo from '../assets/logos/secondary-website-logo-min.png';

const Footer = () => {
    const { footerArrivedCompletely, handleFooterArrivalState } = useGlobalContext();
    const { handleFloatingMsgIdxState } = useFloatingMsgContext();

    const emailContentRef = useRef(null);

    const pravinPortfolioEmail = 'pravincoding49+portfolio@gmail.com';

    const handleEmailCopyClick = () => {
        navigator.clipboard.writeText(pravinPortfolioEmail);
        emailContentRef.current.textContent = 'Copied the email id 👍🏽';

        setTimeout(() => {
            emailContentRef.current.textContent = 'pravincoding49@gmail.com';
        }, 3000);
    };

    const handleEmailBtnClick = () => {
        window.open(
            `mailto:${pravinPortfolioEmail}?subject=Your%20Subject&body=What%20you%20want%20to%20say...`
        );
    };

    return (
        <m.footer
            className={`section ${styles.footer}`}
            onViewportEnter={() => {
                handleFooterArrivalState(true);
                handleFloatingMsgIdxState(4);
            }}
            onViewportLeave={() => handleFooterArrivalState(false)}
            viewport={{ amount: 0.7 }}
        >
            <div className={`frost_glass ${styles.footer_frost_glass}`}>
                <div className={`section_container ${styles.footer_container}`}>
                    <div className={`section_headings_container`}>
                        <h2>That's all!</h2>
                        <p>Wrapping it up...</p>
                    </div>
                    <div className={styles.footer_row}>
                        <div className={styles.footer_row_left}>
                            <div className={styles.profile_container}>
                                <div className={styles.self_img_container}>
                                    <img src={selfDescentPic} alt="Pravin portrait image" />
                                </div>
                                <div
                                    className={`second_frost_layer body_text_500 ${
                                        styles.availability_text_container
                                    } ${
                                        footerArrivedCompletely ? `${styles.border_animation}` : ''
                                    }`}
                                >
                                    <span className={styles.green_dot}></span>
                                    <p>Available for projects</p>
                                    <span className={styles.border_radius_span}></span>
                                </div>
                            </div>
                            <ul
                                className={`${styles.social_links_container} ${
                                    footerArrivedCompletely ? `${styles.appear}` : ''
                                }`}
                            >
                                <li style={{ '--index': 0 }}>
                                    <a
                                        href="https://www.youtube.com/@pravinmudaliyar491"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            id="youtube"
                                        >
                                            <path
                                                transform="translate(0, 3.674)"
                                                d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>
                                <li style={{ '--index': 1 }}>
                                    <a
                                        href="https://www.linkedin.com/in/pravinm-tech/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            id="linkedin"
                                        >
                                            <path d="M17.5,8.999a5.41868,5.41868,0,0,0-2.56543.64453A.99918.99918,0,0,0,14,8.999H10a.99943.99943,0,0,0-1,1v12a.99942.99942,0,0,0,1,1h4a.99942.99942,0,0,0,1-1v-5.5a1,1,0,1,1,2,0v5.5a.99942.99942,0,0,0,1,1h4a.99942.99942,0,0,0,1-1v-7.5A5.50685,5.50685,0,0,0,17.5,8.999Zm3.5,12H19v-4.5a3,3,0,1,0-6,0v4.5H11v-10h2v.70313a1.00048,1.00048,0,0,0,1.78125.625A3.48258,3.48258,0,0,1,21,14.499Zm-14-12H3a.99943.99943,0,0,0-1,1v12a.99942.99942,0,0,0,1,1H7a.99942.99942,0,0,0,1-1v-12A.99943.99943,0,0,0,7,8.999Zm-1,12H4v-10H6ZM5.01465,1.542A3.23283,3.23283,0,1,0,4.958,7.999h.02832a3.23341,3.23341,0,1,0,.02832-6.457ZM4.98633,5.999H4.958A1.22193,1.22193,0,0,1,3.58887,4.77051c0-.7461.55957-1.22852,1.42578-1.22852A1.2335,1.2335,0,0,1,6.41113,4.77051C6.41113,5.5166,5.85156,5.999,4.98633,5.999Z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li style={{ '--index': 2 }}>
                                    <a
                                        href="https://www.instagram.com/pravinm.tech/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            id="instagram"
                                        >
                                            <path
                                                transform="translate(0, 1)"
                                                d="M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,.42-2.27C22,15.64,22,15.26,22,12S22,8.36,21.93,7.07Zm-2.54,8A5.73,5.73,0,0,1,19,16.87,3.86,3.86,0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35c-.79,0-1,0-3.06,0s-2.27,0-3.06,0A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81c0-.79,0-1,0-3.06s0-2.27,0-3.06A5.49,5.49,0,0,1,5,7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h0c.79,0,1,0,3.06,0s2.27,0,3.06,0A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81c0,.79,0,1,0,3.06S19.42,14.27,19.39,15.06Zm-1.6-7.44a2.38,2.38,0,0,0-1.41-1.41A4,4,0,0,0,15,6c-.78,0-1,0-3,0s-2.22,0-3,0a4,4,0,0,0-1.38.26A2.38,2.38,0,0,0,6.21,7.62,4.27,4.27,0,0,0,6,9c0,.78,0,1,0,3s0,2.22,0,3a4.27,4.27,0,0,0,.26,1.38,2.38,2.38,0,0,0,1.41,1.41A4.27,4.27,0,0,0,9,18.05H9c.78,0,1,0,3,0s2.22,0,3,0a4,4,0,0,0,1.38-.26,2.38,2.38,0,0,0,1.41-1.41A4,4,0,0,0,18.05,15c0-.78,0-1,0-3s0-2.22,0-3A3.78,3.78,0,0,0,17.79,7.62ZM12,15.82A3.81,3.81,0,0,1,8.19,12h0A3.82,3.82,0,1,1,12,15.82Zm4-6.89a.9.9,0,0,1,0-1.79h0a.9.9,0,0,1,0,1.79Z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>
                                <li style={{ '--index': 3 }}>
                                    <a
                                        href="https://github.com/PravinMudaliyar49"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            id="github"
                                        >
                                            <path d="M10.07031,20.50291a1.00008,1.00008,0,0,0-1.18115-.9834c-1.30908.24024-2.96191.27637-3.40137-.958a5.70754,5.70754,0,0,0-1.83691-2.415,1.20073,1.20073,0,0,1-.1665-.10938,1,1,0,0,0-.93067-.64551H2.54883a.99965.99965,0,0,0-1,.99512c-.00391.81543.811,1.33789,1.1416,1.51465a4.4408,4.4408,0,0,1,.92383,1.35937c.36426,1.02344,1.42285,2.57617,4.46582,2.376.001.03516.00195.06836.00244.09863l.00439.26758a1,1,0,0,0,2,0l-.00488-.31836C10.07715,21.4951,10.07031,21.22068,10.07031,20.50291Zm10.667-15.126c.03174-.125.063-.26367.09034-.41992a6.27792,6.27792,0,0,0-.40821-3.293,1.002,1.002,0,0,0-.61572-.58007c-.356-.12012-1.67041-.35645-4.18408,1.25a13.86918,13.86918,0,0,0-6.354,0C6.76221.751,5.45459.9658,5.10205,1.07908a.99744.99744,0,0,0-.63135.584,6.3003,6.3003,0,0,0-.40332,3.35644c.02442.12793.05078.2461.07813.35449A6.26928,6.26928,0,0,0,2.89014,9.20311a8.42168,8.42168,0,0,0,.04248.92187c.334,4.60254,3.334,5.98438,5.42431,6.459-.04345.125-.083.25878-.11816.40039a1.00023,1.00023,0,0,0,1.94238.47851,1.6784,1.6784,0,0,1,.46778-.87793.99947.99947,0,0,0-.5459-1.74512c-3.4541-.39453-4.95362-1.80175-5.1792-4.89843a6.61076,6.61076,0,0,1-.03369-.73828,4.25769,4.25769,0,0,1,.91943-2.71289,3.022,3.022,0,0,1,.1958-.23145.99988.99988,0,0,0,.188-1.02441,3.3876,3.3876,0,0,1-.15527-.55567A4.09356,4.09356,0,0,1,6.1167,3.06346a7.54263,7.54263,0,0,1,2.415,1.17968,1.00877,1.00877,0,0,0,.82764.13282,11.77716,11.77716,0,0,1,6.17285.001,1.00549,1.00549,0,0,0,.83056-.13769,7.572,7.572,0,0,1,2.40528-1.19043,4.03977,4.03977,0,0,1,.0874,1.57812,3.205,3.205,0,0,1-.16895.60743.9999.9999,0,0,0,.188,1.02441c.07715.08691.1543.18066.22363.26855A4.12186,4.12186,0,0,1,20,9.20311a7.03888,7.03888,0,0,1-.0376.77734c-.22021,3.05566-1.72558,4.46387-5.1958,4.85937a1,1,0,0,0-.54541,1.7461,1.63079,1.63079,0,0,1,.46631.9082,3.06079,3.06079,0,0,1,.09229.81934v2.334C14.77,21.2949,14.77,21.78025,14.77,22.00291a1,1,0,1,0,2,0c0-.2168,0-.69238.00977-1.33984V18.31346a4.8815,4.8815,0,0,0-.15479-1.31153,4.25638,4.25638,0,0,0-.11621-.416,6.51258,6.51258,0,0,0,5.44531-6.42383A8.69677,8.69677,0,0,0,22,9.20311,6.13062,6.13062,0,0,0,20.7373,5.37693Z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li style={{ '--index': 4 }}>
                                    <a
                                        href="https://discordapp.com/users/549877579268620289"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 100 100"
                                            viewBox="0 0 100 100"
                                            id="discord"
                                        >
                                            <path
                                                transform="translate(0, 7)"
                                                d="M85.778,24.561c-11.641-8.71-22.793-8.466-22.793-8.466s-1.14,1.302-1.14,1.302c13.839,4.152,20.27,10.257,20.27,10.257
		c-19.799-10.901-45.019-10.823-65.613,0c0,0,6.675-6.431,21.328-10.583c0,0-0.814-0.977-0.814-0.977s-11.071-0.244-22.793,8.466
		c0,0-11.722,21.084-11.722,47.052c0,0,6.838,11.722,24.829,12.292c0,0,3.012-3.582,5.454-6.675
		c-10.339-3.093-14.246-9.524-14.246-9.524c6.495,4.064,13.063,6.608,21.247,8.222c13.316,2.741,29.879-0.077,42.249-8.222
		c0,0-4.07,6.594-14.734,9.606c2.442,3.012,5.373,6.512,5.373,6.512C90.662,83.254,97.5,71.532,97.5,71.613
		C97.5,45.645,85.778,24.561,85.778,24.561z M34.818,64.043c-4.559,0-8.303-3.989-8.303-8.955c0.333-11.892,16.357-11.855,16.607,0
		C43.121,60.054,39.458,64.043,34.818,64.043z M64.531,64.043c-4.559,0-8.303-3.989-8.303-8.955c0.366-11.869,16.19-11.874,16.607,0
		C72.834,60.054,69.171,64.043,64.531,64.043z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                            <div className={styles.mail_btns_container}>
                                <button
                                    className={`second_frost_layer ${styles.copy_email}`}
                                    onMouseEnter={() =>
                                        (emailContentRef.current.textContent = 'Copy the email id')
                                    }
                                    onMouseLeave={() =>
                                        (emailContentRef.current.textContent =
                                            'pravincoding49@gmail.com')
                                    }
                                    onClick={handleEmailCopyClick}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        viewBox="0 0 1024 1024"
                                    >
                                        <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM382 896h-.2L232 746.2v-.2h150v150z" />
                                    </svg>
                                </button>
                                <button
                                    className={`second_frost_layer body_text_500 ${styles.email_btn}`}
                                    onClick={handleEmailBtnClick}
                                >
                                    <span ref={emailContentRef}>pravincoding49@gmail.com</span>
                                    <div className={`${styles.star} ${styles.star1}`}>
                                        <svg
                                            viewBox="0 0 784.11 815.53"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M392.05 0C371.15 210.08 207.99 378.41 0 407.78c207.96 29.37 371.12 197.68 392.05 407.74 20.93-210.06 184.09-378.37 392.05-407.74C576.12 378.4 412.94 210.09 392.04 0z"
                                                className={styles.fil0}
                                            />
                                        </svg>
                                    </div>
                                    <div className={`${styles.star} ${styles.star2}`}>
                                        <svg
                                            viewBox="0 0 784.11 815.53"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M392.05 0C371.15 210.08 207.99 378.41 0 407.78c207.96 29.37 371.12 197.68 392.05 407.74 20.93-210.06 184.09-378.37 392.05-407.74C576.12 378.4 412.94 210.09 392.04 0z"
                                                className={styles.fil0}
                                            />
                                        </svg>
                                    </div>
                                    <div className={`${styles.star} ${styles.star3}`}>
                                        <svg
                                            viewBox="0 0 784.11 815.53"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M392.05 0C371.15 210.08 207.99 378.41 0 407.78c207.96 29.37 371.12 197.68 392.05 407.74 20.93-210.06 184.09-378.37 392.05-407.74C576.12 378.4 412.94 210.09 392.04 0z"
                                                className={styles.fil0}
                                            />
                                        </svg>
                                    </div>
                                    <div className={`${styles.star} ${styles.star4}`}>
                                        <svg
                                            viewBox="0 0 784.11 815.53"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M392.05 0C371.15 210.08 207.99 378.41 0 407.78c207.96 29.37 371.12 197.68 392.05 407.74 20.93-210.06 184.09-378.37 392.05-407.74C576.12 378.4 412.94 210.09 392.04 0z"
                                                className={styles.fil0}
                                            />
                                        </svg>
                                    </div>
                                    <div className={`${styles.star} ${styles.star5}`}>
                                        <svg
                                            viewBox="0 0 784.11 815.53"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M392.05 0C371.15 210.08 207.99 378.41 0 407.78c207.96 29.37 371.12 197.68 392.05 407.74 20.93-210.06 184.09-378.37 392.05-407.74C576.12 378.4 412.94 210.09 392.04 0z"
                                                className={styles.fil0}
                                            />
                                        </svg>
                                    </div>
                                    <div className={`${styles.star} ${styles.star6}`}>
                                        <svg
                                            viewBox="0 0 784.11 815.53"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M392.05 0C371.15 210.08 207.99 378.41 0 407.78c207.96 29.37 371.12 197.68 392.05 407.74 20.93-210.06 184.09-378.37 392.05-407.74C576.12 378.4 412.94 210.09 392.04 0z"
                                                className={styles.fil0}
                                            />
                                        </svg>
                                    </div>
                                    <div className={`${styles.star} ${styles.star7}`}>
                                        <svg
                                            viewBox="0 0 784.11 815.53"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M392.05 0C371.15 210.08 207.99 378.41 0 407.78c207.96 29.37 371.12 197.68 392.05 407.74 20.93-210.06 184.09-378.37 392.05-407.74C576.12 378.4 412.94 210.09 392.04 0z"
                                                className={styles.fil0}
                                            />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className={styles.footer_row_right}>
                            <p className="body_text_700">
                                Drop me a mail or say 👋🏽 on social media...
                            </p>
                            <p className="body_text_500">
                                Whether you're a designer or an early-stage startup looking to build
                                your online brand, I'm excited to discuss about your project. Let's
                                <span className={styles.chat_word_span}>
                                    {' '}
                                    chat!
                                    <img
                                        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Thumbs%20Up.webp"
                                        alt="Thumbs Up"
                                        className={styles.footer_chat_animated_emoji}
                                    />
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.footer_column}>
                        <div className={styles.footer_logo_container}>
                            <img src={footerLogo} alt="Website secondary logo" />
                        </div>
                        <div className={styles.copyright_container}>
                            <div className={styles.india_flag_text_container}>
                                <p className="body_text_200">Created with love from</p>
                                <a
                                    href="https://time.com/6307329/india-moon-landing-south-pole/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.indian_flag_container_link}
                                >
                                    <img
                                        src={indianFlag}
                                        alt="Indian Flag"
                                        className={styles.indian_flag_img}
                                    />
                                    <div className={styles.indian_flag_flagwave}></div>
                                </a>
                            </div>
                            <p className="body_text_200">
                                &copy; {new Date().getFullYear()}, designed and built by Pravin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </m.footer>
    );
};
export default Footer;
