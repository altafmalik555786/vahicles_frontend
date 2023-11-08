import { useState, useEffect } from "react";
import { Drawer, DrawerProps, Menu } from "antd";
import { useLocation } from "react-router-dom";
import { observer } from "mobx-react";
import { useTheme } from "@utils/hooks/useTheme";
import useWindowSize from "@utils/hooks/useWindowSize";
import { useStore } from "@stores/root-store";
import { useNavigate } from "react-router-dom";
import { constRoute } from "@utils/route";
import style from "./style.module.scss"
import moment from "moment";
const Sidebar = observer(({ collapsed, setCollapsed, open, setOpen }: any) => {
  const theme = useTheme();
  // const {
  //   user: { loadEventsBySport},
  // } = useStore(null);
  const navigate = useNavigate();
  const [placement] = useState<DrawerProps["placement"]>("left");
  const [activeElement, setActiveElement] = useState("");
  const [activeElementOnHover, setActiveElementOnHover] = useState("");
  const [isEventBySportsData, setEventsBySportsData] = useState(null)
  const [menuList, setMenuList] = useState([]);
  const [raceList, setRaceList] = useState(null);
  const location = useLocation();
  const innerWidth = useWindowSize().width;
  const pathname = location.pathname;
  const search = location.search;
  const [gameName, setGameName] = useState("");
  const [menuMarket, setMenuMarket] = useState(null);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setEventsBySportsData([])
    setRaceList([])
  };
  useEffect(() => {
    setActiveElement(`${pathname}${search}`);
  }, [location?.pathname, localStorage.getItem("currentLink")]);


  const menuHandler = async(menu) => {

    if (menu?.market) {
      setMenuMarket(menu?.market);
      setGameName(menu?.name);
      showDrawer();
    } else {
      localStorage.setItem("currentLink", menu?.link);
      navigate(`${menu?.link}`);
    }
    if (innerWidth < 650) {
      if (menu?.market) setCollapsed(false);
      else setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }
  return (
    <>
      <div className={style.mainWrapper}>
        <Menu
          className={style.mainMenu}
          // theme={LOWER_DARK}
          mode="inline"
          inlineCollapsed={collapsed}
          selectedKeys={[window?.location?.pathname]}
          defaultSelectedKeys={[window?.location?.pathname]}
        >
          <div className={style.brandLogo} onClick={()=>{
             localStorage.setItem("currentLink", constRoute.dashboard)
            navigate(constRoute.dashboard)}}>
            <img src={'https://logo.com/image-cdn/images/kts928pd/production/28563b4f836c667b30238865f796aeb03ae702db-358x357.png?w=1080&q=72'} alt="Logo" />
            <h1>
              1<i>{"Cool Blogging"}</i>
            </h1>
          </div>
          {/* {menuList?.map((val, key1) => {
            const element = val?.menu?.map((menu, key2) => {
              return ( */}
                <Menu.Item
                  // className={}
                  onClick={() => menuHandler('menu')}
                  icon={
                    <img
                      style={{ width: "18px", height: "18px" }}
                      alt=""
                      src={''}
                    />
                  }
                  // onMouseEnter={() => setActiveElementOnHover(menu?.link)}
                  // onMouseLeave={() => setActiveElementOnHover("")}
                >
                  <div
                    onClick={async () => {menuHandler('menu')}}
                  >
                    {'Users'}
                  </div>
                </Menu.Item>
              {/* );
            });
            return (
              <>
                <p className={style.menuTitle}> MAIN MENU </p>
                {element}
              </>
            ); */}
          {/* })} */}
        </Menu>
      </div>
    </>
  );
});

export default Sidebar;
