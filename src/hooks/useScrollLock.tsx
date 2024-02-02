import { useCallback } from "react";

export const useScrollLock = () => { 
    const lockScroll = useCallback(() => { 
      document.body.style.overflowY = "hidden";
    }, [])
  
    const unlockScroll = useCallback(() => { 
        document.body.style.overflowY = "auto";
    }, []);
  
    return {
      lockScroll,
      unlockScroll
    };  
  }