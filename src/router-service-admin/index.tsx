import AdminDashboard from "@components/layout/main-layout/admin-private-layout/pages/admin-dashboard";
import AllPosts from "@components/layout/main-layout/admin-private-layout/pages/all-posts";
import AllUsers from "@components/layout/main-layout/admin-private-layout/pages/all-users";
import { constRoute } from "@utils/route";
import { memo } from "react";
import { Route, Routes } from "react-router-dom";

const AdminRouting = () => {
  return (
    <>
      <Routes>
        <Route path={constRoute?.dashboard} element={<AdminDashboard />} />
        <Route path={constRoute?.users} element={<AllUsers />} />
        <Route path={constRoute?.posts} element={<AllPosts />} />
      </Routes>
    </>
  );
};
export default memo(AdminRouting);
