import Box from "@mui/joy/Box";
import useTitle from "../../../utils/useTitle";

export default function Trash() {
  useTitle("Example | Trash");
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Nothing here.
      </Box>
    </>
  );
}
