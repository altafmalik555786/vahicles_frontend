import { observer } from "mobx-react";
import { memo, useEffect } from "react";
import welcomeLogo from "@assets/images/welcomeLogo.png";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import { useStore } from "@stores/root-store";

const CheckEmail = observer(() => {
  const navigate = useNavigate();
  const {
    user: { },
  } = useStore(null);

  const onResend = async () => {

  };

  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <div className={style.headingWrapper}>
          <img src={welcomeLogo} alt="janus-logo" className={style.janusLogo} />
          <h2 className={style.checkEmail}>Check Your Email</h2>
          <p className={style.paraText}>
            We sent a password reset link to{" "}
            <b>{localStorage.getItem("resendEmail") || "example@example.com"}</b>
          </p>
        </div>
        <div className={style.outerLink}> 
          <p>Didn’t receive the email link?</p>
          <span onClick={onResend} className={style.aLink}>
            Click to resend
          </span>
        </div>
        <div className={style.outerLinkBtn}>
          <p>Back to</p>
          <span
            onClick={() => navigate(constRoute.login)}
            className={style.aLink}
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
});

export default memo(CheckEmail);
