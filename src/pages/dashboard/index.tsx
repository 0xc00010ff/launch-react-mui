import Box from "@mui/joy/Box";
import * as React from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router";
import AppHeader from "../../components/AppHeader";
import DashboardLayout, { SideDrawer } from "../../components/DashboardLayout";
import FileDetail from "./files/[fileId]";
import SideBar from "../../components/Sidebar";
import MasterDetail from "../../components/MasterDetail";

import Files from "./files";
import Media from "./media";
import Trash from "./trash";

export default function Dashboard() {
  const [drawerOpenMobile, setDrawerOpenMobile] = React.useState(false);

  const navigate = useNavigate();

  return (
    <>
      {/* mobile drawer */}
      {drawerOpenMobile && (
        <SideDrawer onClose={() => setDrawerOpenMobile(false)}>
          <SideBar />
        </SideDrawer>
      )}

      <Routes>
        <Route index element={<Navigate to="files" />} />
        <Route
          element={
            <DashboardLayout>
              <AppHeader onDrawerClick={setDrawerOpenMobile} />
              <SideBar></SideBar>
              <Box component="main" className="Main">
                <Outlet />
              </Box>
            </DashboardLayout>
          }
        >
          <Route
            path="/files"
            element={
              <MasterDetail>
                <Files />
                <Outlet />
              </MasterDetail>
            }
          >
            <Route
              path=":file_id"
              element={
                <FileDetail onClose={() => navigate("/dashboard/files")} /> // workaround. ".." flickers.
              }
            />
          </Route>
          <Route path="/media" element={<Media />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="*" element={<Navigate to="files" />} />
        </Route>
      </Routes>
    </>
  );
}
