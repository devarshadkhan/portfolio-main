import { m, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useFloatingMsgContext, useGlobalContext, useNavbarContext } from '../store';

import { Hero, Skills } from '.';

import styles from './HorSectionsWrapper.module.css';

const HorSectionsWrapper = () => {
    const { scrollRestorationCodingProjects } = useGlobalContext();
    const { handleNavbarVisibilityState } = useNavbarContext();
    const { handleFloatingMsgContainerVisibilityState } = useFloatingMsgContext();

    const [doubleViewportScrollCompleted, setDoubleViewportScrollCompleted] = useState(false);
    const [stopDoubleViewportScrolling, setStopDoubleViewportScrolling] = useState(false);

    const horSectionsWrapperRef = useRef(null);

    const { scrollYProgress } = useScroll({ container: horSectionsWrapperRef });
    const skillsSectionTransformX = useTransform(scrollYProgress, [0, 1], [100, 0]);

    useMotionValueEvent(scrollYProgress, 'change', latest => {
        if (latest >= 0.1) {
            handleNavbarVisibilityState(false);
        } else {
            handleNavbarVisibilityState(true);
        }

        if (latest >= 0.99) {
            setDoubleViewportScrollCompleted(true);
            handleFloatingMsgContainerVisibilityState(true);
        } else {
            setDoubleViewportScrollCompleted(false);
            handleFloatingMsgContainerVisibilityState(false);
        }
    });

    useEffect(() => {
        if (scrollRestorationCodingProjects) {
            horSectionsWrapperRef.current.scrollTop = horSectionsWrapperRef.current.scrollHeight;
        }
    }, [scrollRestorationCodingProjects]);

    return (
        <m.section
            className={`${styles.hor_sections_wrapper} ${
                stopDoubleViewportScrolling ? `${styles.stop_scrolling}` : ''
            }`}
            ref={horSectionsWrapperRef}
            onViewportEnter={() => setStopDoubleViewportScrolling(false)}
            onViewportLeave={() => setStopDoubleViewportScrolling(true)}
            viewport={{ amount: 'all' }}
        >
            <div className={styles.double_viewport_scroller}>
                <div className={styles.sticky_container}>
                    <Hero doubleViewportScrollCompleted={doubleViewportScrollCompleted} />
                    <Skills
                        skillsSectionTransformX={skillsSectionTransformX}
                        doubleViewportScrollProgress={scrollYProgress}
                        doubleViewportScrollCompleted={doubleViewportScrollCompleted}
                    />
                </div>
            </div>
        </m.section>
    );
};
export default HorSectionsWrapper;
