import { constRoute } from "@utils/route";
import { Button, Dropdown, Menu, Row, Space } from "antd";
import { useEffect, useMemo, useState } from "react";
import welcomeLogo from "@assets/images/welcomeLogo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MenuOutlined, ShoppingOutlined } from "@ant-design/icons";
// import {ShoppingOutlined} from "@ant-design/icons"
import useWindowSize from "@utils/hooks/useWindowSize";
import type { MenuProps } from "antd";
import style from "./style.module.scss";
import { observer } from "mobx-react";
import { resetStore, useStore } from "@stores/root-store";
import LogoutIcon from "@assets/icons/log-out.svg";
import CustomButton from "@components/common-components/custom-button";
import { onLogOutClearAll } from "@utils/common-functions";
import { AiOutlineLogout } from "react-icons/ai";
const Header = observer(() => {
  const navigate = useNavigate();
  const location =  useLocation()
  const [collapsed, setCollapsed] = useState(false);
  const [isFaqModel, setIsFaqModel] = useState(false)
  const [openTermModel, setOpenTermModel] = useState(false)
  const [isTermShow, setIsTermShow] = useState(false)
  const [isTermModel, setIsTermmodel] = useState(false)
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
  // const handleLoadUserInfoDetal=async()=>{
  //  await loadUserInfo(navigate)
  // }
  // useEffect(()=>{
  //     handleLoadUserInfoDetal()
  // }, [navigate])
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
      label: "Home",
      key: "/",
    },
    { 
      label: "Chat",
      key: "/chat",
    },
    {
      label: "The Founder",
      key: "/founder",
    }
  ];

  // const onClick: MenuProps["onClick"] = (e) => {
  //   setCurrent(e.key);
  //   navigate(e.key);
  // };


  const dropdownMenu = (
    <div className={style.profileDropDonwMenu}>
      {/* <div className={style.userData}>
        <b style={{textTransform: 'capitalize'}}>{`${getCurrentUserData?.firstname || " "}  ${
          getCurrentUserData?.lastname || ""
        }`}</b>
        <p>{getCurrentUserData?.email || ""}</p>
      </div> */}

      <Menu>
        <Menu.Item className={style.itemWithImgIcon} onClick={onLogout}>
          <img src={LogoutIcon} alt="logout" />
          Logout
        </Menu.Item>
      </Menu>
    </div>
  );
  // const closeTermModel = ()=>{
  // setOpenTermModel(false)
  // }

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
          <div className={style.welcomeText} onClick={()=>{
            setCurrent('/home');
            navigate(constRoute?.home)
            }}>
            <img src={"https://logo.com/image-cdn/images/kts928pd/production/28563b4f836c667b30238865f796aeb03ae702db-358x357.png?w=1080&q=72"} alt="logo" />
          </div>
          {/* <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode={data > 576 ? "horizontal" : "vertical"}
            className={style.menuHeader}
            inlineCollapsed={false}
            items={items}
          /> */}
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
