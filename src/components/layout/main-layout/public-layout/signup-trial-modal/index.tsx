import React, { memo, useEffect, useState } from "react";
import { Button, Modal } from "antd";
import trialIcon from "@assets/images/trialIcon.png";
import style from "./style.module.scss";
interface modalProps {
  open?: any;
  setOpenModal?: any;
}

const SignupTrialModal: React.FC<modalProps> = ({ open, setOpenModal }) => {
  return (
    <Modal
      title=""
      footer={null}
      open={open}
      onCancel={() => {
        localStorage.removeItem("trialModal");
        setOpenModal(false);
      }}
    >
      <div style={{margin: -24}}>
        <div className={style.trialLogoWrraper}>
          <img src={trialIcon} alt="trialIcon" height={139} width={134} />
        </div>
        <div className={style.contentWrraper}>
          <p>Your 20-day free trial starts today</p>
          <span>
            Congrats! You’re in and now you have access to premium paid features
            like unlimited concept notes, proposals and grading tools.
          </span>
          <br />
          <br />
          <span>
            Once your trial ends, you can either upgrade or you can continue to
            the free Basic plan.{" "}
          </span>
        </div>
        <div className={style.startBtnWrraper}>
          <Button
            className={style.startBtn}
            onClick={() => {
              localStorage.removeItem("trialModal");
              setOpenModal(false);
            }}
          >
            Let’s start
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default memo(SignupTrialModal);
