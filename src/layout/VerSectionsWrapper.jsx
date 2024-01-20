import { CodingProjects, DesignProjects, Testimonials, Footer } from '.';

import styles from './VerSectionsWrapper.module.css';

const VerSectionsWrapper = () => {
    return (
        <section className={styles.ver_sections_wrapper}>
            <CodingProjects />
            <DesignProjects />
            <Testimonials />
            <Footer />
        </section>
    );
};
export default VerSectionsWrapper;
