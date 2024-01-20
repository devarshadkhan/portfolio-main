import { createContext } from 'react';

export const FloatingMsgContext = createContext({
    floatingMsgContainerVisibility: false,
    floatingMsgIndex: 0,
    handleFloatingMsgContainerVisibilityState: p => {
        p;
    },
    handleFloatingMsgIdxState: p => {
        p;
    },
});
