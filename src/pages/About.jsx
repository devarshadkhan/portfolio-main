/* eslint-disable react/no-unescaped-entities */

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, m, useMotionValueEvent, usePresence, useScroll } from 'framer-motion';

import { useGlobalContext, useNavbarContext } from '../store';

import styles from './About.module.css';

import selfCasualPic from '../assets/images/self-images/self-casual-pic-min.jpg';
import selfDescentPic from '../assets/images/self-images/self-descent-pic-min.webp';
import selfAvatar from '../assets/images/self-images/self-avatar-3-min.jpg';
import primaryAccentGraphicSL from '../assets/accent-graphics/SL--primary-accent-graphic-min.png';
import primaryAccentGraphicM from '../assets/accent-graphics/M--primary-accent-graphic-min.png';

import {
    handlePageTransitionScreenArrival,
    handlePageTransitionScreenRemoval,
} from '../utils/helpers';
import FloatingScrollTop from '../components/FloatingScrollTop';

const selfImagesArr = [
    { path: selfCasualPic, alt: 'Pravin portrait image 1' },
    { path: selfDescentPic, alt: 'Pravin portrait image 2' },
    { path: selfAvatar, alt: 'Pravin portrait image 3' },
];

const verticalTimelineAnimationLeft = {
    contentContainer: {
        initial: { x: '-30%', opacity: 0 },
        animate: { x: '0', opacity: 1 },
        transition: { type: 'spring', duration: 0.8, damping: 14, mass: 1.7, delay: 0.4 },
    },
    dateContainer: {
        initial: { x: '-30px', opacity: 0 },
        animate: { x: '0', opacity: 1 },
        transition: { type: 'spring', duration: 0.8, damping: 15, mass: 1.3, delay: 0.8 },
    },
    viewport: { once: true, amount: 0.3 },
};

const verticalTimelineAnimationRight = {
    contentContainer: {
        initial: { x: '30%', opacity: 0 },
        animate: { x: '0', opacity: 1 },
        transition: { type: 'spring', duration: 0.8, damping: 14, mass: 1.7, delay: 0.4 },
    },
    dateContainer: {
        initial: { x: '30px', opacity: 0 },
        animate: { x: '0', opacity: 1 },
        transition: { type: 'spring', duration: 0.8, damping: 15, mass: 1.3, delay: 0.8 },
    },
};

const contentContainerLeftAnimationObj = {
    initial: verticalTimelineAnimationLeft.contentContainer.initial,
    whileInView: verticalTimelineAnimationLeft.contentContainer.animate,
    transition: verticalTimelineAnimationLeft.contentContainer.transition,
    viewport: verticalTimelineAnimationLeft.viewport,
};

const contentContainerRightAnimationObj = {
    initial: verticalTimelineAnimationRight.contentContainer.initial,
    whileInView: verticalTimelineAnimationRight.contentContainer.animate,
    transition: verticalTimelineAnimationRight.contentContainer.transition,
    viewport: verticalTimelineAnimationLeft.viewport,
};

const middleCircleAnimationObj = {
    initial: { scale: 0.4, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: { type: 'spring', duration: 0.8, damping: 14, mass: 1.7 },
    viewport: verticalTimelineAnimationLeft.viewport,
};

const dateContainerLeftAnimationObj = {
    initial: verticalTimelineAnimationLeft.dateContainer.initial,
    whileInView: verticalTimelineAnimationLeft.dateContainer.animate,
    transition: verticalTimelineAnimationLeft.dateContainer.transition,
    viewport: verticalTimelineAnimationLeft.viewport,
};

const dateContainerRightAnimationObj = {
    initial: verticalTimelineAnimationRight.dateContainer.initial,
    whileInView: verticalTimelineAnimationRight.dateContainer.animate,
    transition: verticalTimelineAnimationRight.dateContainer.transition,
    viewport: verticalTimelineAnimationLeft.viewport,
};

const AboutPage = () => {
    const { aboutPageActiveTab } = useGlobalContext();
    const { handleNavbarVisibilityState } = useNavbarContext();

    const [scrollTopVisibility, setScrollTopVisibility] = useState(false);

    const aboutMainRef = useRef(null);
    const tabHighlightRef = useRef(null);
    const firstTabBtnRef = useRef(null);
    const secondTabBtnRef = useRef(null);

    const [activeTabNum, setActiveTabNum] = useState(0);

    const { scrollYProgress } = useScroll();

    const [isPresent, safeToRemove] = usePresence();

    useMotionValueEvent(scrollYProgress, 'change', latest => {
        if (latest === 1) return;

        if (latest > 0.01) {
            handleNavbarVisibilityState(false);
            setScrollTopVisibility(true);
        } else {
            handleNavbarVisibilityState(true);
            setScrollTopVisibility(false);
        }
    });

    const handleTabHighlight = coords => {
        tabHighlightRef.current.style.width = `${coords.width}px`;
        tabHighlightRef.current.style.height = `${coords.height}px`;
        tabHighlightRef.current.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    };

    const handleActiveTab = (eventObj, tabNum) => {
        setActiveTabNum(tabNum);

        const mainPaddingVert = Number.parseFloat(
            window.getComputedStyle(aboutMainRef.current).paddingTop
        );
        const mainPaddingHor = Number.parseFloat(
            window.getComputedStyle(aboutMainRef.current).paddingLeft
        );

        const coords = {
            width: eventObj.target.getBoundingClientRect().width,
            height: eventObj.target.getBoundingClientRect().height,

            top: eventObj.target.getBoundingClientRect().top + window.scrollY - mainPaddingVert,
            left: eventObj.target.getBoundingClientRect().left + window.scrollX - mainPaddingHor,
        };

        handleTabHighlight(coords);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        aboutPageActiveTab === 0 && firstTabBtnRef.current && firstTabBtnRef.current.click();
        aboutPageActiveTab === 1 && secondTabBtnRef.current && secondTabBtnRef.current.click();
    }, [aboutPageActiveTab]);

    useEffect(() => {
        handlePageTransitionScreenRemoval();
    }, []);

    useEffect(() => {
        if (!isPresent) {
            handlePageTransitionScreenArrival(safeToRemove);
        }
    }, [isPresent, safeToRemove]);

    let aboutContentToDisplay = <PersonalTabContent />;

    if (activeTabNum === 1) aboutContentToDisplay = <ProfessionTabContent />;

    if (activeTabNum === 2) aboutContentToDisplay = <TimelineTabContent />;

    return (
        <main className={`${styles.about_page_main}`} ref={aboutMainRef}>
            <div
                className={`frost_glass frost_glass_page_padding_top ${styles.about_page_frost_glass}`}
            >
                <section className={`section_container ${styles.about_section_container}`}>
                    <div className={styles.self_pic_container}>
                        {selfImagesArr.map((imgObj, index) => (
                            <img
                                key={imgObj.path}
                                src={imgObj.path}
                                alt={`${imgObj.alt}`}
                                className={activeTabNum === index ? `${styles.active_pic}` : ''}
                            />
                        ))}
                    </div>
                    <div className={`body_text_400 ${styles.tabs_container}`}>
                        <button
                            className={`first_frost_layer ${styles.tab_btn}`}
                            onClick={e => handleActiveTab(e, 0)}
                            ref={firstTabBtnRef}
                        >
                            Personal life
                        </button>
                        <button
                            className={`first_frost_layer ${styles.tab_btn}`}
                            onClick={e => handleActiveTab(e, 1)}
                            ref={secondTabBtnRef}
                        >
                            Development journey
                        </button>
                        <button
                            className={`first_frost_layer ${styles.tab_btn}`}
                            onClick={e => handleActiveTab(e, 2)}
                        >
                            Last 3.5 years timeline
                        </button>

                        <div
                            className={`about_page_tab_btn_highlight_general_styling ${styles.tab_btn_highlight}`}
                            ref={tabHighlightRef}
                        ></div>
                    </div>
                    <div
                        className={`${styles.about_content_layout_wrapper} ${
                            activeTabNum === 2
                                ? `${styles.about_content_layout_wrapper_timeline}`
                                : ''
                        }`}
                    >
                        <AnimatePresence mode="wait">{aboutContentToDisplay}</AnimatePresence>
                    </div>
                </section>
                <div
                    className={`primary_accent_graphic_container ${styles.about_page_primary_accent_graphic}`}
                >
                    <picture>
                        <source srcSet={primaryAccentGraphicM} media="(min-width: 1450px)" />
                        <img
                            src={primaryAccentGraphicSL}
                            alt="About page primary-accent-graphic image"
                        />
                    </picture>
                </div>
            </div>
            <FloatingScrollTop
                scrollTopVisible={scrollTopVisibility}
                handleScrollToTop={scrollToTop}
                scrollProgress={scrollYProgress}
            />
        </main>
    );
};

const PersonalTabContent = () => {
    return (
        <m.div
            className={styles.personal_content_container}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
        >
            <h4 className={`body_text_800 ${styles.headline}`}>
                Ambivert, Theist, Atelophobic, Melophile.
            </h4>
            <p className={`body_text_500 ${styles.standalone_para}`}>
                As of now, at twenty-one years old, I'd divide my life into 3 phases...
            </p>
            <p className={`body_text_500 ${styles.standalone_para}`}>
                <b>👶🏽 Pre-12 yrs old:</b> During this period, I was extremely naive and completely
                unaware of the world around me. My days were filled with aimlessly attending school,
                unwillingly going to tuition, sleeping, and watching television. Basically, a
                complete time waste!
            </p>
            <p className={`body_text_500 ${styles.standalone_para}`}>
                <b>👦🏽 12 to 17 yrs old:</b> This is when I gained access to the Internet and
                realized that I couldn't remain childlike forever. I started working on
                self-improvement (at a gradual pace). Expectations from all around rose and I
                experienced the weight of pressure like never before. Took up fitness and
                meditation, approached my studies seriously, teenage stupidities, etc. It was the
                most <span className="word_highlight_1">eventful phase</span> of my{' '}
                <span className={styles.life_word_span}>
                    life{' '}
                    <img
                        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Smileys/Exploding%20Head.webp"
                        alt="Exploding Head"
                        className={styles.aboutpage_exploding_head_animated_emoji}
                    />
                </span>
            </p>
            <p className={`body_text_500 ${styles.standalone_para}`}>
                <b>👨🏽 Post-17 yrs old:</b> This phase has been all about extreme hunger for personal
                growth. I've been working lonely, competing with myself, relishing my own company,
                and not settling for mediocrity. Since then, I've been ready to{' '}
                <span className="word_highlight_1">give up anything</span>, whether it's college
                life, social life, sleep, food, or more, to reach my ultimate goals.
            </p>
            <p className={`body_text_500 ${styles.standalone_para}`}>
                For the past 3.5 years, my life has followed a{' '}
                <span className="word_highlight_1">monotonous routine</span> of waking up, tending
                to basic chores, self-improvement, sleep, and repeating the cycle. I've aimed to
                reach a point in my life where I can reflect and genuinely appreciate the efforts
                I've put in, ensuring I don't settle for an{' '}
                <span className="word_highlight_1">average existence</span>. And I always want to
                try becoming a <span className="word_highlight_1">better human</span> each day, so
                as not to let down the Almighty 🙌🏽.
            </p>
            <p className={`body_text_500 ${styles.standalone_para}`}>
                You can check my more lighthearted side on{' '}
                <a
                    href="https://www.instagram.com/being_exception_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link_text"
                >
                    Insta <span className="up_arrow">&#8599;</span>
                </a>{' '}
                😄.
            </p>
            <p className={`body_text_500 ${styles.standalone_para}`}>
                In terms of my worldview, I've developed a strong preference for things that are
                logically convincing and not just following social norms blindly. I made the
                decision to <span className="word_highlight_1">drop out of college</span> after my
                first year, as it wasn't contributing any value to my life.
            </p>
            <p className={`body_text_500 ${styles.standalone_para}`}>
                Beyond these aspects of my life, I have{' '}
                <a
                    href="https://www.mayoclinic.org/diseases-conditions/hyperhidrosis/symptoms-causes/syc-20367152"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link_text"
                >
                    hyperhidrosis disorder <span className="up_arrow">&#8599;</span>
                </a>
                . And I'm a huge fan of Virat Kohli and BTS (Bangtan). If I'm able to achieve even{' '}
                <span className="word_highlight_1">10%</span> of what they've done in their lives,
                it'd be a dream come true.
            </p>
            <p className={`body_text_500 ${styles.standalone_para}`}>
                Cricket has been a passion of mine for the past 10 years, and I enjoy listening to
                music in Tamil, Hindi, Korean, and English 🎵.
            </p>
            <p className={`body_text_500 ${styles.standalone_para}`}>
                I have a fascination for learning new languages. I'm capable of effective
                communication in English, Hindi, Tamil, and Marathi, and my near-future goal is to
                become fluent in Korean and Punjabi.
            </p>
        </m.div>
    );
};

const ProfessionTabContent = () => {
    return (
        <m.div
            className={styles.profession_content_container}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
        >
            <h4 className={`body_text_800 ${styles.headline}`}>Driven, Self taught, Explorer.</h4>
            <p className={`body_text_500 ${styles.standalone_para}`}>
                It'll be a bit difficult for the people around me to believe, but I hadn't even
                heard of coding or programming until a few years ago (2020). Maybe I was living
                under a rock 😅.
            </p>
            <p className={`body_text_500 ${styles.standalone_para}`}>
                So my coding journey began a few months after completing the 12th grade. Initially,
                I had plans for a career in{' '}
                <span className="word_highlight_1">health and fitness</span>. But as it was an
                unconventional choice, I decided to have a backup college degree. That's when, based
                on some friends' advice and suggestions, I chose the IT field.
            </p>
            <p className={`body_text_500 ${styles.standalone_para}`}>
                However, when the <span className="word_highlight_1">COVID pandemic</span> hit, my
                fitness plans were put on hold. Instead of wasting time, I decided to start studying
                my future college subjects in advance. That's when I stumbled upon coding. As I dug
                more into the world of programming, I became captivated and dropped my fitness
                plans, preferring
                <span className={styles.coding_word_span}>
                    coding{' '}
                    <img
                        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Technologist.webp"
                        alt="Technologist"
                        className={styles.aboutpage_techy_animated_emoji}
                    />
                </span>{' '}
            </p>
            <p className={`body_text_500 ${styles.standalone_para}`}>
                I distinctly remember the moment when a basic{' '}
                <span className="word_highlight_1">calculator program in Java</span> got me super
                excited about the possibilities of coding. It was a truly mind-blowing experience in
                my coding journey.
            </p>
            <p className={`body_text_500 ${styles.standalone_para}`}>
                My journey began with learning Java, while simultaneously attempting to grasp Data
                Structures and Algorithms, as well as Android development. Looking back, I now
                deeply regret that I was approaching it all incorrectly and, regrettably, wasted a
                significant amount of efforts and precious time 🤦🏽.
            </p>
            <p className={`body_text_500 ${styles.standalone_para}`}>
                After acknowledging my mistakes in learning Android, I lacked the courage to start
                from scratch, so I shifted my focus to{' '}
                <span className="word_highlight_1">web development</span>. During this time, I also
                started teaching Core Java and later, Frontend development.
            </p>
            <p className={`body_text_500 ${styles.standalone_para}`}>
                This year (2023) has been quite a learning curve. I've gained a better understanding
                of how a lot of things work (or at least I hope so)! I've also explored{' '}
                <span className="word_highlight_1">AI tools</span>,{' '}
                <span className="word_highlight_1">UI/UX designing</span>, and{' '}
                <span className="word_highlight_1">Video editing</span> to enhance my core skill
                (i.e. coding) by presenting my work more effectively.
            </p>
            <p className={`body_text_500 ${styles.standalone_para}`}>
                As of now, I've roughly outlined my plans for{' '}
                <span className="word_highlight_1">2024</span> 📅. While I've been sharing my
                learning journey on{' '}
                <a
                    href="https://www.linkedin.com/in/pravinm-tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link_text"
                >
                    LinkedIn <span className="up_arrow">&#8599;</span>
                </a>
                , I've recently started showcasing the end results of my work on{' '}
                <a
                    href="https://www.instagram.com/pravinm.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link_text"
                >
                    Insta <span className="up_arrow">&#8599;</span>
                </a>
                .
            </p>
        </m.div>
    );
};

const TimelineTabContent = () => {
    return (
        <m.div
            className={styles.vertical_timeline_container}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div
                className={`${styles.vertical_timeline_row} ${styles.vertical_timeline_left_aligned}`}
            >
                <m.div
                    className={styles.timeline_content_animation_wrapper}
                    initial={verticalTimelineAnimationLeft.contentContainer.initial}
                    whileInView={verticalTimelineAnimationLeft.contentContainer.animate}
                    transition={{
                        ...verticalTimelineAnimationLeft.contentContainer.transition,
                        delay: 1,
                    }}
                    viewport={verticalTimelineAnimationLeft.viewport}
                >
                    <div className={styles.timeline_content_container}>
                        <p className="body_text_500">
                            After completing my 12th exams and realizing that my marks wouldn't be
                            great, I decided to hit the{' '}
                            <span className="word_highlight_2">restart button</span> on my life and
                            start from scratch. Began working on improving my English speaking
                            skills and started researching about the IT field.
                        </p>
                    </div>
                    <div className={styles.sm_date_container}>
                        <p> - Feb 2020</p>
                    </div>
                </m.div>
                <m.div
                    className={styles.timeline_mid_circle}
                    style={{ backgroundColor: 'var(--primary-clr-600)' }}
                    {...middleCircleAnimationObj}
                ></m.div>
                <m.div
                    className={styles.timeline_date_container}
                    {...dateContainerLeftAnimationObj}
                >
                    <p className={`body_text_600 ${styles.timeline_date}`}>Feb 2020</p>
                </m.div>
            </div>
            <div
                className={`${styles.vertical_timeline_row} ${styles.vertical_timeline_right_aligned}`}
            >
                <m.div
                    className={styles.timeline_content_animation_wrapper}
                    {...contentContainerRightAnimationObj}
                >
                    <div className={styles.timeline_content_container}>
                        <p className="body_text_500">
                            The first lockdown began, and I suddenly had plenty of free time. So, I
                            decided to study my first-year subjects in advance. Began learning Core
                            Java and diving into{' '}
                            <span className="word_highlight_2">Data Structures and Algorithms</span>
                            .
                        </p>
                    </div>
                    <div className={styles.sm_date_container}>
                        <p> - Apr 2020</p>
                    </div>
                </m.div>
                <m.div className={styles.timeline_mid_circle} {...middleCircleAnimationObj}></m.div>
                <m.div
                    className={styles.timeline_date_container}
                    {...dateContainerRightAnimationObj}
                >
                    <p className={`body_text_600 ${styles.timeline_date}`}>Apr 2020</p>
                </m.div>
            </div>
            <div
                className={`${styles.vertical_timeline_row} ${styles.vertical_timeline_left_aligned}`}
            >
                <m.div
                    className={styles.timeline_content_animation_wrapper}
                    {...contentContainerLeftAnimationObj}
                >
                    <div className={styles.timeline_content_container}>
                        <p className="body_text_500">
                            Got my first laptop and put all those theories I'd learned in the past
                            few months into practice. I also began exploring{' '}
                            <span className="word_highlight_2">Android development</span>.
                        </p>
                    </div>
                    <div className={styles.sm_date_container}>
                        <p> - Nov 2020</p>
                    </div>
                </m.div>
                <m.div className={styles.timeline_mid_circle} {...middleCircleAnimationObj}></m.div>
                <m.div
                    className={styles.timeline_date_container}
                    {...dateContainerLeftAnimationObj}
                >
                    <p className={`body_text_600 ${styles.timeline_date}`}>Nov 2020</p>
                </m.div>
            </div>
            <div
                className={`${styles.vertical_timeline_row} ${styles.vertical_timeline_right_aligned}`}
            >
                <m.div
                    className={styles.timeline_content_animation_wrapper}
                    {...contentContainerRightAnimationObj}
                >
                    <div className={styles.timeline_content_container}>
                        <p className="body_text_500">
                            Entered the world of{' '}
                            <span className="word_highlight_2">open source</span> for the first
                            time. Joined a few Android communities and tried my hand at contributing
                            to Android projects.
                        </p>
                    </div>
                    <div className={styles.sm_date_container}>
                        <p> - Apr 2021</p>
                    </div>
                </m.div>
                <m.div
                    className={styles.timeline_mid_circle}
                    style={{ backgroundColor: 'rgb(145 174 255)' }}
                    {...middleCircleAnimationObj}
                ></m.div>
                <m.div
                    className={styles.timeline_date_container}
                    {...dateContainerRightAnimationObj}
                >
                    <p className={`body_text_600 ${styles.timeline_date}`}>Apr 2021</p>
                </m.div>
            </div>
            <div
                className={`${styles.vertical_timeline_row} ${styles.vertical_timeline_left_aligned}`}
            >
                <m.div
                    className={styles.timeline_content_animation_wrapper}
                    {...contentContainerLeftAnimationObj}
                >
                    <div className={styles.timeline_content_container}>
                        <p className="body_text_500">
                            Dropped out of college, probably a life-altering decision.
                        </p>
                    </div>
                    <div className={styles.sm_date_container}>
                        <p> - Jul 2021</p>
                    </div>
                </m.div>
                <m.div
                    className={styles.timeline_mid_circle}
                    style={{ backgroundColor: 'rgb(145 174 255)' }}
                    {...middleCircleAnimationObj}
                ></m.div>
                <m.div
                    className={styles.timeline_date_container}
                    {...dateContainerLeftAnimationObj}
                >
                    <p className={`body_text_600 ${styles.timeline_date}`}>Jul 2021</p>
                </m.div>
            </div>
            <div
                className={`${styles.vertical_timeline_row} ${styles.vertical_timeline_right_aligned}`}
            >
                <m.div
                    className={styles.timeline_content_animation_wrapper}
                    {...contentContainerRightAnimationObj}
                >
                    <div className={styles.timeline_content_container}>
                        <p className="body_text_500">
                            I decided to shift my focus from Android development and started
                            learning <span className="word_highlight_2">web development</span>.
                        </p>
                    </div>
                    <div className={styles.sm_date_container}>
                        <p> - Sep 2021</p>
                    </div>
                </m.div>
                <m.div
                    className={styles.timeline_mid_circle}
                    style={{ backgroundColor: 'var(--primary-clr-600)' }}
                    {...middleCircleAnimationObj}
                ></m.div>
                <m.div
                    className={styles.timeline_date_container}
                    {...dateContainerRightAnimationObj}
                >
                    <p className={`body_text_600 ${styles.timeline_date}`}>Sep 2021</p>
                </m.div>
            </div>
            <div
                className={`${styles.vertical_timeline_row} ${styles.vertical_timeline_left_aligned}`}
            >
                <m.div
                    className={styles.timeline_content_animation_wrapper}
                    {...contentContainerLeftAnimationObj}
                >
                    <div className={styles.timeline_content_container}>
                        <p className="body_text_500">
                            Began sharing my learning journey on LinkedIn. Here's the{' '}
                            <a
                                href="https://www.linkedin.com/posts/pravinm-tech_learninpublic-activity-6860991699125178368-WxZ3/?utm_source=share&utm_medium=member_desktop"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link_text"
                            >
                                very first post <span className="up_arrow">&#8599;</span>
                            </a>
                            .
                        </p>
                    </div>
                    <div className={styles.sm_date_container}>
                        <p> - Nov 2021</p>
                    </div>
                </m.div>
                <m.div
                    className={styles.timeline_mid_circle}
                    style={{ backgroundColor: 'var(--primary-clr-600)' }}
                    {...middleCircleAnimationObj}
                ></m.div>
                <m.div
                    className={styles.timeline_date_container}
                    {...dateContainerLeftAnimationObj}
                >
                    <p className={`body_text_600 ${styles.timeline_date}`}>Nov 2021</p>
                </m.div>
            </div>
            <div
                className={`${styles.vertical_timeline_row} ${styles.vertical_timeline_right_aligned}`}
            >
                <m.div
                    className={styles.timeline_content_animation_wrapper}
                    {...contentContainerRightAnimationObj}
                >
                    <div className={styles.timeline_content_container}>
                        <p className="body_text_500">
                            I started teaching{' '}
                            <span className="word_highlight_2">Core Java classes</span> in person.
                        </p>
                    </div>
                    <div className={styles.sm_date_container}>
                        <p> - Jan 2022</p>
                    </div>
                </m.div>
                <m.div className={styles.timeline_mid_circle} {...middleCircleAnimationObj}></m.div>
                <m.div
                    className={styles.timeline_date_container}
                    {...dateContainerRightAnimationObj}
                >
                    <p className={`body_text_600 ${styles.timeline_date}`}>Jan 2022</p>
                </m.div>
            </div>
            <div
                className={`${styles.vertical_timeline_row} ${styles.vertical_timeline_left_aligned}`}
            >
                <m.div
                    className={styles.timeline_content_animation_wrapper}
                    {...contentContainerLeftAnimationObj}
                >
                    <div className={styles.timeline_content_container}>
                        <p className="body_text_500">
                            Dabbled in competitive programming, solving numerous questions on
                            CodeChef. Also started exploring online{' '}
                            <span className="word_highlight_2">investing</span> and got into mutual
                            funds using Zerodha.
                        </p>
                    </div>
                    <div className={styles.sm_date_container}>
                        <p> - May 2022</p>
                    </div>
                </m.div>
                <m.div className={styles.timeline_mid_circle} {...middleCircleAnimationObj}></m.div>
                <m.div
                    className={styles.timeline_date_container}
                    {...dateContainerLeftAnimationObj}
                >
                    <p className={`body_text_600 ${styles.timeline_date}`}>May 2022</p>
                </m.div>
            </div>
            <div
                className={`${styles.vertical_timeline_row} ${styles.vertical_timeline_right_aligned}`}
            >
                <m.div
                    className={styles.timeline_content_animation_wrapper}
                    {...contentContainerRightAnimationObj}
                >
                    <div className={styles.timeline_content_container}>
                        <p className="body_text_500">
                            After a few months of rigorous course structuring, projects planning,
                            YouTube video promotion, and other preparations, I started conducting
                            online <span className="word_highlight_2">Frontend classes</span>.
                        </p>
                    </div>
                    <div className={styles.sm_date_container}>
                        <p> - Dec 2022</p>
                    </div>
                </m.div>
                <m.div
                    className={styles.timeline_mid_circle}
                    style={{ backgroundColor: 'var(--primary-clr-600)' }}
                    {...middleCircleAnimationObj}
                ></m.div>
                <m.div
                    className={styles.timeline_date_container}
                    {...dateContainerRightAnimationObj}
                >
                    <p className={`body_text_600 ${styles.timeline_date}`}>Dec 2022</p>
                </m.div>
            </div>
            <div
                className={`${styles.vertical_timeline_row} ${styles.vertical_timeline_left_aligned}`}
            >
                <m.div
                    className={styles.timeline_content_animation_wrapper}
                    {...contentContainerLeftAnimationObj}
                >
                    <div className={styles.timeline_content_container}>
                        <p className="body_text_500">
                            Started learning and utilizing{' '}
                            <span className="word_highlight_2">AI tools</span> to improve my
                            productivity.
                        </p>
                    </div>
                    <div className={styles.sm_date_container}>
                        <p> - Mar 2023</p>
                    </div>
                </m.div>
                <m.div className={styles.timeline_mid_circle} {...middleCircleAnimationObj}></m.div>
                <m.div
                    className={styles.timeline_date_container}
                    {...dateContainerLeftAnimationObj}
                >
                    <p className={`body_text_600 ${styles.timeline_date}`}>Mar 2023</p>
                </m.div>
            </div>
            <div
                className={`${styles.vertical_timeline_row} ${styles.vertical_timeline_right_aligned}`}
            >
                <m.div
                    className={styles.timeline_content_animation_wrapper}
                    {...contentContainerRightAnimationObj}
                >
                    <div className={styles.timeline_content_container}>
                        <p className="body_text_500">
                            Started learning{' '}
                            <span className="word_highlight_2">UI/UX designing</span> to enhance the
                            visuals of my Frontend projects.
                        </p>
                    </div>
                    <div className={styles.sm_date_container}>
                        <p> - Apr 2023</p>
                    </div>
                </m.div>
                <m.div className={styles.timeline_mid_circle} {...middleCircleAnimationObj}></m.div>
                <m.div
                    className={styles.timeline_date_container}
                    {...dateContainerRightAnimationObj}
                >
                    <p className={`body_text_600 ${styles.timeline_date}`}>Apr 2023</p>
                </m.div>
            </div>
            <div
                className={`${styles.vertical_timeline_row} ${styles.vertical_timeline_left_aligned}`}
            >
                <m.div
                    className={styles.timeline_content_animation_wrapper}
                    {...contentContainerLeftAnimationObj}
                >
                    <div className={styles.timeline_content_container}>
                        <p className="body_text_500">
                            Learned the basics of{' '}
                            <span className="word_highlight_2">video editing</span> and had some fun
                            creating a{' '}
                            <a
                                href="https://www.youtube.com/watch?v=KAsW-hzDle8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link_text"
                            >
                                YT video <span className="up_arrow">&#8599;</span>
                            </a>{' '}
                            where I reacted to my Frontend students' website.
                        </p>
                    </div>
                    <div className={styles.sm_date_container}>
                        <p> - Jul 2023</p>
                    </div>
                </m.div>
                <m.div
                    className={styles.timeline_mid_circle}
                    style={{ backgroundColor: 'rgb(145 174 255)' }}
                    {...middleCircleAnimationObj}
                ></m.div>
                <m.div
                    className={styles.timeline_date_container}
                    {...dateContainerLeftAnimationObj}
                >
                    <p className={`body_text_600 ${styles.timeline_date}`}>Jul 2023</p>
                </m.div>
            </div>
            <div
                className={`${styles.vertical_timeline_row} ${styles.vertical_timeline_right_aligned}`}
            >
                <m.div
                    className={styles.timeline_content_animation_wrapper}
                    {...contentContainerRightAnimationObj}
                >
                    <div className={styles.timeline_content_container}>
                        <p className="body_text_500">
                            Successfully completed the creation of this portfolio website.
                        </p>
                    </div>
                    <div className={styles.sm_date_container}>
                        <p> - Nov 2023</p>
                    </div>
                </m.div>
                <m.div className={styles.timeline_mid_circle} {...middleCircleAnimationObj}></m.div>
                <m.div
                    className={styles.timeline_date_container}
                    {...dateContainerRightAnimationObj}
                >
                    <p className={`body_text_600 ${styles.timeline_date}`}>Nov 2023</p>
                </m.div>
            </div>
            <div
                className={`${styles.vertical_timeline_row} ${styles.vertical_timeline_right_aligned}`}
            >
                <div></div>
                <m.div
                    className={styles.timeline_mid_circle}
                    style={{ background: 'lime' }}
                    {...middleCircleAnimationObj}
                ></m.div>
                <div></div>
            </div>
        </m.div>
    );
};

export default AboutPage;
