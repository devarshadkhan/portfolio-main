import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';

import { useFloatingMsgContext, useGlobalContext } from '../store';

import primaryAccentGraphicSL from '../assets/accent-graphics/SL--primary-accent-graphic-min.png';
import primaryAccentGraphicM from '../assets/accent-graphics/M--primary-accent-graphic-min.png';
import testimonialAccentGraphic from '../assets/accent-graphics/LL--testimonial-accent-graphic-min.png';

import styles from './Testimonials.module.css';

const variants = {
    enter: () => {
        return {
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        y: 0,
        opacity: 1,
    },
    exit: () => {
        return {
            zIndex: 0,
            opacity: 0,
        };
    },
};

const swipeConfidenceThreshold = 3000;

const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const Testimonials = () => {
    const { randomlyOrderedStudentsArr } = useGlobalContext();
    const { handleFloatingMsgIdxState } = useFloatingMsgContext();

    const [[page, direction], setPage] = useState([0, 0]);

    let testimonialIdx = page % randomlyOrderedStudentsArr.length;

    if (testimonialIdx < 0) {
        testimonialIdx += randomlyOrderedStudentsArr.length;
    }

    const paginate = newDirection => {
        setPage([page + newDirection, newDirection]);
    };

    const handleTestimonialDotClick = dotNum => {
        if (dotNum < testimonialIdx) {
            setPage([page - (testimonialIdx - dotNum), -1]);
        } else if (dotNum > testimonialIdx) {
            setPage([page + (dotNum - testimonialIdx), 1]);
        }
    };

    const {
        name: personName,
        batch: personBatch,
        instaLink,
        linkedInLink,
        testimonial: personTestimonial,
        image: personImg,
    } = randomlyOrderedStudentsArr[testimonialIdx];

    return (
        <m.section
            className={`section ${styles.testimonials_section}`}
            onViewportEnter={() => {
                handleFloatingMsgIdxState(3);
            }}
            viewport={{ amount: 0.2 }}
        >
            <div className={`frost_glass ${styles.testimonials_frost_glass}`}>
                <m.div
                    className={`section_container ${styles.testimonials_section_container}`}
                    onViewportEnter={() => {
                        handleFloatingMsgIdxState(3);
                    }}
                    viewport={{ amount: 1 }}
                >
                    <div className={`section_headings_container`}>
                        <h2>The Testimonials</h2>
                        <p>What some of my students have to say about me...</p>
                    </div>
                    <div className={`${styles.testimonials_layout_wrapper}`}>
                        <div
                            className={`first_frost_layer ${styles.testimonial_layout_left_container}`}
                        >
                            <div className={styles.testimonial_layout_row}>
                                <AnimatePresence initial={false} custom={direction}>
                                    <m.div
                                        className={styles.testimonial_container}
                                        key={page}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            opacity: { duration: 0.2 },
                                        }}
                                        drag="y"
                                        dragConstraints={{ top: 0, bottom: 0 }}
                                        dragElastic={1}
                                        onDragEnd={(e, { offset, velocity }) => {
                                            const swipe = swipePower(offset.y, velocity.y);

                                            if (swipe < -swipeConfidenceThreshold) {
                                                paginate(1);
                                            } else if (swipe > swipeConfidenceThreshold) {
                                                paginate(-1);
                                            }
                                        }}
                                    >
                                        <p className={`body_text_600 ${styles.testimonial_text}`}>
                                            {personTestimonial}
                                        </p>
                                        <div className={styles.person_layout_wrapper}>
                                            <div className={styles.person_pic}>
                                                <img src={personImg} alt={`${personName} image`} />
                                            </div>
                                            <div className={styles.person_info}>
                                                <p
                                                    className={`body_text_400 ${styles.person_name}`}
                                                >
                                                    {personName}
                                                </p>
                                                <p className={`body_text_100 ${styles.batch}`}>
                                                    {personBatch}
                                                </p>
                                                <div
                                                    className={styles.person_social_links_container}
                                                >
                                                    {instaLink === '#' ? (
                                                        <span
                                                            className="not_allowed body_text_200 link_text"
                                                            title="Unavailable as of now!"
                                                        >
                                                            Insta &#8599;
                                                        </span>
                                                    ) : (
                                                        <a
                                                            href={instaLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="body_text_200 link_text"
                                                        >
                                                            Insta{' '}
                                                            <span className="up_arrow">
                                                                &#8599;
                                                            </span>
                                                        </a>
                                                    )}
                                                    {linkedInLink === '#' ? (
                                                        <span
                                                            className="not_allowed body_text_200 link_text"
                                                            title="Unavailable as of now!"
                                                        >
                                                            LinkedIn &#8599;
                                                        </span>
                                                    ) : (
                                                        <a
                                                            href={linkedInLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="body_text_200 link_text"
                                                        >
                                                            LinkedIn{' '}
                                                            <span className="up_arrow">
                                                                &#8599;
                                                            </span>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </m.div>
                                </AnimatePresence>
                                <div className={styles.arrows_container}>
                                    <button
                                        className={`${styles.up_chevron_container}`}
                                        onClick={() => paginate(-1)}
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            viewBox="0 0 448 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m240.971 130.524 194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z" />
                                        </svg>
                                    </button>
                                    <button
                                        className={`${styles.down_chevron_container}`}
                                        onClick={() => paginate(1)}
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            viewBox="0 0 448 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M207.029 381.476 12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ul className={styles.testimonial_layout_dots_container}>
                            {Array.from({ length: randomlyOrderedStudentsArr.length }).map(
                                (_, i) => (
                                    <li
                                        key={i}
                                        className={`${styles.testimonial_dot_wrapper} ${
                                            i === testimonialIdx ? `${styles.active}` : ''
                                        }`}
                                        onClick={() => handleTestimonialDotClick(i)}
                                    >
                                        <button className={styles.testimonial_dot}></button>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </m.div>
                <div className={`primary_accent_graphic_container`}>
                    <picture>
                        <source srcSet={primaryAccentGraphicM} media="(min-width: 1450px)" />
                        <img
                            src={primaryAccentGraphicSL}
                            alt="Testimonials section primary-accent-graphic image"
                        />
                    </picture>
                </div>
                <div className={styles.testimonial_accent_graphic_container}>
                    <img src={testimonialAccentGraphic} alt="Testimonial accent graphic image" />
                </div>
            </div>
        </m.section>
    );
};
export default Testimonials;
