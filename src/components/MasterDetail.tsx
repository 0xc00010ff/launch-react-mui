import Box, { BoxProps } from "@mui/joy/Box";

import { Outlet } from "react-router-dom";

export default function MasterDetail(props: BoxProps) {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gridTemplateRows: "1fr",
        gridTemplateAreas: `
          "master detail"
        `,
      }}
    >
      <Box
        className="masterContent"
        sx={{
          p: 2,
        }}
      >
        {props.children}
      </Box>
      {/* Optional React Router outlet, for when the detail is supplied by url rules */}
      <Outlet />
    </Box>
  );
}
