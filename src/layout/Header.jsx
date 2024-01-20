import { NavLink, useLocation } from 'react-router-dom';
import { useGlobalContext, useNavbarContext } from '../store';
import { navLinks } from '../utils/constants';

import styles from './Header.module.css';
import { useRef } from 'react';

import mainLogo from '../assets/logos/primary-website-logo-min.png';
import { ThemeToggle } from '../components';

const Header = () => {
    const {
        handleThemeChangeToggle,
        isLightTheme,
        scrollToTop: homePageScrollToTop,
    } = useGlobalContext();
    const { navbarVisibility } = useNavbarContext();

    const location = useLocation();

    const floatingNavbar = useRef(null);

    if (floatingNavbar.current) {
        if (!navbarVisibility) {
            floatingNavbar.current.classList.add(`${styles.hide_navbar}`);
            setTimeout(() => {
                if (floatingNavbar.current.classList.contains(`${styles.hide_navbar}`)) {
                    floatingNavbar.current.classList.add(`${styles.remove_navbar}`);
                }
            }, 400);
        } else {
            floatingNavbar.current.classList.remove(`${styles.hide_navbar}`);
            floatingNavbar.current.classList.remove(`${styles.remove_navbar}`);
        }
    }

    const otherPagesSrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <header className={styles.primary_header}>
            <div
                className={styles.header_logo_container}
                onClick={location.pathname === '/' ? homePageScrollToTop : otherPagesSrollToTop}
            >
                <img src={mainLogo} alt="Primary PM logo" />
            </div>
            <nav className={`second_frost_layer ${styles.floating_nav_wrapper}`}>
                <ul className={styles.floating_nav_container} ref={floatingNavbar}>
                    {navLinks.map(({ link, id, name }) => (
                        <li key={id} className={`body_text_400 ${styles.navlink_container}`}>
                            <NavLink
                                to={link}
                                className={({ isActive }) =>
                                    `${styles.navlink} ${
                                        isActive ? `word_highlight_1 ${styles.active}` : ''
                                    }`
                                }
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <button
                className={`${styles.theme_toggle_icon_container}`}
                onClick={() => handleThemeChangeToggle()}
                title={`Switch to ${isLightTheme ? 'dark' : 'light'} mode ${
                    isLightTheme ? '(recommended)' : ''
                }`}
            >
                <ThemeToggle />
            </button>
        </header>
    );
};
export default Header;
