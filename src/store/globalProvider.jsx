import { useState, useEffect, useMemo } from 'react';
import { useScroll } from 'framer-motion';

import { GlobalContext } from './global-context';
import { NavbarContext } from './navbar-context';
import { FloatingMsgContext } from './floatingMsg-context';

import { studentsArr } from '../utils/constants';
import { generateRandomArray } from '../utils/helpers';

const GlobalProvider = ({ children }) => {
    const [mainRef, setMainRef] = useState(null);
    const { scrollYProgress: mainScrollYProgress } = useScroll({
        container: mainRef,
        layoutEffect: 'false',
    });

    const [navbarVisibility, setNavbarVisibility] = useState(true);

    const [floatingMsgContainerVisibility, setFloatingMsgContainerVisibility] = useState(false);
    const [floatingMsgIndex, setFloatingMsgIndex] = useState(0);

    const [isLightTheme, setIsLightTheme] = useState(false);
    const [randomlyOrderedStudentsArr, setRandomlyOrderedStudentsArr] = useState(studentsArr);
    const [scrollRestorationCodingProjects, setScrollRestorationCodingProjects] = useState(false);
    const [footerArrivedCompletely, setFooterArrivedCompletely] = useState(false);
    const [aboutPageActiveTab, setAboutPageActiveTab] = useState(0);

    const handleThemeChangeToggle = () => {
        setIsLightTheme(prev => !prev);

        let expandBeforeAlreadyPresent = document.body.classList.contains('expand_before');

        document.body.classList.toggle('expand_before');

        if (expandBeforeAlreadyPresent) {
            document.body.classList.remove('light_theme');
            return;
        }

        setTimeout(() => {
            if (document.body.classList.contains('expand_before')) {
                document.body.classList.add('light_theme');
            }
        }, 250);
    };

    const handleFooterArrivalState = param => {
        setFooterArrivedCompletely(param);
    };

    const handleScrollRestorationCodingProject = param => {
        setScrollRestorationCodingProjects(param);
    };

    useEffect(() => {
        const randomlyGeneratedIdxArr = generateRandomArray(studentsArr.length);
        const randomlyOrderedStudentsArr = randomlyGeneratedIdxArr.map(idx => studentsArr[idx]);
        setRandomlyOrderedStudentsArr(randomlyOrderedStudentsArr);
    }, []);

    const scrollToTop = () => {
        mainRef.current.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const navbarState = useMemo(
        () => ({
            navbarVisibility,
            handleNavbarVisibilityState: param => setNavbarVisibility(param),
        }),
        [navbarVisibility, setNavbarVisibility]
    );

    const floatingMsgState = useMemo(
        () => ({
            floatingMsgContainerVisibility,
            floatingMsgIndex,
            handleFloatingMsgContainerVisibilityState: param =>
                setFloatingMsgContainerVisibility(param),
            handleFloatingMsgIdxState: param => setFloatingMsgIndex(param),
        }),
        [
            floatingMsgContainerVisibility,
            floatingMsgIndex,
            setFloatingMsgContainerVisibility,
            setFloatingMsgIndex,
        ]
    );

    return (
        <NavbarContext.Provider value={navbarState}>
            <FloatingMsgContext.Provider value={floatingMsgState}>
                <GlobalContext.Provider
                    value={{
                        isLightTheme,
                        randomlyOrderedStudentsArr,
                        footerArrivedCompletely,
                        aboutPageActiveTab,
                        mainScrollYProgress,
                        scrollRestorationCodingProjects,
                        handleThemeChangeToggle,
                        handleFooterArrivalState,
                        setMainRef,
                        scrollToTop,
                        setAboutPageActiveTab,
                        handleScrollRestorationCodingProject,
                    }}
                >
                    {children}
                </GlobalContext.Provider>
            </FloatingMsgContext.Provider>
        </NavbarContext.Provider>
    );
};

export default GlobalProvider;
