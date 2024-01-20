import { useLocation } from 'react-router-dom';
import { useFloatingMsgContext, useGlobalContext } from '../store';

import { FloatingBottomMsg } from '.';

import styles from './Aside.module.css';
import { useEffect } from 'react';

const Aside = () => {
    const { footerArrivedCompletely } = useGlobalContext();
    const { handleFloatingMsgContainerVisibilityState } = useFloatingMsgContext();

    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/') {
            handleFloatingMsgContainerVisibilityState(false);
        }
    }, [location, handleFloatingMsgContainerVisibilityState]);

    return (
        <aside>
            <div
                className={`${styles.floating_social_icons_container} ${
                    footerArrivedCompletely ? `${styles.hide}` : ''
                }`}
            >
                <ul className={styles.floating_social_icons_list}>
                    <li>
                        <a
                            href="https://www.youtube.com/@pravinmudaliyar491"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="youtube"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 9.71a8.5 8.5 0 0 0-.91-4.13 2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3 2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48 9.55 9.55 0 0 0 .3 2 3.14 3.14 0 0 0 .71 1.36 2.86 2.86 0 0 0 1.49.78 45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78 2.49 2.49 0 0 0 .61-1 10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54ZM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08Z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/pravinm-tech/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="linkedin"
                                viewBox="0 0 24 24"
                            >
                                <path d="M17.5 8.999a5.419 5.419 0 0 0-2.565.645A1 1 0 0 0 14 8.999h-4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5.5a1 1 0 1 1 2 0v5.5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7.5a5.507 5.507 0 0 0-5.5-5.5Zm3.5 12h-2v-4.5a3 3 0 1 0-6 0v4.5h-2v-10h2v.703a1 1 0 0 0 1.781.625A3.483 3.483 0 0 1 21 14.5Zm-14-12H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1Zm-1 12H4v-10h2ZM5.015 1.542a3.233 3.233 0 1 0-.057 6.457h.028a3.233 3.233 0 1 0 .029-6.457Zm-.029 4.457h-.028a1.222 1.222 0 0 1-1.37-1.228c0-.747.56-1.229 1.427-1.229A1.234 1.234 0 0 1 6.41 4.771c0 .746-.56 1.228-1.425 1.228Z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/pravinm.tech/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="instagram"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 9.52A2.48 2.48 0 1 0 14.48 12 2.48 2.48 0 0 0 12 9.52Zm9.93-2.45a6.53 6.53 0 0 0-.42-2.26 4 4 0 0 0-2.32-2.32 6.53 6.53 0 0 0-2.26-.42C15.64 2 15.26 2 12 2s-3.64 0-4.93.07a6.53 6.53 0 0 0-2.26.42 4 4 0 0 0-2.32 2.32 6.53 6.53 0 0 0-.42 2.26C2 8.36 2 8.74 2 12s0 3.64.07 4.93a6.86 6.86 0 0 0 .42 2.27 3.94 3.94 0 0 0 .91 1.4 3.89 3.89 0 0 0 1.41.91 6.53 6.53 0 0 0 2.26.42C8.36 22 8.74 22 12 22s3.64 0 4.93-.07a6.53 6.53 0 0 0 2.26-.42 3.89 3.89 0 0 0 1.41-.91 3.94 3.94 0 0 0 .91-1.4 6.6 6.6 0 0 0 .42-2.27C22 15.64 22 15.26 22 12s0-3.64-.07-4.93Zm-2.54 8a5.73 5.73 0 0 1-.39 1.8A3.86 3.86 0 0 1 16.87 19a5.73 5.73 0 0 1-1.81.35H8.94A5.73 5.73 0 0 1 7.13 19a3.51 3.51 0 0 1-1.31-.86A3.51 3.51 0 0 1 5 16.87a5.49 5.49 0 0 1-.34-1.81V8.94A5.49 5.49 0 0 1 5 7.13a3.51 3.51 0 0 1 .86-1.31A3.59 3.59 0 0 1 7.13 5a5.73 5.73 0 0 1 1.81-.35h6.12a5.73 5.73 0 0 1 1.81.35 3.51 3.51 0 0 1 1.31.86A3.51 3.51 0 0 1 19 7.13a5.73 5.73 0 0 1 .35 1.81V12c0 2.06.07 2.27.04 3.06Zm-1.6-7.44a2.38 2.38 0 0 0-1.41-1.41A4 4 0 0 0 15 6H9a4 4 0 0 0-1.38.26 2.38 2.38 0 0 0-1.41 1.36A4.27 4.27 0 0 0 6 9v6a4.27 4.27 0 0 0 .26 1.38 2.38 2.38 0 0 0 1.41 1.41 4.27 4.27 0 0 0 1.33.26h6a4 4 0 0 0 1.38-.26 2.38 2.38 0 0 0 1.41-1.41 4 4 0 0 0 .26-1.38V9a3.78 3.78 0 0 0-.26-1.38ZM12 15.82A3.81 3.81 0 0 1 8.19 12 3.82 3.82 0 1 1 12 15.82Zm4-6.89a.9.9 0 0 1 0-1.79.9.9 0 0 1 0 1.79Z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/PravinMudaliyar49"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" id="github" viewBox="0 0 24 24">
                                <path d="M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.708 5.708 0 0 0-1.837-2.415 1.2 1.2 0 0 1-.167-.11 1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.44 4.44 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182ZM20.737 5.377c.032-.125.063-.264.09-.42a6.278 6.278 0 0 0-.408-3.293 1.002 1.002 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a.997.997 0 0 0-.631.584 6.3 6.3 0 0 0-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 0 0-1.256 3.83 8.422 8.422 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a4.591 4.591 0 0 0-.118.4 1 1 0 0 0 1.942.479 1.678 1.678 0 0 1 .468-.878 1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.61 6.61 0 0 1-.033-.738 4.258 4.258 0 0 1 .92-2.713 3.022 3.022 0 0 1 .195-.231 1 1 0 0 0 .188-1.025 3.388 3.388 0 0 1-.155-.555 4.094 4.094 0 0 1 .079-1.616 7.543 7.543 0 0 1 2.415 1.18 1.009 1.009 0 0 0 .827.133 11.777 11.777 0 0 1 6.173.001 1.005 1.005 0 0 0 .83-.138 7.572 7.572 0 0 1 2.406-1.19 4.04 4.04 0 0 1 .087 1.578 3.205 3.205 0 0 1-.169.607 1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.122 4.122 0 0 1 20 9.203a7.039 7.039 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746 1.63 1.63 0 0 1 .466.908 3.06 3.06 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a4.881 4.881 0 0 0-.155-1.311 4.256 4.256 0 0 0-.116-.416 6.513 6.513 0 0 0 5.445-6.424A8.697 8.697 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826Z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://discordapp.com/users/549877579268620289"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="discord"
                                viewBox="0 0 100 100"
                            >
                                <path d="M85.778 24.561c-11.641-8.71-22.793-8.466-22.793-8.466l-1.14 1.302c13.839 4.152 20.27 10.257 20.27 10.257-19.799-10.901-45.019-10.823-65.613 0 0 0 6.675-6.431 21.328-10.583l-.814-.977s-11.071-.244-22.793 8.466c0 0-11.722 21.084-11.722 47.052 0 0 6.838 11.722 24.829 12.292 0 0 3.012-3.582 5.454-6.675-10.339-3.093-14.246-9.524-14.246-9.524 6.495 4.064 13.063 6.608 21.247 8.222 13.316 2.741 29.879-.077 42.249-8.222 0 0-4.07 6.594-14.734 9.606a628.736 628.736 0 0 0 5.373 6.512C90.662 83.254 97.5 71.532 97.5 71.613c0-25.968-11.722-47.052-11.722-47.052zm-50.96 39.482c-4.559 0-8.303-3.989-8.303-8.955.333-11.892 16.357-11.855 16.607 0-.001 4.966-3.664 8.955-8.304 8.955zm29.713 0c-4.559 0-8.303-3.989-8.303-8.955.366-11.869 16.19-11.874 16.607 0-.001 4.966-3.664 8.955-8.304 8.955z" />
                            </svg>
                        </a>
                    </li>
                </ul>
                <div className={styles.floating_line}></div>
            </div>
            <FloatingBottomMsg />
            <div className={styles.background_particles_animation_container}>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.circle_container}>
                    <div className={styles.circle}></div>
                </div>
            </div>
        </aside>
    );
};
export default Aside;
