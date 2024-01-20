import { createContext } from 'react';

export const NavbarContext = createContext({
    navbarVisibility: true,
    handleNavbarVisibilityState: p => {
        p;
    },
});
