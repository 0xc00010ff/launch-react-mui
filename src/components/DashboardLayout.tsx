import * as React from "react";
import Box, { BoxProps } from "@mui/joy/Box";

//
// |----------------------------
// |        Header             |
// |----------------------------
// |      |                    |
// |      |                    |
// |  Nav |     Main...        |
// |      |                    |
// |      |                    |
// |______|____________________|
//

export default function DashboardLayout(props: BoxProps) {
  return (
    <Box
      {...props}
      sx={[
        {
          bgcolor: "background.appBody",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "minmax(64px, 200px) minmax(450px, 1fr)",
            md: "minmax(160px, 300px) minmax(300px, 1fr)",
          },
          gridTemplateRows: "64px minmax(0, 1fr)",
          gridTemplateAreas: `
            "header header"
            "nav main"
            "nav main"
          `,
          height: "100vh",
          width: "100vw",
          boxSizing: "border-box",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}
