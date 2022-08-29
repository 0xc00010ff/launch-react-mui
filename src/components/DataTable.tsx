import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

import FolderOpenIcon from "@mui/icons-material/FolderOpen";

export default function DataTable() {
  return (
    <Sheet
      variant="outlined"
      sx={{
        gridArea: "master",
        borderRadius: "sm",
        gridColumn: "1/-1",
        bgcolor: "background.componentBg",
        display: { xs: "none", sm: "grid" },
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        "& > *": {
          p: 2,
          "&:nth-child(n):not(:nth-last-child(-n+4))": {
            borderBottom: "1px solid",
            borderColor: "divider",
          },
        },
      }}
    >
      <Typography level="body3" fontWeight="md" noWrap>
        Folder name
      </Typography>
      <Typography level="body3" fontWeight="md" noWrap>
        Date modified
      </Typography>
      <Typography level="body3" fontWeight="md" noWrap>
        Size
      </Typography>
      <Typography level="body3" fontWeight="md" noWrap>
        Users
      </Typography>

      <Typography
        level="body2"
        startDecorator={<FolderOpenIcon color="primary" />}
        sx={{ alignItems: "flex-start" }}
      >
        Travel pictures
      </Typography>
      <Typography level="body2">21 October 2011, 3PM</Typography>
      <Typography level="body2" sx={{ color: "success.600" }}>
        987.5MB
      </Typography>
      <Box>
        <AvatarGroup
          size="sm"
          sx={{ "--AvatarGroup-gap": "-8px", "--Avatar-size": "24px" }}
        >
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
      <Typography
        level="body2"
        startDecorator={<FolderOpenIcon color="primary" />}
        sx={{ alignItems: "flex-start" }}
      >
        Important documents
      </Typography>
      <Typography level="body2">26 May 2010, 7PM</Typography>
      <Typography level="body2" sx={{ color: "success.600" }}>
        123.3KB
      </Typography>
      <Box>
        <AvatarGroup
          size="sm"
          sx={{ "--AvatarGroup-gap": "-8px", "--Avatar-size": "24px" }}
        >
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
    </Sheet>
  );
}
