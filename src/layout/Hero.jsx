/* eslint-disable react/no-unescaped-entities */

import { useEffect, useRef } from 'react';
import { useGlobalContext } from '../store';

import selfAvatarSL from '../assets/images/self-images/SL--hero-self-avatar.png';
import selfAvatarLL from '../assets/images/self-images/LL--hero-self-avatar.png';
import selfAvatarMaskSL from '../assets/images/SL--hero-self-avatar-mask-min.png';
import selfAvatarMaskLL from '../assets/images/LL--hero-self-avatar-mask-min.png';

import styles from './Hero.module.css';

const Hero = ({ doubleViewportScrollCompleted }) => {
    const { isLightTheme } = useGlobalContext();

    const selfAvatarMaskRef = useRef(null);
    const animatedHeroEmojiRef = useRef(null);
    const ctaEmailContentRef = useRef(null);
    const heroFrostGlassRef = useRef(null);

    const pravinPortfolioEmail = 'pravincoding49+portfolio@gmail.com';

    useEffect(() => {
        if (animatedHeroEmojiRef.current) {
            setTimeout(() => {
                animatedHeroEmojiRef.current &&
                    animatedHeroEmojiRef.current.classList.remove(`${styles.hidden}`);
            }, 7800);
        }
    }, []);

    const handleCTACopyClick = () => {
        navigator.clipboard.writeText(pravinPortfolioEmail);
        ctaEmailContentRef.current.textContent = 'Copied the email id 👍🏽';

        setTimeout(() => {
            ctaEmailContentRef.current.textContent = 'pravincoding49@gmail.com';
        }, 3000);
    };

    const handleCTABtnClick = () => {
        window.open(
            `mailto:${pravinPortfolioEmail}?subject=Your%20Subject&body=What%20you%20want%20to%20say...`
        );
    };

    return (
        <section
            className={`section ${styles.hero_section} ${
                isLightTheme ? `${styles.hero_section_light_theme}` : ''
            }`}
        >
            <div
                className={`frost_glass ${styles.hero_frost_glass}`}
                ref={heroFrostGlassRef}
            >
                <div className={`section_container ${styles.hero_section_container}`}>
                    <div
                        className={`${styles.hero_content_container} ${
                            doubleViewportScrollCompleted ? `${styles.hide}` : ''
                        }`}
                    >
                        <p className={`${styles.hero_hii}`}>Myself, </p>
                        <div className={styles.hero_self_name_container}>
                            <h1 className={`${styles.hero_self_name}`}>
                                Pravin <br /> Mudaliyar
                            </h1>
                            <span className={`${styles.animated_dot}`}></span>
                        </div>
                        <p className={`body_text_500 ${styles.hero_intro_paragraph}`}>
                            I’m a Full stack <span className="word_highlight_1">Freelance</span>{' '}
                            developer, <span className="word_highlight_1">Frontend Teacher</span> as
                            well as a <span className="word_highlight_1">Web designer</span>. And I
                            might have a thing for content creation and{' '}
                            <span className={styles.singing_word_span}>
                                singing
                                <img
                                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Smileys/Nerd%20Face.webp"
                                    alt="Nerd Face"
                                    className={`${styles.hero_animated_emoji} ${styles.hidden}`}
                                    ref={animatedHeroEmojiRef}
                                />
                                <span className={styles.reduced_motion_emoji}>🫠</span>
                            </span>
                        </p>
                        <div className={styles.hero_cta_container}>
                            <button
                                className={`first_frost_layer ${styles.cta_copy}`}
                                onMouseEnter={() =>
                                    (ctaEmailContentRef.current.textContent = 'Copy the email id')
                                }
                                onMouseLeave={() =>
                                    (ctaEmailContentRef.current.textContent =
                                        'pravincoding49@gmail.com')
                                }
                                onClick={handleCTACopyClick}
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
                            <button className={`${styles.cta_email}`} onClick={handleCTABtnClick}>
                                <div className={styles.cube}>
                                    <span
                                        className={`first_frost_layer ${styles.side} ${styles.top}`}
                                    >
                                        <span className={styles.cube_opacity_trick}>
                                            Open your Gmail
                                        </span>
                                    </span>
                                    <span
                                        className={`first_frost_layer ${styles.side} ${styles.front}`}
                                    >
                                        <span
                                            className={styles.cube_opacity_trick}
                                            ref={ctaEmailContentRef}
                                        >
                                            pravincoding49@gmail.com
                                        </span>
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className={styles.hero_image_container}>
                        <picture
                            className={`${styles.self_avatar_img} ${
                                doubleViewportScrollCompleted ? `${styles.hide}` : ''
                            }`}
                        >
                            <source srcSet={selfAvatarLL} media="(min-width: 1450px)" />
                            <img src={selfAvatarSL} alt="Pravin avatar image" />
                        </picture>
                        <picture className={styles.self_avatar_mask} ref={selfAvatarMaskRef}>
                            <source srcSet={selfAvatarMaskLL} media="(min-width: 1450px)" />
                            <img src={selfAvatarMaskSL} alt="Pravin avatar mask image" />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
