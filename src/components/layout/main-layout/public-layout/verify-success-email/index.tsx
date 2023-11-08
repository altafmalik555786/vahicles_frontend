import React, { memo, useEffect } from 'react';
import {Row } from 'antd';
import style from './style.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'; 
import { observer } from 'mobx-react';
import { useStore } from '@stores/root-store';
import { notification } from '@utils/notifications';
import { getSingleUrlParam } from '@utils/common-functions';
import { constRoute } from '@utils/route';
import CustomButton from '@components/common-components/custom-button';


const VerifySuccessEmail = observer(() => {
  const {
    user: { onSignedUpVerifyEmailSuccess, onSignedUp },
  } = useStore(null);
  const location = useLocation();
  const getToken = getSingleUrlParam(location,'token')
  // const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    onFinish()
  },[getToken])
  const onFinish = async () => {
    const payload = {
      token: getToken
    }
    const resp = await onSignedUpVerifyEmailSuccess(payload);
    if(resp?.success){
      const registerPayload = JSON.parse(localStorage.getItem('signUpPayload'))
       await onSignedUp(registerPayload, navigate);
    }
  };
  

  return (
    <div className={style.main}>
      <Row>
        <div style={{display:'flex', flexDirection:'column'}}>
        <h1>Welcome to Email verification Page!</h1>
        <h3>Please wait when your email verification success then your account is created.</h3>
        <CustomButton title='Go back to SignUp' onClick={() => navigate(constRoute?.signup)}/>
        </div>
      </Row>
    </div>
  );
});

export default memo(VerifySuccessEmail);
