/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from 'react';
import { useMotionValueEvent, usePresence, useScroll } from 'framer-motion';

import { useGlobalContext, useNavbarContext } from '../store';
import {
    handlePageTransitionScreenArrival,
    handlePageTransitionScreenRemoval,
} from '../utils/helpers';
import FloatingScrollTop from '../components/FloatingScrollTop';

import styles from './AllCodingProjects.module.css';
import homePageCodingProjectsStyles from '../layout/CodingProjects.module.css';

import xMartLogo from '../assets/logos/xmart-logo-min.svg';
import portfolioLogo from '../assets/logos/primary-website-logo-slight-brighter-min.png';
import intervuTracRLogo from '../assets/logos/intervutracr-dark-logo-min.svg';

const AllCodingProjectsPage = () => {
    const { handleScrollRestorationCodingProject } = useGlobalContext();
    const { handleNavbarVisibilityState } = useNavbarContext();

    const [isPresent, safeToRemove] = usePresence();
    const [scrollTopVisibility, setScrollTopVisibility] = useState(false);

    const { scrollYProgress } = useScroll();
    useMotionValueEvent(scrollYProgress, 'change', latest => {
        if (latest === 1) return;

        if (latest > 0.01) {
            setScrollTopVisibility(true);
        } else {
            setScrollTopVisibility(false);
        }
    });

    useEffect(() => {
        handleNavbarVisibilityState(true);
        handlePageTransitionScreenRemoval();
    }, [handleNavbarVisibilityState]);

    useEffect(() => {
        if (!isPresent) {
            handleScrollRestorationCodingProject(true);
            handlePageTransitionScreenArrival(safeToRemove);
        }
    }, [isPresent, safeToRemove, handleScrollRestorationCodingProject]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <main className={`${styles.all_coding_projects_page_main}`}>
            <div
                className={`frost_glass frost_glass_page_padding_top ${styles.all_coding_projects_page_frost_glass}`}
            >
                <section
                    className={`section_container ${styles.all_coding_projects_section_container}`}
                >
                    <div className={styles.all_coding_projects_column}>
                        <div
                            className={`${homePageCodingProjectsStyles.project_content_row} ${styles.project_content_row}  ${styles.portfolio_coding_project}`}
                        >
                            <div
                                className={`${homePageCodingProjectsStyles.project_thumbnail} ${styles.project_thumbnail} ${homePageCodingProjectsStyles.left_aligned} ${homePageCodingProjectsStyles.appear}`}
                            ></div>
                            <div
                                className={`${homePageCodingProjectsStyles.project_content_container} ${homePageCodingProjectsStyles.right_aligned}`}
                            >
                                <div
                                    className={`${homePageCodingProjectsStyles.project_logo_container} ${styles.project_logo_container}`}
                                >
                                    <img
                                        src={portfolioLogo}
                                        alt="Portfolio coding project's logo"
                                    />
                                </div>
                                <p
                                    className={`body_text_500 ${homePageCodingProjectsStyles.project_short_description}`}
                                >
                                    A personal portfolio website designed to showcase my upcoming{' '}
                                    <span className="word_highlight_1">Full stack projects</span>.
                                    It's a frontend website created with the concept of
                                    glassmorphism, featuring a clean and creative (unusual 😅)
                                    design.
                                </p>
                                <p
                                    className={`${homePageCodingProjectsStyles.project_links_container}`}
                                >
                                    <a
                                        href="https://www.linkedin.com/feed/update/urn:li:activity:7130750011830587392/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link_text body_text_200"
                                    >
                                        LinkedIn <span className="up_arrow">&#8599;</span>
                                    </a>
                                    <a
                                        href="https://pravin-x-mart.netlify.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link_text body_text_200"
                                    >
                                        Live <span className="up_arrow">&#8599;</span>
                                    </a>
                                    <a
                                        href="https://github.com/PravinMudaliyar49/X-Mart"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link_text body_text_200"
                                    >
                                        GitHub <span className="up_arrow">&#8599;</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div
                            className={`${homePageCodingProjectsStyles.project_content_row} ${homePageCodingProjectsStyles.xmart_coding_project}`}
                        >
                            <div
                                className={`${homePageCodingProjectsStyles.project_content_container} ${homePageCodingProjectsStyles.left_aligned}`}
                            >
                                <div
                                    className={homePageCodingProjectsStyles.project_logo_container}
                                >
                                    <img src={xMartLogo} alt="X-mart coding project's logo" />
                                </div>
                                <p
                                    className={`body_text_500 ${homePageCodingProjectsStyles.project_short_description}`}
                                >
                                    A very modern-looking{' '}
                                    <span className="word_highlight_1">frontend website</span> for
                                    online furniture sales. Users can browse, sort, filter, and add
                                    items to their cart from a selection of 23 fictitious furniture
                                    products (fetched from a dummy API).
                                </p>
                                <p className={homePageCodingProjectsStyles.project_links_container}>
                                    <a
                                        href="https://www.youtube.com/watch?v=hnSNJiHYwIQ"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link_text body_text_200"
                                    >
                                        YouTube <span className="up_arrow">&#8599;</span>
                                    </a>
                                    <a
                                        href="https://pravin-x-mart.netlify.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link_text body_text_200"
                                    >
                                        Live <span className="up_arrow">&#8599;</span>
                                    </a>
                                    <a
                                        href="https://github.com/PravinMudaliyar49/X-Mart"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link_text body_text_200"
                                    >
                                        GitHub <span className="up_arrow">&#8599;</span>
                                    </a>
                                </p>
                            </div>
                            <div
                                className={`${homePageCodingProjectsStyles.project_thumbnail} ${homePageCodingProjectsStyles.right_aligned} ${homePageCodingProjectsStyles.appear}`}
                            ></div>
                        </div>
                        <div
                            className={`${homePageCodingProjectsStyles.project_content_row} ${homePageCodingProjectsStyles.intervutracr_coding_project}`}
                        >
                            <div
                                className={`${homePageCodingProjectsStyles.project_content_container} ${homePageCodingProjectsStyles.left_aligned}`}
                            >
                                <div
                                    className={homePageCodingProjectsStyles.project_logo_container}
                                >
                                    <img
                                        src={intervuTracRLogo}
                                        alt="IntervuTracR coding project's logo"
                                    />
                                </div>
                                <p
                                    className={`body_text_500 ${homePageCodingProjectsStyles.project_short_description}`}
                                >
                                    A straightforward job tracking app (MERN), allowing users to
                                    effortlessly visualize their pending, scheduled, and declined
                                    interviews.
                                </p>
                                <p className={homePageCodingProjectsStyles.project_links_container}>
                                    <a
                                        href="https://www.linkedin.com/posts/pravinm-tech_learninpublic-coding-videoediting-activity-7098081379086737408-gphs/?utm_source=share&utm_medium=member_desktop"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link_text body_text_200"
                                    >
                                        LinkedIn <span className="up_arrow">&#8599;</span>
                                    </a>
                                    <a
                                        href="https://pravin-intervutracr.cyclic.cloud/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link_text body_text_200"
                                    >
                                        Live <span className="up_arrow">&#8599;</span>
                                    </a>
                                    <a
                                        href="https://github.com/PravinMudaliyar49/IntervuTracR"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link_text body_text_200"
                                    >
                                        GitHub <span className="up_arrow">&#8599;</span>
                                    </a>
                                </p>
                            </div>
                            <div
                                className={`${homePageCodingProjectsStyles.project_thumbnail} ${homePageCodingProjectsStyles.right_aligned} ${homePageCodingProjectsStyles.appear}`}
                            ></div>
                        </div>
                    </div>
                </section>
            </div>
            <FloatingScrollTop
                scrollTopVisible={scrollTopVisibility}
                handleScrollToTop={scrollToTop}
                scrollProgress={scrollYProgress}
            />
        </main>
    );
};
export default AllCodingProjectsPage;
