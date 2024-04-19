import { createContext, useContext /*  useRef  */ } from "react";

export const RefContext = createContext();

export const useRefs = () => {
  return useContext(RefContext);
};
