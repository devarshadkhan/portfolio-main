import { m } from 'framer-motion';
import styles from './FloatingScrollTop.module.css';
import useCheckMobileScreen from '../hooks/use-mobileScreen';

const FloatingScrollTop = ({ scrollTopVisible, handleScrollToTop, scrollProgress }) => {
    const isMobile = useCheckMobileScreen();

    return (
        <div
            className={`${styles.scroll_top_container} ${
                scrollTopVisible ? `${styles.appear}` : ''
            }`}
            onClick={handleScrollToTop}
        >
            <svg className={styles.svg_circle_container} viewBox="0 0 100 100">
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    pathLength="1"
                    className={`${styles.svg_circle} ${styles.bg_transparent}`}
                />
                <m.circle
                    cx="50"
                    cy="50"
                    r="45"
                    className={`${styles.svg_circle}`}
                    style={{ pathLength: isMobile ? 1 : scrollProgress }}
                />
            </svg>
            <button className={styles.up_arrow_container}>
                <svg
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
                </svg>
            </button>
        </div>
    );
};
export default FloatingScrollTop;
