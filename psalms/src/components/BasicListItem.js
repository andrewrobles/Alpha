import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function BasicListItem(props) {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary={props.primary}
                onClick={() => (window.location.href = props.href)}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
