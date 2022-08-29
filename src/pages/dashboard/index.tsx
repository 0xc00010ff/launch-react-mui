import Box from "@mui/joy/Box";
import * as React from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router";
import AppHeader from "../../components/AppHeader";
import DashboardLayout from "../../components/DashboardLayout";
import DataTable from "../../components/DataTable";
import DetailsAside from "../../components/DetailsAside";
import Layout from "../../components/Layout";
import MasterDetail from "../../components/MasterDetail";
import MediaGrid from "../../components/MediaGrid";
import SideBar, { SideBarNav } from "../../components/Sidebar";

export default function Dashboard() {
  const [drawerOpenMobile, setDrawerOpenMobile] = React.useState(false);

  const navigate = useNavigate();

  return (
    <>
      {/* mobile drawer */}
      {drawerOpenMobile && (
        <Layout.SideDrawer onClose={() => setDrawerOpenMobile(false)}>
          <SideBar />
        </Layout.SideDrawer>
      )}

      <Routes>
        <Route index element={<Navigate to="files" />} />
        <Route
          element={
            <DashboardLayout>
              <AppHeader onDrawerClick={setDrawerOpenMobile} />
              <SideBarNav></SideBarNav>
              <Box
                component="main"
                className="Main"
                sx={{
                  overflow: "scroll",
                }}
              >
                <Outlet />
              </Box>
            </DashboardLayout>
          }
        >
          <Route
            path="/files"
            element={
              <MasterDetail>
                <DataTable />
              </MasterDetail>
            }
          >
            <Route
              path=":file_id"
              element={
                <DetailsAside onClose={() => navigate("/dashboard/files")} /> // workaround. ".." flickers.
              }
            />
          </Route>
          <Route path="/media" element={<MediaGrid />} />
        </Route>
      </Routes>
    </>
  );
}
