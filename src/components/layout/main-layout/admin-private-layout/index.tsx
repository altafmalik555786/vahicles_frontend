import { memo, useEffect, useRef, useState } from "react";
import AdminRouting from "../../../../router-service-admin";
import { observer } from "mobx-react";
import style from "../../style.module.scss";
import Header from "./header";
import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@utils/hooks/useTheme";
import { constRoute } from "@utils/route";
import Footer from "@components/footer";
import Sidebar from "./Sidebar";

const AdminPrivateLayout = observer(() => {
  const { Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const popupRef = useRef(null)


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
      {/* <Sider
          // onFocus={() => setCollapsed(false)}
          style={{background:'gray'}}
          // className={
          //   !collapsed
          //     ? classNames(style.mobileHide, style.sidebarSetting)
          //     : classNames(style.mobileshow, style.sidebarSetting)
          // }
          collapsible
          collapsed={collapsed}
         
          ref={popupRef}
        >
          <Sidebar 
          collapsed={collapsed}  setCollapsed={setCollapsed}
          />
        </Sider> */}
        <Layout>
          <Header />
          {/* <UpgradePlanBar /> */}
          <Content className={style.routingPagesContainer}>
            <AdminRouting />
          </Content>
          {/* <Footer /> */}
        </Layout>
      </Layout>
    </div>
  );
});
export default memo(AdminPrivateLayout);
