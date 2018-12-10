//this file will have all of our buisness logic for our Exercise app
import React from "react";
import { Grid } from "material-ui";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

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
      <LeftPane styles={styles} />
    </Grid>

    <Grid item xs>
      <RightPane styles={styles} />
    </Grid>
  </Grid>
);
