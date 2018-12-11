//this file will have all of our buisness logic for our Exercise app
import React from "react";
import { Grid, Paper } from "material-ui";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};
export default props => (
  <Grid container>
    <Grid item xs>
      <Paper style={styles.Paper}>left pane</Paper>
    </Grid>

    <Grid item xs>
      <Paper style={styles.Paper}>left pane</Paper>
    </Grid>
  </Grid>
);
