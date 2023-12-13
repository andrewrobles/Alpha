import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function BasicList(props) {
  const arrayOfIndexes = [...Array(150).keys()];
  return (
    <div>
      {arrayOfIndexes.map((value, index) => {
        return (
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary={"Psalm " + (index + 1)}
                      onClick={() =>
                        (window.location.href = "/" + (index + 1))
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        );
      })}
    </div>
  );
}
