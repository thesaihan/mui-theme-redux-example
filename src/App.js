import React, { useState } from "react";
import "./App.css";

import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import {
  MenuRounded,
  HomeRounded,
  StarRounded,
  ArrowUpwardRounded
} from "@material-ui/icons";

const useStyle = makeStyles(theme => ({
  white: {
    color: "#fff"
  },
  mr3: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3)
  },
  mw250: {
    marginTop: theme.spacing(6),
    minWidth: "250px"
  }
}));

const App = () => {
  const classes = useStyle();

  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => setOpen(true)}>
            <MenuRounded className={classes.white} />
          </IconButton>
          <Typography variant="h5" className={classes.mr3}>
            Games
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <List className={classes.mw250}>
          <ListItem button>
            <ListItemIcon>
              <HomeRounded color="primary" />
            </ListItemIcon>
            <ListItemText>
              <Typography color="primary">All</Typography>
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <StarRounded color="primary" />
            </ListItemIcon>
            <ListItemText>
              <Typography color="primary">Highest Rated</Typography>
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <ArrowUpwardRounded color="primary" />
            </ListItemIcon>
            <ListItemText>
              <Typography color="primary">Top 30</Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default App;
