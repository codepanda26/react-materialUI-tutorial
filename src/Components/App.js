import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts"; // if we export the header and footer in an index js then we can do a named import in one line
import Exercises from "./Exercises";
export default class extends Component {
  render() {
    return (
      <Fragment>
        {/*fragment lets you make a container like a div would to group your code inside but with out puting in the dom */}
        <Header />
        <Exercises />
        <Footer />
      </Fragment>
    );
  }
}
