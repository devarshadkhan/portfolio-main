/* eslint-disable react/no-unescaped-entities */

import { useRef, useState } from 'react';
import { m, useMotionValueEvent, useScroll } from 'framer-motion';
import { useFloatingMsgContext } from '../store';

import primaryAccentGraphicSL from '../assets/accent-graphics/SL--primary-accent-graphic-min.png';
import primaryAccentGraphicM from '../assets/accent-graphics/M--primary-accent-graphic-min.png';
import penToolAccentGraphic from '../assets/accent-graphics/pen-tool-accent-grapic-min.svg';

import styles from './DesignProjects.module.css';

const figmaDesignLinks = [
    'https://www.figma.com/file/3aOgABH0i6k6WY75re4hMa/Exploria-public?type=design&node-id=1%3A2&mode=design&t=ZmDtBPqEaYe293Br-1',
    'https://www.figma.com/file/csWwYoWQFPwggvCTWcLRJ6/BEFit?type=design&node-id=121%3A1592&mode=design&t=ZmDtBPqEaYe293Br-1',
];

const DesignProjects = () => {
    const { handleFloatingMsgIdxState } = useFloatingMsgContext();

    const laptopScreenLCDRef = useRef(null);
    const mobileDesignThumbnailsContRef = useRef(null);
    const smMobileModelScreenRef = useRef(null);

    const [activeDesignNum, setActiveDesignNum] = useState(0);
    const [activeDesignLink, setActiveDesignLink] = useState(figmaDesignLinks[0]);

    const [warningTooltipOpen, setWarningTooltipOpen] = useState(false);

    const { scrollY: laptopScreenScrollY } = useScroll({ container: laptopScreenLCDRef });

    useMotionValueEvent(laptopScreenScrollY, 'change', latest => {
        if (latest === 0) {
            mobileDesignThumbnailsContRef.current.style.top = `0px`;
            return;
        }

        mobileDesignThumbnailsContRef.current.style.top = `-${latest + 10}px`;
    });

    const handleActiveDesignChange = btnNum => {
        setActiveDesignNum(btnNum);
        setActiveDesignLink(figmaDesignLinks[btnNum]);
    };

    const handleDesignChangeBtnClick = function () {
        const btnNum = this;
        handleActiveDesignChange(btnNum);

        if (btnNum === 0) {
            laptopScreenLCDRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',
            });

            smMobileModelScreenRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        } else {
            laptopScreenLCDRef.current.scrollTo({
                // 70rem:
                top: 70 * 16 + 8,
                behavior: 'smooth',
            });

            smMobileModelScreenRef.current.scrollTo({
                top: 70 * 16 + 8,
                behavior: 'smooth',
            });
        }
    };

    return (
        <m.section
            className={`section ${styles.design_projects_section}`}
            onViewportEnter={() => {
                handleFloatingMsgIdxState(2);
            }}
            viewport={{ amount: 0.2 }}
        >
            <div className={`frost_glass ${styles.design_projects_frost_glass}`}>
                <m.div
                    className={`section_container ${styles.design_projects_section_container}`}
                    onViewportEnter={() => {
                        handleFloatingMsgIdxState(2);
                    }}
                    viewport={{ amount: 1 }}
                >
                    <div className={`section_headings_container`}>
                        <h2>My Design Projects</h2>
                        <p>The ones I've been working on for the past few months...</p>
                    </div>
                    <div className={styles.objects_container}>
                        <div className={styles.above_table_container}>
                            <div className={styles.mobile_layout_wrapper}>
                                <div className={`${styles.mobile_phone_container}`}>
                                    <div className={styles.mobile_screen}>
                                        <div className={styles.brove}>
                                            <span className={styles.speaker}></span>
                                        </div>
                                        <div
                                            className={styles.mobile_design_thumbnails_container}
                                            ref={mobileDesignThumbnailsContRef}
                                        >
                                            <div className={styles.first_mobile_design}></div>
                                            <div className={styles.second_mobile_design}></div>
                                        </div>
                                    </div>
                                    <div className={styles.mobile_button}></div>
                                    <div className={styles.right_side_buttons_container}>
                                        <div className={styles.right_side_btn_1}></div>
                                        <div className={styles.right_side_btn_2}></div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.laptop_layout_wrapper}>
                                <div className={styles.laptop_container}>
                                    <div className={styles.laptop_screen}>
                                        <div
                                            className={styles.laptop_screen_lcd}
                                            ref={laptopScreenLCDRef}
                                        >
                                            <div
                                                className={
                                                    styles.desktop_design_thumbnails_container
                                                }
                                                onClick={() => setWarningTooltipOpen(prev => !prev)}
                                            >
                                                <m.div
                                                    className={styles.first_desktop_design}
                                                    onViewportEnter={() =>
                                                        handleActiveDesignChange(0)
                                                    }
                                                    onViewportLeave={() =>
                                                        handleActiveDesignChange(1)
                                                    }
                                                ></m.div>
                                                <m.div
                                                    className={styles.second_desktop_design}
                                                    onViewportEnter={() =>
                                                        handleActiveDesignChange(1)
                                                    }
                                                    onViewportLeave={() =>
                                                        handleActiveDesignChange(0)
                                                    }
                                                ></m.div>
                                            </div>
                                        </div>
                                        <div
                                            className={`${styles.warning_tooltip} ${
                                                warningTooltipOpen ? `${styles.open}` : ''
                                            }`}
                                        >
                                            <p className={`body_text_200  ${styles.warning_msg}`}>
                                                Please don't interact with this, it's just a design
                                                file. You can click the Figma link or continue
                                                scrolling inside the laptop model.
                                            </p>
                                            <button
                                                className={styles.warning_tooltip_close}
                                                onClick={() => setWarningTooltipOpen(prev => !prev)}
                                            >
                                                &times;
                                            </button>
                                        </div>
                                        <div
                                            className={`${styles.laptop_screen_highlight} ${styles.one}`}
                                        ></div>
                                        <div
                                            className={`${styles.laptop_screen_highlight} ${styles.two}`}
                                        ></div>
                                        <div
                                            className={`${styles.laptop_screen_highlight} ${styles.three}`}
                                        ></div>
                                    </div>
                                    <div className={`${styles.laptop_keyboard}`}></div>
                                </div>
                            </div>

                            <div className={styles.ipad_layout_wrapper}>
                                <div className={styles.ipad_container}>
                                    <div
                                        className={`body_text_500 ${styles.design_figma_link_container}`}
                                    >
                                        <a
                                            href={`${activeDesignLink}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`link_text ${styles.design_figma_link}`}
                                        >
                                            Figma design link{' '}
                                            <span className="up_arrow">&#8599;</span>
                                        </a>
                                    </div>
                                    <div className={styles.ipad_screen}>
                                        <button
                                            className={`body_text_500 ${
                                                styles.designs_changing_button
                                            } ${activeDesignNum === 0 ? `${styles.active}` : ''}`}
                                            onClick={handleDesignChangeBtnClick.bind(0)}
                                        >
                                            1. Exploria
                                        </button>
                                        <button
                                            className={`body_text_500 ${
                                                styles.designs_changing_button
                                            } ${activeDesignNum === 1 ? `${styles.active}` : ''}`}
                                            onClick={handleDesignChangeBtnClick.bind(1)}
                                        >
                                            2. BeFit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.table}></div>
                        <div className={styles.sm_mobile_layout_wrapper}>
                            <div className={`${styles.mobile_phone_container}`}>
                                <div className={styles.mobile_screen} ref={smMobileModelScreenRef}>
                                    <div className={styles.brove}>
                                        <span className={styles.speaker}></span>
                                    </div>
                                    <div
                                        className={styles.sm_design_thumbnails_container}
                                        onClick={() => setWarningTooltipOpen(prev => !prev)}
                                    >
                                        <m.div
                                            className={styles.first_mobile_design}
                                            onViewportEnter={() => handleActiveDesignChange(0)}
                                            onViewportLeave={() => handleActiveDesignChange(1)}
                                        ></m.div>
                                        <m.div
                                            className={styles.second_mobile_design}
                                            onViewportEnter={() => handleActiveDesignChange(1)}
                                            onViewportLeave={() => handleActiveDesignChange(0)}
                                        ></m.div>
                                    </div>
                                </div>
                                <div
                                    className={`${styles.warning_tooltip} ${
                                        warningTooltipOpen ? `${styles.open}` : ''
                                    }`}
                                >
                                    <p className={`body_text_200 ${styles.warning_msg}`}>
                                        Please don't interact with this, it's just a design file.
                                        You can click the Figma link or continue scrolling inside
                                        the mobile model.
                                    </p>
                                    <button
                                        className={styles.warning_tooltip_close}
                                        onClick={() => setWarningTooltipOpen(prev => !prev)}
                                    >
                                        &times;
                                    </button>
                                </div>
                                <div className={styles.mobile_button}></div>
                                <div className={styles.right_side_buttons_container}>
                                    <div className={styles.right_side_btn_1}></div>
                                    <div className={styles.right_side_btn_2}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </m.div>
                <div className={`primary_accent_graphic_container`}>
                    <picture>
                        <source srcSet={primaryAccentGraphicM} media="(min-width: 1450px)" />
                        <img
                            src={primaryAccentGraphicSL}
                            alt="Design section primary-accent-graphic image"
                        />
                    </picture>
                </div>
                <div className={styles.pentool_accent_graphic_container}>
                    <img src={penToolAccentGraphic} alt="Pen tool accent graphic image" />
                </div>
            </div>
        </m.section>
    );
};

export default DesignProjects;
