import Box from "@mui/joy/Box";
import * as React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import AppHeader from "../../components/AppHeader";
import DashboardLayout, { SideDrawer } from "../../components/DashboardLayout";
import SideBar from "../../components/Sidebar";

import Files from "./files";
import Media from "./media";
import Trash from "./trash";

import useTitle from "../../utils/useTitle";

export default function Dashboard() {
  useTitle("Example | Dashboard");

  const [drawerOpenMobile, setDrawerOpenMobile] = React.useState(false);

  return (
    <>
      {/* mobile drawer */}
      {drawerOpenMobile && (
        <SideDrawer onClose={() => setDrawerOpenMobile(false)}>
          <SideBar />
        </SideDrawer>
      )}
      {/* /dashboard/... */}
      <Routes>
        <Route index element={<Navigate to="files" />} />
        <Route
          path="/*"
          element={
            <DashboardLayout>
              <AppHeader onDrawerClick={setDrawerOpenMobile} />
              <SideBar />
              <Box component="main" className="Main">
                <Outlet />
              </Box>
            </DashboardLayout>
          }
        >
          <Route path="files/*" element={<Files />} />
          <Route path="media" element={<Media />} />
          <Route path="trash" element={<Trash />} />
          <Route path="*" element={<Navigate to="files" />} />
        </Route>
      </Routes>
    </>
  );
}
