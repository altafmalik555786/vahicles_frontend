import React from "react";
import style from "./style.module.scss";
const Footer = () => {
  return ( 
    <div className={style.footerContainer} >
      <p className={style.footerPTag} >
        © 2023 Janus Advisory Services. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
