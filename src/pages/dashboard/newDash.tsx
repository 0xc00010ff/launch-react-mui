import Box from "@mui/joy/Box";
import * as React from "react";
import { Navigate, Route, Routes } from "react-router";
import AppHeader from "../../components/AppHeader";
import DashboardLayout from "../../components/DashboardLayout";
import DataTable from "../../components/DataTable";
import DetailsAside from "../../components/DetailsAside";
import Layout from "../../components/Layout";
import MediaGrid from "../../components/MediaGrid";
import SideBar, { SideBarNav } from "../../components/Sidebar";

export default function Dashboard() {
  const [drawerOpenMobile, setDrawerOpenMobile] = React.useState(false);
  const [detailOpen, setDetailOpen] = React.useState(true);

  return (
    <>
      {/* mobile drawer */}
      {drawerOpenMobile && (
        <Layout.SideDrawer onClose={() => setDrawerOpenMobile(false)}>
          <SideBar />
        </Layout.SideDrawer>
      )}

      <DashboardLayout>
        <AppHeader onDrawerClick={setDrawerOpenMobile} />
        <SideBarNav></SideBarNav>
        <Box
          component="main"
          className="Main"
          sx={{
            p: 2,
            overflow: "scroll",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="files" />} />
            <Route path="/files" element={<DataTable />} />
            <Route path="/media" element={<MediaGrid />} />
          </Routes>
          {detailOpen && <DetailsAside onClose={() => setDetailOpen(true)} />}
        </Box>
      </DashboardLayout>
    </>
  );
}
