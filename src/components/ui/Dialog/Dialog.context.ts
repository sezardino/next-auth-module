import { createContext, useContext } from "react";

export const DialogContext = createContext({
  closeHandler: undefined as unknown as () => void,
});

export const useDialog = () => useContext(DialogContext);
