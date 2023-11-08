import React, { memo } from 'react';
import { Input, Button, Row, Col, Form } from 'antd';
import style from './style.module.scss'
import { useStore } from '@stores/root-store';
import { constRoute } from '@utils/route';
import { useNavigate } from 'react-router-dom';
import CustomButton from '@components/common-components/custom-button';
import { observer } from 'mobx-react';
// import { useNavigate } from 'react-router-dom'; 


const ResetPassword = observer(() => {
  const [form] = Form.useForm();
  const { user: { loadResetPassEmailVerification, loadingPasswordResetEmail } } = useStore(null)
  const navigate = useNavigate();

  const onFinish = async(values: any) => {
    console.log('Received values:', values);
    const payload = {
      email:values?.email
    }
    const resp = await loadResetPassEmailVerification(payload);
    if(resp?.success) navigate(constRoute?.verifyResetCode)
  };

  return (
    <div className={style.main}>
      <Row>
        <Col>
          <p style={{ textAlign: 'center' }}>Enter Email to Reset Password</p>
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
            <CustomButton title='Send reset link' loading={loadingPasswordResetEmail} disabled={loadingPasswordResetEmail} className={style.VerifyButton} type="primary" size="large" htmlType="submit" />
              
          </Form>
          <p style={{ textAlign: 'center' }}>Remembered suddenly ? <span>Login</span></p>

        </Col>
      </Row>
    </div>
  );
});

export default memo(ResetPassword);
