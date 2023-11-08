import { observer } from "mobx-react-lite";
import PublicLayout from "./main-layout/public-layout";
import PrivateLayout from "./main-layout/private-layout";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { constRoute } from "@utils/route";
import { useStore } from "@stores/root-store";
import WholePageLoader from "@components/common-components/whole-page-loader";
import AdminPrivateLayout from "./main-layout/admin-private-layout";
const DefaultLayout = observer(() => {
  const navigate = useNavigate();
  const location = useLocation()
  const [isToken, setIsToken] = useState(localStorage.getItem('token'));
  const [userRole, setUserRole] = useState(localStorage.getItem('blogRole'))
  const currentActiveLinks = localStorage.getItem('currentLink');

  useEffect(() => {
    setUserRole(localStorage.getItem('blogRole'))
  }, [localStorage.getItem('blogRole')])

  useEffect(() => {
    const storedLowerToken = localStorage.getItem('token');
    handleTokenAndNavigation(storedLowerToken);
  }, [JSON.stringify(localStorage.getItem('token'))]);
  
  const handleTokenAndNavigation = (storedLowerToken) => {
    if (storedLowerToken && storedLowerToken.length > 0) {
      setIsToken(storedLowerToken);
      if(window?.location?.hash === '#/login')navigate(constRoute?.dashboard)
      if (!isPrivacyPolicyOrTerms()) navigate(window?.location?.hash?.replaceAll('#/', ''));
    } else {
      clearLocalStorageAndNavigate();
    }
  };
  
  const isPrivacyPolicyOrTerms = () => {
    const validPaths = ['/verify-register-email/'];
    const { pathname } = location;
    console.warn('pathname', pathname)
    return validPaths.includes(pathname);
  };
  
  const clearLocalStorageAndNavigate = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentLink');
    console.warn('isPrivacyPolicyOrTerms', isPrivacyPolicyOrTerms())
    if (!isPrivacyPolicyOrTerms()) {
      navigate(constRoute?.login);
    }
    setIsToken('');
  };

  console.log('isToken', isToken)
  return (
    (isToken === null && <WholePageLoader />) || ( isToken  && (userRole === '0' ? <AdminPrivateLayout /> : <PrivateLayout />)) || <PublicLayout /> 
)});

export default DefaultLayout;
