import { createContext } from "react";

interface LoadingContextProps {
    isLoading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  }


export const LoadingScreenContext = createContext<LoadingContextProps | null>(null);  
  