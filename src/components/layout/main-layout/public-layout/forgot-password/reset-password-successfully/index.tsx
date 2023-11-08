import { observer } from "mobx-react";
import { memo } from "react";
import welcomeLogo from "@assets/images/welcomeLogo.png";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import { Button } from "antd";

const ResetPasswordSuccessfully = observer(() => {
  const navigate = useNavigate();

  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <div className={style.headingWrapper}>
          <img src={welcomeLogo} alt="janus-logo" className={style.janusLogo} />
          <h2 className={style.checkEmail}>Password Reset</h2>
          <p className={style.paraText}>
            Your password has been successfully reset. Click continue below to
            log back in with your new password.
          </p>
        </div>
        <div className={style.loginWrraper}>
          <Button onClick={() => navigate(constRoute?.login)} className={style.continue} htmlType="submit">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
});

export default memo(ResetPasswordSuccessfully);
