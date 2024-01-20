/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom';

import error404SVG from '../assets/images/Error-404-min.svg';

import styles from './Error.module.css';
import { useEffect } from 'react';

const ErrorPage = () => {
    useEffect(() => {
        const pageTransitionsScreen = document.querySelector('.page_transitions_screen');

        setTimeout(() => {
            pageTransitionsScreen.classList.remove('appear', 'first_time_load');
            pageTransitionsScreen.classList.add('hide');
        }, 500);
    }, []);

    return (
        <div className={`section ${styles.error_page_main}`}>
            <div className={`frost_glass ${styles.error_frost_glass}`}>
                <div className={`section_container ${styles.error_page_container}`}>
                    <div className={styles.error_svg_container}>
                        <img src={error404SVG} alt="Error 404 SVG image" />
                    </div>
                    <div className={styles.go_home_container}>
                        <h2 className={`body_text_800 ${styles.error_msg}`}>
                            Sorry, you've visited an unexpected link!
                        </h2>
                        <Link to="/">
                            <button className={`first_frost_layer body_text_500 ${styles.back_home_btn}`}>
                                Back to home &rarr;
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ErrorPage;
