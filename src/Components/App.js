import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts"; // if we export the header and footer in an index js then we can do a named import in one line
import Exercises from "./Exercises";
import { muscles, exercises } from "../store";

//muscles is static and will never change how ever we can add new exercises so we will store that in our state
export default class extends Component {
  state = {
    exercises
  };

  getExercisesByMuscle() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  }

  render() {
    const exercises = this.getExercisesByMuscle();
    return (
      <Fragment>
        {/*fragment lets you make a container like a div would to group your code inside but with out puting in the dom */}
        <Header />
        <Exercises exercises={exercises} />
        {/*this goes to index.js in the exercises folder see import
        it passes the array of exsercises as the props to the compontent */}
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}
