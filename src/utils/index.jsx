import { lazy } from 'react';

export const AboutPageLazy = lazy(() => import('../pages/About'));
export const ContactPageLazy = lazy(() => import('../pages/Contact'));
export const HomePageLazy = lazy(() => import('../pages/Home'));
export const AllCodingProjectsPageLazy = lazy(() => import('../pages/AllCodingProjects'));
export const StudentsFrontendProjectsPageLazy = lazy(() =>
    import('../pages/StudentsFrontendProjects')
);
