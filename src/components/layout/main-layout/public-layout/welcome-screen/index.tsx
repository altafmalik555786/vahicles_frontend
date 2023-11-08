import { observer } from "mobx-react";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import a5 from "@assets/images/welcomeWhite.png";
import { Button } from "antd";
import { constRoute } from "@utils/route";

const WelcomeScreen = observer(() => {
  const navigate = useNavigate();

  return (
    <>
      <div className={style.main}>
        <div className={style.authHeadeer}>
          <div className={style.authHeadeerLogo}>
            <img className={style.authHeadeerLogoImg} src={a5}></img>
          </div>
          <h1 className={style.authHeaderTitle}>
            Welcome to Climate Finance Co-pilot
          </h1>
          <div className={style.authHeaderSubtitleWrapper} >
          <p className={style.authHeaderSubtitle}>
          Experience a new and transformational way to win funding for climate adaptation/mitigation projects.
          </p>
          </div>
          <div className={style.mainButton}>
            {(!localStorage.getItem("token") && (
              <>
                <Button
                  onClick={() => navigate(constRoute?.login)}
                  className={style.LoginButton} 
                >
                  Log in
                </Button>
                <Button
                  onClick={() => navigate(constRoute?.signup)}
                  className={style.SignButton}
                >
                  Sign Up
                </Button>
              </>
            )) || (
              <Button
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate(constRoute?.login);
                }}
                className={style.LoginButton}
              >
                Log out
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
});

export default memo(WelcomeScreen);
