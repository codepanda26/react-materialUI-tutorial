import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuIcon,
  Typography,
  Button
} from "material-ui";

//functional component
export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit">
        Exercise DataBase
      </Typography>
    </Toolbar>
  </AppBar>
);
