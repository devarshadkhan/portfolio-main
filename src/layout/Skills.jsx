/* eslint-disable react/no-unescaped-entities */

import { useRef } from 'react';
import { m, useMotionValueEvent } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useFloatingMsgContext, useGlobalContext, useNavbarContext } from '../store';

import { TechnologiesList } from '../components';

import styles from './Skills.module.css';

const Skills = ({
    skillsSectionTransformX,
    doubleViewportScrollProgress,
    doubleViewportScrollCompleted,
}) => {
    const { setAboutPageActiveTab } = useGlobalContext();
    const { handleNavbarVisibilityState } = useNavbarContext();
    const { handleFloatingMsgIdxState } = useFloatingMsgContext();

    const navigate = useNavigate();

    const skillsSectionRef = useRef(null);

    useMotionValueEvent(skillsSectionTransformX, 'change', latest => {
        skillsSectionRef.current.style.transform = `translateX(${latest}%)`;
    });

    const handleMoreAboutMeClick = e => {
        e.preventDefault();

        setAboutPageActiveTab(1);
        handleNavbarVisibilityState(true);
        navigate('/about-me');
    };

    return (
        <m.section
            className={`section ${styles.skills_section}`}
            onViewportEnter={() => {
                handleFloatingMsgIdxState(0);
            }}
            viewport={{ amount: 0.2 }}
            ref={skillsSectionRef}
        >
            <div className={`frost_glass ${styles.skills_frost_glass}`}>
                <m.div
                    className={`section_container ${styles.skills_section_container}`}
                    onViewportEnter={() => {
                        handleFloatingMsgIdxState(0);
                    }}
                    viewport={{ amount: 1 }}
                >
                    <div className={`section_headings_container`}>
                        <h2>My Skills</h2>
                        <p>Diverse Skills, Focused Expertise...</p>
                    </div>
                    <div className={styles.skills_section_row}>
                        <TechnologiesList
                            doubleViewportScrollProgress={doubleViewportScrollProgress}
                            doubleViewportScrollCompleted={doubleViewportScrollCompleted}
                        />
                        <div className={styles.skills_content_container}>
                            <p className="body_text_500">
                                I'm a skilled software developer with experience in Node.js and
                                Express.js, and command in CSS, JavaScript, and React.
                            </p>
                            <p className="body_text_500">
                                Besides being a Frontend teacher and a Full-stack developer, I also
                                enjoy video editing and crafting web designs.
                            </p>
                            <p className="body_text_500">
                                Over the last 2 years, I've shared my coding, teaching, web
                                designing, and video editing journey through{' '}
                                <span className="word_highlight_1">400+ posts</span> (yes, 400+
                                days) on{' '}
                                <a
                                    href="https://www.linkedin.com/feed/update/urn:li:activity:7115480581169176576/"
                                    className="link_text"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn <span className="up_arrow">&#8599;</span>
                                </a>
                                .
                            </p>
                            <p className={`body_text_500 ${styles.more_about_me}`}>
                                <a className="link_text" onClick={handleMoreAboutMeClick}>
                                    Know more about me <span className="right_arrow"> &rarr; </span>
                                </a>
                            </p>
                        </div>
                    </div>
                </m.div>
            </div>
        </m.section>
    );
};
export default Skills;
