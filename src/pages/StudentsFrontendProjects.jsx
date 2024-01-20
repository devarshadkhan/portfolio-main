import { useEffect, useState } from 'react';
import { useMotionValueEvent, usePresence, useScroll } from 'framer-motion';

import {
    handlePageTransitionScreenArrival,
    handlePageTransitionScreenRemoval,
} from '../utils/helpers';
import { useGlobalContext, useNavbarContext } from '../store';
import FloatingScrollTop from '../components/FloatingScrollTop';

import styles from './StudentsFrontendProjects.module.css';

import exploriaStudentsMockupLM from '../assets/mockups-and-thumbnails/LM--students-exploria-mockup-min.png';
import sliciciousStudentsMockupLM from '../assets/mockups-and-thumbnails/LM--students-slicicious-mockup-min.png';
import exploriaStudentsMockupSL from '../assets/mockups-and-thumbnails/SL--students-exploria-mockup-min.png';
import sliciciousStudentsMockupSL from '../assets/mockups-and-thumbnails/SL--students-slicicious-mockup-min.png';
import exploriaStudentsMockupM from '../assets/mockups-and-thumbnails/M--students-exploria-mockup-min.png';
import sliciciousStudentsMockupM from '../assets/mockups-and-thumbnails/M--students-slicicious-mockup-min.png';

import yunusImg from '../assets/images/others-portraits/yunus-min.webp';
import hadiImg from '../assets/images/others-portraits/hadi-min.webp';

const StudentsFrontendProjectsPage = () => {
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
        <main className={`${styles.students_projects_page_main}`}>
            <div className={`frost_glass frost_glass_page_padding_top ${styles.students_projects_page_frost_glass}`}>
                <section
                    className={`section_container ${styles.students_projects_section_container}`}
                >
                    <div className={styles.students_projects_column}>
                        <div
                            className={`first_frost_layer ${styles.students_project_row} ${styles.exploria_project} ${styles.students_project_left_aligned}`}
                        >
                            <div className={styles.students_project_content_container}>
                                <div className={styles.students_project_headings_container}>
                                    <h2 className="body_text_1000">Exploria</h2>
                                    <p className="body_text_400">
                                        Redefining the Touring Experience.
                                    </p>
                                </div>
                                <div className={styles.students_projects_content_column}>
                                    <p className="body_text_500">
                                        Exploria is a practice front-end website where users can
                                        book tours online. As the designer, I used Figma to create
                                        the user interface.
                                    </p>
                                    <p className="body_text_500">
                                        The journey became more fulfilling as I worked with my
                                        Frontend course students, guiding them through the
                                        development process. Together, we turned the design into a
                                        fully functional landing page using HTML, CSS, and JS.
                                    </p>
                                    <div className={styles.contributors_container}>
                                        <p className={`body_text_400 ${styles.contributors_text}`}>
                                            Contributors:
                                        </p>
                                        <div className={styles.students_pictures_layout_wrapper}>
                                            <a
                                                href="https://www.linkedin.com/in/yunus-shaikh-07ba22204/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.student_picture}
                                            >
                                                <img
                                                    src={yunusImg}
                                                    alt="Yunus self portrait image"
                                                />
                                                <span className={styles.student_profile_link}>
                                                    &#8599;
                                                </span>
                                            </a>
                                            <a
                                                href="https://linkedin.com/in/abdul-haadi-momin-5654a526b"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.student_picture}
                                            >
                                                <img src={hadiImg} alt="Hadi self portrait image" />
                                                <span className={styles.student_profile_link}>
                                                    &#8599;
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.project_links_container}>
                                        <a
                                            href="https://hady-exploria.netlify.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link_text body_text_400"
                                        >
                                            Live <span className="up_arrow">&#8599;</span>
                                        </a>
                                        <a
                                            href="https://github.com/hxdy-1/Exploria-live"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link_text body_text_400"
                                        >
                                            More info <span className="up_arrow">&#8599;</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.students_project_thumbnail_container}>
                                <picture>
                                    <source
                                        srcSet={exploriaStudentsMockupM}
                                        media="(min-width: 1450px)"
                                    />
                                    <source
                                        srcSet={exploriaStudentsMockupSL}
                                        media="(min-width: 1051px)"
                                    />
                                    <img
                                        src={exploriaStudentsMockupLM}
                                        alt="Exploria frontend students project mockups"
                                    />
                                </picture>
                            </div>
                        </div>
                        <div
                            className={`first_frost_layer ${styles.students_project_row} ${styles.slicicious_project} ${styles.students_project_right_aligned}`}
                        >
                            <div className={styles.students_project_content_container}>
                                <div className={styles.students_project_headings_container}>
                                    <h2 className="body_text_1000">Slicicious</h2>
                                    <p className="body_text_400">
                                        Where every bite tells a Delicious story.
                                    </p>
                                </div>
                                <div className={styles.students_projects_content_column}>
                                    <p className="body_text_500" style={{ marginTop: '1rem' }}>
                                        Will be updated soon...
                                    </p>
                                </div>
                            </div>
                            <div className={styles.students_project_thumbnail_container}>
                                <picture>
                                    <source
                                        srcSet={sliciciousStudentsMockupSL}
                                        media="(min-width: 1051px)"
                                    />
                                    <source
                                        srcSet={sliciciousStudentsMockupM}
                                        media="(min-width: 1450px)"
                                    />
                                    <img
                                        src={sliciciousStudentsMockupLM}
                                        alt="Slicicious frontend students project image"
                                    />
                                </picture>
                            </div>
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
export default StudentsFrontendProjectsPage;
