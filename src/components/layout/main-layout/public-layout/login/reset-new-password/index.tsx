import React, { memo } from 'react';
import { Input, Button, Row, Col, Form } from 'antd';
import style from './style.module.scss'
import { useStore } from '@stores/root-store';
import { constRoute } from '@utils/route';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import CustomButton from '@components/common-components/custom-button';
// import { useNavigate } from 'react-router-dom'; 


const ResetNewPassword = observer(() => {
  const [form] = Form.useForm();
  const { user: { loadResetPassword,loadingResetPassword } } = useStore(null)
  const navigate = useNavigate();

  const onFinish = async(values: any) => {
    console.log('Received values:', values);
    const payload = {
      password:values?.code,
      email:values?.email
    }
    const resp = await loadResetPassword(payload);
    if(resp?.success) {
      form.resetFields();
      navigate(constRoute?.login)
    }
  };

  return (
    <div className={style.main}>
      <Row>
        <Col>
          <p style={{ textAlign: 'center' }}>Enter Email & new password to Reset Password</p>
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
            <Form.Item
              name="code"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input placeholder="type your password..." size="large" />
            </Form.Item>
            <CustomButton title='Verify' loading={loadingResetPassword} disabled={loadingResetPassword} className={style.VerifyButton} type="primary" size="large" htmlType="submit" />
          </Form>
          {/* <p style={{ textAlign: 'center' }}>Remembered suddenly ? <span>Login</span></p> */}

        </Col>
      </Row>
    </div>
  );
});

export default memo(ResetNewPassword);
