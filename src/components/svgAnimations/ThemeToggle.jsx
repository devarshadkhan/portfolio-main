import { m } from 'framer-motion';
import { useGlobalContext } from '../../store';

import styles from './ThemeToggle.module.css';

const parentSVGVariant = {
    light: { transform: 'rotate(90deg)', transition: { type: 'spring', mass: 2, stiffness: 100 } },
    dark: { transform: 'rotate(40deg)', transition: { type: 'spring', mass: 4, stiffness: 300 } },
};

const centerCircleVariant = {
    light: { r: 5 },
    dark: { r: 9 },
};

const maskedCircleVariant = {
    light: { cx: 30, cy: 0 },
    dark: { cx: 12, cy: 4 },
};

const parentSunraysVariant = {
    light: {
        transition: {
            staggerChildren: 0.07,
        },
    },
    dark: {
        transition: {
            staggerDirection: -1,
        },
    },
};

const sunRaysVariant = {
    initial: { opacity: 0 },
    light: { opacity: 1 },
    dark: { opacity: 0 },
};

const ThemeToggle = () => {
    const { isLightTheme } = useGlobalContext();

    return (
        <m.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            variants={parentSVGVariant}
            animate={isLightTheme ? 'dark' : 'light'}
            className={`${styles.theme_toggle_svg} ${
                isLightTheme ? `${styles.theme_toggle_light_theme}` : ''
            }`}
        >
            <mask id="mask">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <m.circle cx="12" cy="4" r="9" fill="black" variants={maskedCircleVariant} />
            </mask>
            <m.circle
                cx="12"
                cy="12"
                r="9"
                mask="url(#mask)"
                variants={centerCircleVariant}
                className={styles.center_circle}
            />
            <m.g variants={parentSunraysVariant} className={styles.sunray_container}>
                <m.line x1="12" y1="1" x2="12" y2="3" variants={sunRaysVariant} />
                <m.line x1="18.36" y1="5.64" x2="19.78" y2="4.22" variants={sunRaysVariant} />
                <m.line x1="21" y1="12" x2="23" y2="12" variants={sunRaysVariant} />
                <m.line x1="18.36" y1="18.36" x2="19.78" y2="19.78" variants={sunRaysVariant} />
                <m.line x1="12" y1="21" x2="12" y2="23" variants={sunRaysVariant} />
                <m.line x1="4.22" y1="19.78" x2="5.64" y2="18.36" variants={sunRaysVariant} />
                <m.line x1="1" y1="12" x2="3" y2="12" variants={sunRaysVariant} />
                <m.line x1="4" y1="4" x2="5.64" y2="5.64" variants={sunRaysVariant} />
            </m.g>
        </m.svg>
    );
};
export default ThemeToggle;
