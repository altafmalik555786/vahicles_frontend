import { Button, Checkbox, Form, Input, Select, Spin } from "antd";
import { observer } from "mobx-react";
import { memo, useEffect, useState } from "react";
import style from "./style.module.scss";
import Eye from "@assets/icons/Eye.png";
import EyeOff from "@assets/icons/EyeOff.png";
import welcomeLogo from "@assets/images/welcomeLogo.png";
import { validateMessages } from "@utils/json-data";
import { useStore } from "@stores/root-store";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { notification } from "@utils/notifications";

const SignUp = observer(() => {
  const [signUpForm] = Form.useForm();
  const navigate = useNavigate();
  const [isAccept, setIsAccept] = useState(true);
  const {
    user: { onSignedUp },
  } = useStore(null);

  const onFormSubmit = async (values) => {
    const payload = {
      name: values?.fullName,
      password: values?.password,
      email: values?.email,
      contact: values?.phone
    }
    localStorage.setItem("signUpPayload",JSON.stringify(payload))
    navigate(constRoute.emailVerification)
  };

  const onChange = (e: CheckboxChangeEvent) => {
    setIsAccept(e.target.checked);
  };

  return (
    <div className={style.mainSignUpWrraper}>
      <div style={{ width: 500, margin: 20 }}>
        <div className={style.welcomeWrraper}>
          <img src={welcomeLogo} alt="" />
          <h2>Create Your Account</h2>
        </div>
        <Form
          form={signUpForm}
          name={"basic"}
          onFinish={onFormSubmit}
          autoComplete={"off"}
          validateMessages={validateMessages}
          layout="vertical"
          className={style.signUpForm} 
        >
          
           <Form.Item label={"Full Name"} name={"fullName"}>
            <Input placeholder="Enter full name" />
          </Form.Item>
          <Form.Item
            label={"Email Address"}
            name={"email"}
            rules={[
              {
                required: true,
                type: "email",
                message: `Please provide a valid email address`,
              },
            ]}
          >
            <Input placeholder="Enter email address" />
          </Form.Item>
          <Form.Item label={"Phone Number"} name={"phone"}>
            <Input placeholder="Enter phone number" />
          </Form.Item>
          <Form.Item label={"Password"} name={"password"}
           rules={[
            {
              required: true,
              message: "Password is required",
            },
          ]}
          >
            <Input.Password
              placeholder="Enter password"
              iconRender={(visible) =>
                visible ? (
                  <img height={18} width={18} src={Eye} alt="" />
                ) : (
                  <img height={18} width={18} src={EyeOff} alt="" />
                )
              }
            />
          </Form.Item> 
        </Form>
        <div>
          <div className={style.signUpWrraper}>
            <Form form={signUpForm} onFinish={onFormSubmit}>
              <Button
                htmlType="submit"
                disabled={!isAccept}
                className={style.signUpBtn}
              >
                Next
                {/* {(isLoadingEmailVerification && <Spin />) || "Sign Up"} */}
              </Button>
            </Form>
          </div>
          <div className={style.loginWrraper}>
            <p>Already have an account?</p>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => navigate(constRoute?.login)}
            >
              Log In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
 
export default memo(SignUp);
