import { useContext } from "react";
import { DispatchContext } from "../providers/contexts";

export const useDispatch = () => {
  const context = useContext(DispatchContext);
  if (!context) {
    throw new Error("useDispatchContext must be used within a StateProvider");
  }
  return context;
};