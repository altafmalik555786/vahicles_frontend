import { observer } from "mobx-react";
import { memo } from "react";
import style from "./style.module.scss"
import { Col, Row } from "antd";
import { AiFillFilter, AiOutlineUsergroupAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface Props {}
const AdminDashboard: React.FC<Props> = observer(({ ...props }) => {
  const navigate = useNavigate();
  const links = [
    {name:"Users", link:'/users', icon:<AiOutlineUsergroupAdd />},
    {name:"Posts", link:'/all-posts', icon:<AiFillFilter />},
  ];
  const linkHandler = (link) => {
    navigate(link)
    localStorage.setItem('currentPage',link)
  }
  return (
    <div className={style.mainWrapper}>
        <Row gutter={[10,10]} className={style.mainRow}>
          {links.map((item, index) => {
            return <Col lg={6} md ={6} sm={12} xs={12}  key={index}>
              <div className={style.colItems} onClick={() => linkHandler(item?.link)}>
                {item?.icon}
                <span>{item?.name}</span>
              </div>
            </Col>
          })} 
        </Row>
    </div>
  );
});

export default memo(AdminDashboard);
 