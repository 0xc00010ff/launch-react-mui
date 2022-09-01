import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import ListDivider from "@mui/joy/ListDivider";
import Sheet from "@mui/joy/Sheet";

import CloseIcon from "@mui/icons-material/Close";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

interface FileDetailProps {
  title?: string;
  onClose?: () => void;
}

export default function Detail(props: FileDetailProps) {
  return (
    <Sheet
      className="detail"
      sx={{
        "grid-area": "detail",
        display: { xs: "none", sm: "initial" },
        borderLeft: "1px solid",
        borderColor: "neutral.outlinedBorder",
        bgcolor: "background.componentBg",
        minWidth: "400px",
        height: "100%",
        overflow: "auto",
      }}
    >
      <>
        <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
          <Typography sx={{ flex: 1 }}>{props.title}</Typography>
          <IconButton
            variant="outlined"
            color="neutral"
            size="sm"
            onClick={props.onClose}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <ListDivider component="hr" />
        <Box sx={{ display: "flex" }}>
          <Button
            variant="soft"
            sx={{
              borderRadius: 0,
              borderBottom: "2px solid",
              borderColor: "primary.solidBg",
              flex: 1,
              py: "1rem",
            }}
          >
            Details
          </Button>
          <Button
            variant="plain"
            color="neutral"
            sx={{ borderRadius: 0, flex: 1, py: "1rem" }}
          >
            Activity
          </Button>
        </Box>
        <AspectRatio ratio="21/9">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=774"
          />
        </AspectRatio>
        <Box
          sx={{
            p: 2,
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Typography level="body2" mr={1}>
            Shared with
          </Typography>
          <AvatarGroup size="sm" sx={{ "--Avatar-size": "24px" }}>
            <Avatar
              src="https://i.pravatar.cc/24?img=6"
              srcSet="https://i.pravatar.cc/48?img=6 2x"
            />
            <Avatar
              src="https://i.pravatar.cc/24?img=7"
              srcSet="https://i.pravatar.cc/48?img=7 2x"
            />
            <Avatar
              src="https://i.pravatar.cc/24?img=8"
              srcSet="https://i.pravatar.cc/48?img=8 2x"
            />
            <Avatar
              src="https://i.pravatar.cc/24?img=9"
              srcSet="https://i.pravatar.cc/48?img=9 2x"
            />
          </AvatarGroup>
        </Box>
        <ListDivider component="hr" />
        <Box
          sx={{
            gap: 2,
            p: 2,
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            "& > *:nth-child(odd)": { color: "text.secondary" },
          }}
        >
          <Typography level="body2">Type</Typography>
          <Typography level="body2" textColor="text.primary">
            Folder
          </Typography>

          <Typography level="body2">Size</Typography>
          <Typography level="body2" textColor="text.primary">
            3,6 MB (3,258,385 bytes)
          </Typography>

          <Typography level="body2">Storage used</Typography>
          <Typography level="body2" textColor="text.primary">
            3,6 MB (3,258,385 bytes)
          </Typography>

          <Typography level="body2">Location</Typography>
          <Typography level="body2" textColor="text.primary">
            My files
          </Typography>

          <Typography level="body2">Owner</Typography>
          <Typography level="body2" textColor="text.primary">
            Michael Scott
          </Typography>

          <Typography level="body2">Modified</Typography>
          <Typography level="body2" textColor="text.primary">
            26 October 2016
          </Typography>

          <Typography level="body2">Created</Typography>
          <Typography level="body2" textColor="text.primary">
            5 August 2016
          </Typography>
        </Box>
        <ListDivider component="hr" />
        <Box sx={{ py: 2, px: 1, minHeight: "100px" }}>
          <Button variant="plain" size="sm" endIcon={<EditOutlinedIcon />}>
            Add a description
          </Button>
        </Box>
      </>
    </Sheet>
  );
}
