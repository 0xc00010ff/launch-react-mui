import Box from "@mui/joy/Box";
import * as React from "react";
import { Routes, Route, Navigate } from "react-router";

import AppHeader from "../components/AppHeader";
import DataTable from "../components/DataTable";
import DetailsAside from "../components/DetailsAside";
import Layout from "../components/Layout";
import MediaGrid from "../components/MediaGrid";
import Navigation from "../components/Navigation";

export default function Dashboard() {
  const [drawerOpenMobile, setDrawerOpenMobile] = React.useState(false);

  return (
    <>
      {drawerOpenMobile && (
        <Layout.SideDrawer onClose={() => setDrawerOpenMobile(false)}>
          <Navigation />
        </Layout.SideDrawer>
      )}
      <Layout.Root
        sx={{
          gridTemplateColumns: {
            xs: "1fr",
            sm: "minmax(64px, 200px) minmax(450px, 1fr)",
            md: "minmax(160px, 300px) minmax(600px, 1fr) minmax(300px, 420px)",
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
          <Navigation />
        </Layout.SideNav>
        <Layout.Main>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 2,
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard/files" />} />
              <Route path="/files" element={<DataTable />} />
              <Route path="/media" element={<MediaGrid />} />
            </Routes>
          </Box>
        </Layout.Main>
        <DetailsAside />
      </Layout.Root>
    </>
  );
}
