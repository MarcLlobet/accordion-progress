import { useContext } from "react";
import { DispatchContext } from "../state";

export const useDispatch = () => {
  const context = useContext(DispatchContext);
  if (!context) {
    throw new Error("useDispatch must be used within a DispatchProvider");
  }
  return context;
};
