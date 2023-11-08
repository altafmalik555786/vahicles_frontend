import { observer } from "mobx-react";
import { memo } from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { Divider } from "antd";

interface Props {}
const Footer: React.FC<Props> = observer(({ ...props }) => {
  return (
    <div className={style.mainWrraper}>
      <footer className={style.footer}>
        <div className={style.container}>
          <div className={style.row}>
            <div className={style.footerCol}>
              <h4>CopperDisinfector</h4>
              <ul>
                <li>
                  <Link to="#" className={style.a}>1780 Bobcat Ct,</Link>
                  <Link to="#"> Minden, NV 89423 </Link>
                  <Link to="#"> 775 782 4464 </Link>
                
                  <Link to="#">info@copperdisinfector.com</Link>
                </li>
                {/* <li><Link to="#">our services</Link></li>
  	 				<li><Link to="#">privacy policy</Link></li>
  	 				<li><Link to="#">affiliate program</Link></li> */}
              </ul>
            </div>
            <div className={style.footerCol}>
              <h4>The Company</h4>
              <ul>
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">shop</Link>
                </li>
                <li>
                  <Link to="#">The Founder</Link>
                </li>
                <li>
                  <Link to="#">Contect us</Link>
                </li>
                <li>
                  <Link to="#">Investor Contact</Link>
                </li>
                <li>
                  <Link to="#">FAQs</Link>
                </li>
              </ul>
            </div>
            <div className={style.footerCol}>
              <h4>Information</h4>
              <ul>
                <li>
                  <Link to="#">News Update</Link>
                </li>
                <li>
                  <Link to="#">Gallery</Link>
                </li>
                <li>
                  <Link to="#">Installation and Application</Link>
                </li>
                <li>
                  <Link to="#">Shipping & Refund Policy</Link>
                </li>
                <li>
                  <Link to="#">Terms & Conditions of Sales</Link>
                </li>
              </ul>
            </div>
           
          </div>
          <Divider/>
            <div className={style.sd  }>
              <h4>© 2023 · UVC LLC | All Rights Reserved. | Designed By PrimalCreate®</h4>
              <div className="social-links">
                <Link to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-instagram" ></i>
                </Link>
                
              </div>
            </div>
        </div>
        
      </footer>
    </div>
  );
});

export default memo(Footer);
