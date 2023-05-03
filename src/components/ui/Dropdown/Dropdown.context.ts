import { createContext, useContext } from "react";

export const DropdownContext = createContext({
  closeHandler: undefined as unknown as () => void,
});

export const useDropdown = () => useContext(DropdownContext);
