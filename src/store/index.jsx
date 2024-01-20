import { useContext } from 'react';
import { GlobalContext } from './global-context';
import { NavbarContext } from './navbar-context';
import { FloatingMsgContext } from './floatingMsg-context';

export const useGlobalContext = () => useContext(GlobalContext);
export const useNavbarContext = () => useContext(NavbarContext);
export const useFloatingMsgContext = () => useContext(FloatingMsgContext);
