import { memo, useEffect, useState } from "react";
import Routing from "../../../../router-service";
import { observer } from "mobx-react";
import style from "../../style.module.scss";
import Header from "./header";
import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@utils/hooks/useTheme";
import { constRoute } from "@utils/route";
import Footer from "@components/footer";

const PrivateLayout = observer(() => {
  const { Sider, Content } = Layout;

  const theme = useTheme();
  const navigate = useNavigate();

  // const {
  //   user: { loadUserInfo, getUserInfo },
  // } = useStore(null);

  // useEffect(() => {
  //   if (getUserInfo == null && window.location.pathname !== constRoute.login) {
  //     loadUserInfo(navigate);
  //   }
  // }, []);

  return (
    <div className={theme} >
      <Layout className={style.layoutSetting}>
        <Layout>
          <Header />
          {/* <UpgradePlanBar /> */}
          <Content className={style.routingPagesContainer}>
            <Routing />
          </Content>
          {/* <Footer /> */}
        </Layout>
      </Layout>
    </div>
  );
});
export default memo(PrivateLayout);
