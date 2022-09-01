import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { useLocation } from "react-router-dom";

interface FileListItem {
  title: string;
}

interface FileListProps {
  files: FileListItem[];
  selectedFile?: string;
  onSelect?: (index: number) => void;
}

export default function FileList(
  props: FileListProps = { files: [], selectedFile: "none" }
) {
  const location = useLocation();
  return (
    <Box
      sx={{
        p: 2,
        overflow: "auto",
      }}
    >
      <Sheet
        variant="outlined"
        sx={{
          gridArea: "master",
          borderRadius: "sm",
          bgcolor: "background.componentBg",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            borderBottom: "1px solid",
            borderColor: "divider",
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
        </Box>

        <List
          sx={{
            width: "100%",
            p: 0,
            "& > *": {
              "&:nth-child(n):not(:nth-last-child(-n+1))": {
                borderBottom: "1px solid",
                borderColor: "divider",
              },
            },
          }}
        >
          {props.files.map((file, index) => (
            <ListItemButton
              variant={
                location.pathname.includes(file.title) ? "soft" : "plain"
              }
              color={
                location.pathname.includes(file.title) ? "primary" : "neutral"
              }
              onClick={() => props.onSelect?.(index)}
              sx={[
                {
                  p: 2,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr",
                },
              ]}
            >
              <Typography
                level="body2"
                startDecorator={
                  <FolderOpenIcon color="primary" sx={{ mr: 2 }} />
                }
                sx={{ alignItems: "flex-start" }}
              >
                {file.title}
              </Typography>
              <Typography level="body2">26 May 2010, 7PM</Typography>
              <Typography level="body2" sx={{ color: "success.600" }}>
                123.3KB
              </Typography>
              <Box>
                <AvatarGroup
                  size="sm"
                  sx={{
                    "--AvatarGroup-gap": "-8px",
                    "--Avatar-size": "24px",
                  }}
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
            </ListItemButton>
          ))}
        </List>
      </Sheet>
    </Box>
  );
}
