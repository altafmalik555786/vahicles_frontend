import React, { memo } from 'react';
import { Input, Button, Row, Col, Form } from 'antd';
import style from './style.module.scss'
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { observer } from 'mobx-react';
import { useStore } from '@stores/root-store';
import { notification } from '@utils/notifications';
import CustomButton from '@components/common-components/custom-button';
import { constRoute } from '@utils/route';


const EmailVerificationPage = observer(() => {
  const {
    user: { onSignedUpEmailVerification, loadingEmailVerification },
  } = useStore(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // const onFinish = (values: any) => {
  //   console.log('Received values:', values);
  //   navigate('/login'); 
  // };
  const onFinish = async (values) => {
    const payload = {
      email : values?.email
    }
    const resp = await onSignedUpEmailVerification(payload);
    if(resp?.success){
      notification.success('Success, Please check your email')
    }
  };
  

  return (
    <div className={style.main}>
      <Row>
        <Col>
          <h1 style={{ textAlign: 'center' }}>Verify Email</h1>
          <Form
            form={form}
            name="verifyEmailForm"
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
                {
                  type: 'email',
                  message: 'Invalid email format',
                },
              ]}
            >
              <Input placeholder="Email" size="large" />
            </Form.Item>
            <CustomButton title='Verify' loading={loadingEmailVerification} disabled={loadingEmailVerification} className={style.VerifyButton} htmlType="submit" />
            <CustomButton title='Go back to signUp' className={style.VerifyButton} onClick={() => navigate(constRoute?.signup)}/>
              
          </Form>
        </Col>
      </Row>
    </div>
  );
});

export default memo(EmailVerificationPage);
