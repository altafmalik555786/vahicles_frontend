import { constRoute } from "@utils/route";
import { Button, Menu } from "antd";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import useWindowSize from "@utils/hooks/useWindowSize";
import style from "./style.module.scss";
import { observer } from "mobx-react";
import { resetStore, useStore } from "@stores/root-store";
import LogoutIcon from "@assets/icons/log-out.svg";
import { onLogOutClearAll } from "@utils/common-functions";
import { AiOutlineLogout } from "react-icons/ai";
const Header = observer(() => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState( localStorage.getItem('currentPage')||"/");
  // const {
  //   // user: { getCurrentUserData },
  // } = useStore(null);
  const onLogout = () => {
    resetStore();
    localStorage.removeItem("AllAnswers");
    localStorage.removeItem("token");
    localStorage.removeItem("theme");
    navigate(constRoute.login);
  };
  const data = useWindowSize().width;
  useEffect(() => {
    if (data < 470) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [data]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate(constRoute.login);
    }
  }, []);

  const items = [
    {
      label: "Dashboard",
      key: "/",
    },
    { 
      label: "Users",
      key: "/users",
    },
    {
      label: "All Posts",
      key: "/all-posts",
    }
  ];

  useEffect(() => {
    setCurrent(localStorage.getItem('currentPage'))
  } ,
  [localStorage.getItem('currentPage')])
  const onClick = (menu) => {
    setCurrent(menu);
    navigate(menu);
    localStorage.setItem('currentPage',menu)
  };

  const menuItems = useMemo(() => (
    <div className={style.newMenuWrapper}>
      {items?.map((item, index) => {
        return <span className={current === item?.key ? style.menuSpanActive : style.menuSpan} key={index} onClick={() => onClick(item?.key)}>
          {item?.label}
        </span>
      })}
    </div>
  ),[current])



  const styles = { background: `linear-gradient(to right,#00c5fb, 0%, 100%)` };

  const menuMemoized = useMemo(
    () =>
      !collapsed && (
        <div className={style.menuResponsive}>
          {menuItems}
          <div>
          </div>
        </div>
      ),
    [collapsed, items]
  );

  return (
    <div className={style.topHeaderBar}>
      <div
        className={style.headerContainer}
        style={{ right: "0px", ...styles }}
      > 
          {(data < 470 || collapsed) && (
        <div className={style.headerMenuContainer}>
            <MenuOutlined
              onClick={() => setCollapsed(!collapsed)}
              className={style.menuOutlinedIcon}
            />
        </div>
          )}

        {menuMemoized}
        <Button style={{background:"transparent", color:'#fff', padding:10,fontWeight:'bold', border:0, display:'flex', alignItems:'center',gap:4, width:'100px', justifyContent:'center'}} onClick={() => onLogOutClearAll(navigate)} icon={<AiOutlineLogout style={{fontSize:16}}/>}>Logout</Button>
      </div>
    </div>
  );
});

export default Header;
