import { useEffect, useRef } from 'react';
import { usePresence } from 'framer-motion';
import { useFloatingMsgContext, useGlobalContext, useNavbarContext } from '../store';

import { MemoHorSectionsWrapper, MemoVerSectionsWrapper } from '../layout';
import {
    handlePageTransitionScreenArrival,
    handlePageTransitionScreenRemoval,
} from '../utils/helpers';

const HomePage = () => {
    const { setMainRef, scrollRestorationCodingProjects, handleScrollRestorationCodingProject } =
        useGlobalContext();

    const { handleNavbarVisibilityState } = useNavbarContext();
    const { handleFloatingMsgContainerVisibilityState } = useFloatingMsgContext();

    const mainRef = useRef(null);

    const [isPresent, safeToRemove] = usePresence();

    useEffect(() => {
        if (mainRef.current) {
            setMainRef(mainRef);
        }
    }, [setMainRef]);

    useEffect(() => {
        handlePageTransitionScreenRemoval();
    }, []);

    useEffect(() => {
        if (scrollRestorationCodingProjects) {
            document
                .querySelector('#coding_projects_section_id')
                .scrollIntoView({ behavior: 'smooth', block: 'end' });
            handleScrollRestorationCodingProject(false);
            handleNavbarVisibilityState(false);
            handleFloatingMsgContainerVisibilityState(true);
        }
    }, [
        scrollRestorationCodingProjects,
        handleScrollRestorationCodingProject,
        handleNavbarVisibilityState,
        handleFloatingMsgContainerVisibilityState,
    ]);

    useEffect(() => {
        if (!isPresent) {
            handlePageTransitionScreenArrival(safeToRemove);
        }
    }, [isPresent, safeToRemove]);

    return (
        <>
            <main className={`main_wrapper`} ref={mainRef}>
                <MemoHorSectionsWrapper />
                <MemoVerSectionsWrapper />
            </main>
        </>
    );
};
export default HomePage;
