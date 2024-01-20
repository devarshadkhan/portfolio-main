/* eslint-disable react/no-unescaped-entities */

import { m } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { useFloatingMsgContext } from '../store';

import styles from './CodingProjects.module.css';

import xMartLogo from '../assets/logos/xmart-logo-min.svg';
import bookingsLogo from '../assets/logos/bookings-temporary-logo-min.png';
import intervuTracRLogo from '../assets/logos/intervutracr-dark-logo-min.svg';

const CodingProjects = () => {
    const { handleFloatingMsgIdxState } = useFloatingMsgContext();

    const mockups1Ref = useRef(null);
    const mockup2Ref = useRef(null);
    const mockups3Ref = useRef(null);

    return (
        <m.section
            className={`section ${styles.coding_projects_section}`}
            id="coding_projects_section_id"
            onViewportEnter={() => {
                handleFloatingMsgIdxState(1);
            }}
            viewport={{ amount: 0.2 }}
        >
            <div className={`frost_glass ${styles.coding_projects_frost_glass}`}>
                <m.div
                    className={`section_container ${styles.coding_projects_section_container}`}
                    onViewportEnter={() => {
                        handleFloatingMsgIdxState(1);
                    }}
                    viewport={{ amount: 0.35 }}
                >
                    <div
                        className={`section_headings_container ${styles.coding_section_headings_container}`}
                    >
                        <h2>My Coding Projects</h2>
                        <p>The ones that are beyond just Vanilla...</p>
                    </div>
                    <div className={styles.coding_projects_section_column}>
                        <div
                            className={`${styles.project_content_row} ${styles.xmart_coding_project}`}
                        >
                            <div
                                className={`${styles.project_content_container} ${styles.left_aligned}`}
                            >
                                <div className={styles.project_logo_container}>
                                    <img src={xMartLogo} alt="X-mart coding project's logo" />
                                </div>
                                <p className={`body_text_500 ${styles.project_short_description}`}>
                                    A very modern-looking{' '}
                                    <span className="word_highlight_1">frontend website</span> for
                                    online furniture sales. Users can browse, sort, filter, and add
                                    items to their cart from a selection of 23 fictitious furniture
                                    products (fetched from a dummy API).
                                </p>
                                <p className={styles.project_links_container}>
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
                            <m.div
                                ref={mockups1Ref}
                                className={`${styles.project_thumbnail} ${styles.right_aligned}`}
                                onViewportEnter={() => {
                                    mockups1Ref.current.classList.add(`${styles.appear}`);
                                }}
                                viewport={{ once: true, amount: 0.4 }}
                            ></m.div>
                        </div>
                        <div
                            className={`${styles.project_content_row} ${styles.bookings_coding_project}`}
                        >
                            <m.div
                                ref={mockup2Ref}
                                className={`${styles.project_thumbnail} ${styles.left_aligned}`}
                                onViewportEnter={() => {
                                    mockup2Ref.current.classList.add(`${styles.appear}`);
                                }}
                                viewport={{ once: true, amount: 0.4 }}
                            ></m.div>
                            <div
                                className={`${styles.project_content_container} ${styles.right_aligned}`}
                            >
                                <div className={styles.project_logo_container}>
                                    <img src={bookingsLogo} alt="Bookings coding project's logo" />
                                </div>
                                <p className={`body_text_500 ${styles.project_short_description}`}>
                                    <b>Coming soon</b> in a few weeks: A{' '}
                                    <span className="word_highlight_1">MERN project</span> focused
                                    on tour booking, featuring Stripe integration, authentication,
                                    authorization, and more.
                                </p>
                                <p className={`${styles.project_links_container}`}>
                                    <span className="not_allowed link_text body_text_200">
                                        Instagram &#8599;
                                    </span>
                                    <span className="not_allowed link_text body_text_200">
                                        Live &#8599;
                                    </span>
                                    <span className="not_allowed link_text body_text_200">
                                        GitHub &#8599;
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div
                            className={`${styles.project_content_row} ${styles.intervutracr_coding_project}`}
                        >
                            <div
                                className={`${styles.project_content_container} ${styles.left_aligned}`}
                            >
                                <div className={styles.project_logo_container}>
                                    <img
                                        src={intervuTracRLogo}
                                        alt="IntervuTracR coding project's logo"
                                    />
                                </div>
                                <p className={`body_text_500 ${styles.project_short_description}`}>
                                    A straightforward job tracking app (MERN), allowing users to
                                    effortlessly visualize their pending, scheduled, and declined
                                    interviews.
                                </p>
                                <p className={styles.project_links_container}>
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
                            <m.div
                                ref={mockups3Ref}
                                className={`${styles.project_thumbnail} ${styles.right_aligned}`}
                                onViewportEnter={() => {
                                    mockups3Ref.current.classList.add(`${styles.appear}`);
                                }}
                                viewport={{ once: true, amount: 0.4 }}
                            ></m.div>
                        </div>
                        <div className={styles.more_projects_layout_wrapper}>
                            <div className={styles.more_projects_links_container}>
                                <Link
                                    to="/all-coding-projects"
                                    className={`link_text body_text_400`}
                                >
                                    More of my projects{' '}
                                    <span className="right_arrow"> &rarr; </span>
                                </Link>
                                <Link
                                    to="/frontend-students-projects"
                                    className={`link_text body_text_400`}
                                >
                                    My Frontend students projects{' '}
                                    <span className="right_arrow"> &rarr; </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </m.div>
            </div>
        </m.section>
    );
};
export default CodingProjects;
