import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Barry", age: 33 },
      { name: "Bruce", age: 41 },
      { name: "Clark", age: 38 }
    ]
  };

  switchNameHandler = newName => {
    // console.log("clicked");
    // DON'T MUTATE(change) STATE DIRECTLY like this: this.state.persons[0].name = "Wakanda 4eva!"
    // Instead use this.setState() method.
    this.setState({
      persons: [
        { name: newName, age: 33 },
        { name: "Batman", age: 41 },
        { name: "Superman", age: 28 }
      ]
    });
  };

  nameChangedHander = event => {
    this.setState({
      persons: [
        { name: "Barry", age: 33 },
        { name: event.target.value, age: 41 },
        { name: "Clark", age: 38 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      cursor: "pointer",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          // First way of transfering info(is via binding is using ES6 function):
          onClick={() => this.switchNameHandler("The Flash")}
          // Take note that this method is less affective than the second one.
          // Section 3, Lecture 45.
          style={style}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          // Second way of transferring:
          click={this.switchNameHandler.bind(this, "Speedster")}
          changed={this.nameChangedHander}
        >
          Alter Ego: The Batman
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
