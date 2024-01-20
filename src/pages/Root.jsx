import { useState } from 'react';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import { useLocation, useOutlet, ScrollRestoration } from 'react-router-dom';

import { Header } from '../layout';
import { Aside } from '../components';

const AnimatedOutlet = () => {
    const o = useOutlet();
    const [outlet] = useState(o);

    return <>{outlet}</>;
};

const RootLayout = () => {
    const location = useLocation();

    return (
        <LazyMotion features={domAnimation} strict>
            <Header />
            <AnimatePresence mode="wait">
                <m.div
                    key={location.pathname}
                >
                    <AnimatedOutlet />
                </m.div>
            </AnimatePresence>
            <Aside />
            <ScrollRestoration />
        </LazyMotion>
    );
};
export default RootLayout;
