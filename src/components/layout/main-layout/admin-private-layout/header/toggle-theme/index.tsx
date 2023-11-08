import { useStore } from "@stores/root-store";
import { Radio } from "antd";
import { memo, useEffect, useState } from "react";
import style from "./style.module.scss";

export interface changeThemePropsTypes {
  isChangeTheme?: boolean;
}

const ThemeToggleBtn = ( {isChangeTheme = false} : changeThemePropsTypes ) => {
  const [value, setValue] = useState(localStorage.getItem("theme") ||  "light-theme");

  const {
    theme: { changeTheme, updateDefaultTheme},
  } = useStore(null);


  const onChange = async (e) => {
    changeTheme(e.target.value);
    setValue(e.target.value)
    const payload = {
      oldThemeName: localStorage.getItem("theme"),
      newThemeName: e.target.value,
  }
    localStorage.setItem("theme", e.target.value)
    isChangeTheme && await updateDefaultTheme(payload)
  };

  useEffect(() => {
    changeTheme(localStorage.getItem("theme") || "light-theme")
  }, [])
  

  return (
      <Radio.Group className={style.radioThemeSelecting} onChange={onChange} defaultValue={localStorage.getItem("theme")} value={value}>
        <Radio className={style.lightTheme} value={"light-theme"}></Radio>
        <Radio className={style.greyTheme} value={"grey-theme"}></Radio>
        <Radio className={style.darkTheme} value={"dark-theme"}></Radio>
      </Radio.Group>
  );
};

export default memo(ThemeToggleBtn);
