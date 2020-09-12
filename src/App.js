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
  ListItemText,
  ThemeProvider,
  Paper,
  Switch
} from "@material-ui/core";
import {
  MenuRounded,
  HomeRounded,
  StarRounded,
  ArrowUpwardRounded
} from "@material-ui/icons";
import { Modes, ColorValues } from "./theme/colors";
import { recreateMuiTheme } from "./theme/recreateMuiTheme";

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
  },
  cpaper: {
    minHeight: "100vh",
    borderRadius: 0
  }
}));

const App = () => {
  const classes = useStyle();

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(Modes.DARK);
  const [pcolor, setPcolor] = useState(ColorValues.DEEPORANGE);

  const customizedTheme = recreateMuiTheme(mode, pcolor);

  return (
    <ThemeProvider theme={customizedTheme}>
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
                <Typography color="primary" variant="body1">
                  Highest Rated
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <ArrowUpwardRounded color="primary" />
              </ListItemIcon>
              <ListItemText>
                <Typography color="primary" variant="body1">
                  Top 30
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem button>
              <ListItemText>
                <Typography color="primary" variant="body1">
                  Dark Mode
                </Typography>
              </ListItemText>
              <Switch
                value={mode === Modes.DARK}
                onChange={() =>
                  setMode(m => (m === Modes.DARK ? Modes.LIGHT : Modes.DARK))
                }
              />
            </ListItem>
          </List>
        </Drawer>
        <Paper className={classes.cpaper}>
          <Typography align="center" variant="h5">
            Hello World
          </Typography>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default App;
