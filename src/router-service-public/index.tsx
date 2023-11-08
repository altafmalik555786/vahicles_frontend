import Login from "@components/layout/main-layout/public-layout/login";
import ResetNewPassword from "@components/layout/main-layout/public-layout/login/reset-new-password";
import ResetPassword from "@components/layout/main-layout/public-layout/login/reset-password/reset-password";
import VerifyResetCode from "@components/layout/main-layout/public-layout/login/verify-reset-code";
import Signup from "@components/layout/main-layout/public-layout/signup";
import VerifyEmail from "@components/layout/main-layout/public-layout/signup/verify-email";
import EmailVerificationPage from "@components/layout/main-layout/public-layout/verify-email";
import VerifySuccessEmail from "@components/layout/main-layout/public-layout/verify-success-email";
import Home from "@components/pages/home";
import { constRoute } from "@utils/route";
import { memo } from "react";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path={constRoute?.login} element={<Login />} />
        <Route path={constRoute?.signup} element={<Signup />} />
        <Route path={constRoute?.emailVerification} element={<EmailVerificationPage/>} />
        <Route path={constRoute?.VerifyEmail} element={<VerifyEmail/>} />
        <Route path={constRoute?.ResetPassword} element={<ResetPassword/>} />
        <Route path={constRoute?.verifyResetCode} element={<VerifyResetCode />} />
        <Route path={constRoute?.enterNewPassword} element={<ResetNewPassword />} />
        <Route path={constRoute?.verifyRegisterEmail} element={<VerifySuccessEmail />} />
      </Routes>
    </>
  );
};
export default memo(Routing);
