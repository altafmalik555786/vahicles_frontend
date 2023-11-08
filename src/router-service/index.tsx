import Chat from "@components/chat";
import Home from "@components/pages/home";
import { constRoute } from "@utils/route";
import { memo } from "react";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path={constRoute?.dashboard} element={<Home />} />
        <Route path={constRoute?.chat} element={<Chat />} />
      </Routes>
    </>
  );
};
export default memo(Routing);
