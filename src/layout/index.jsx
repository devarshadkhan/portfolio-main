import { memo } from 'react';
import VerSectionsWrapper from './VerSectionsWrapper';
import HorSectionsWrapper from './HorSectionsWrapper';

export const MemoVerSectionsWrapper = memo(VerSectionsWrapper);
export const MemoHorSectionsWrapper = memo(HorSectionsWrapper);

export { default as Header } from './Header.jsx';
export { default as Hero } from './Hero.jsx';
export { default as Skills } from './Skills.jsx';
export { default as CodingProjects } from './CodingProjects.jsx';
export { default as DesignProjects } from './DesignProjects.jsx';
export { default as Testimonials } from './Testimonials.jsx';
export { default as Footer } from './Footer.jsx';
