import { m } from 'framer-motion';

import selfAvatar from '../assets/images/self-images/self-avatar-2-min.png';
import styles from './FloatingBottomMsg.module.css';
import { useFloatingMsgContext, useGlobalContext } from '../store';
import { useRef } from 'react';
import useCheckMobileScreen from '../hooks/use-mobileScreen';

const messagesList = [
    {
        message: `There'll be no more horizontal scroll from now on 😅. And hover over me after reaching each section.`,
        width: '30vw',
        firstTimeShow: true,
    },
    {
        message: `You'll find 3 projects to scroll through in this section.`,
        width: '19vw',
        firstTimeShow: true,
    },
    {
        message: 'Either click on the buttons inside the tablet or scroll within the laptop model.',
        width: '25vw',
        firstTimeShow: true,
    },
    {
        message: `On each visit, you'll notice that the order in which these testimonials are arranged is random.`,
        width: '25vw',
        firstTimeShow: true,
    },
    {
        message: `We began with a brief overview of skills, then moved on to coding, followed by designing, and finally, teaching. That's all 😊.`,
        width: '30vw',
        firstTimeShow: true,
    },
];

const FloatingBottomMsg = () => {
    const { footerArrivedCompletely, scrollToTop, mainScrollYProgress } = useGlobalContext();
    const { floatingMsgContainerVisibility, floatingMsgIndex } = useFloatingMsgContext();

    const floatingMsgContRef = useRef(null);

    const isMobile = useCheckMobileScreen();

    let msgToDisplay = messagesList[floatingMsgIndex].message;
    let msgWidth = messagesList[floatingMsgIndex].width;

    if (floatingMsgContainerVisibility) {
        if (messagesList[floatingMsgIndex].firstTimeShow) {
            setTimeout(() => {
                floatingMsgContRef.current.classList.add(`${styles.show_msg}`);
            }, 10);

            setTimeout(() => {
                floatingMsgContRef.current.classList.remove(`${styles.show_msg}`);
                messagesList[floatingMsgIndex].firstTimeShow = false;
            }, 4000);
        }
    }

    if (isMobile) {
        if (floatingMsgIndex === 0) {
            msgToDisplay = `Keep scrolling the website normally. And click me after reaching each section, for some related info.`;
        } else if (floatingMsgIndex === 2) {
            msgToDisplay =
                'Either click on the buttons inside the tablet or scroll within the mobile model';
        }
    }

    return (
        <div
            className={`${styles.floating_icon_msg_container} ${
                floatingMsgContainerVisibility ? `${styles.appear}` : ''
            }`}
            data-floating-message={msgToDisplay}
            style={{ '--width': msgWidth }}
            ref={floatingMsgContRef}
        >
            <svg className={styles.svg_progress} viewBox="0 0 100 100">
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    pathLength="1"
                    className={`${styles.progress_circle} ${styles.bg_transparent}`}
                />
                <m.circle
                    cx="50"
                    cy="50"
                    r="45"
                    className={`${styles.progress_circle} ${styles.progress_indicator}`}
                    style={{ pathLength: mainScrollYProgress }}
                />
            </svg>
            <div className={styles.avatar_container}>
                <img
                    src={selfAvatar}
                    alt="Pravin Avatar image"
                    className={`${styles.floating_self_avatar} ${
                        footerArrivedCompletely ? `${styles.disappear}` : ''
                    }`}
                />
                <button
                    className={`${styles.floating_msg_up_arrow} ${
                        footerArrivedCompletely ? `${styles.appear}` : ''
                    }`}
                    onClick={scrollToTop}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        stroke="currentColor"
                        viewBox="0 0 448 512"
                    >
                        <path d="m34.9 289.5-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};
export default FloatingBottomMsg;
