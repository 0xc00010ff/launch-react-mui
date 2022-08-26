import Box from "@mui/joy/Box";
import * as React from "react";
import { Routes, Route, Navigate } from "react-router";

import AppHeader from "../../components/AppHeader";
import DataTable from "../../components/DataTable";
import DetailsAside from "../../components/DetailsAside";
import Layout from "../../components/Layout";
import MediaGrid from "../../components/MediaGrid";
import SideBar from "../../components/Sidebar";

export default function Dashboard() {
  const [drawerOpenMobile, setDrawerOpenMobile] = React.useState(false);
  const [detailOpen, setDetailOpen] = React.useState(true);

  return (
    <>
      {drawerOpenMobile && (
        <Layout.SideDrawer onClose={() => setDrawerOpenMobile(false)}>
          <SideBar />
        </Layout.SideDrawer>
      )}
      <Layout.Root
        sx={{
          gridTemplateColumns: {
            xs: "1fr",
            sm: "minmax(64px, 200px) minmax(400px, 1fr)",
            md: "minmax(160px, 280px) minmax(400px, 1fr) auto",
          },
          ...(drawerOpenMobile && {
            height: "100vh",
            overflow: "hidden",
          }),
        }}
      >
        <Layout.Header>
          <AppHeader onDrawerClick={setDrawerOpenMobile} />
        </Layout.Header>
        <Layout.SideNav>
          <SideBar />
        </Layout.SideNav>
        <Box
          component="main"
          className="Main"
          sx={{
            p: 2,
            overflow: "scroll",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard/files" />} />
            <Route path="/files" element={<DataTable />} />
            <Route path="/media" element={<MediaGrid />} />
          </Routes>
        </Box>
        {detailOpen && <DetailsAside onClose={() => setDetailOpen(false)} />}
      </Layout.Root>
    </>
  );
}
