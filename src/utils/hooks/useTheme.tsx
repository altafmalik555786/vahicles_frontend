import { useStore } from "@stores/root-store";
import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("light-theme");

  const {
    theme: {getSelectedTheme},
  } = useStore(null);

  useEffect(() => {
      setTheme(localStorage.getItem("theme"))
  }, [])
  
  useEffect(() => {
    setTheme(getSelectedTheme)
  }, [getSelectedTheme])
  
  return theme;
};

