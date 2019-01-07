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

  switchNameHandler = () => {
    // console.log("clicked");
    // DON'T MUTATE(change) STATE DIRECTLY like this: this.state.persons[0].name = "Wakanda 4eva!"
    // Instead use this.setState() method.
    this.setState({
      persons: [
        { name: "The Flash", age: 33 },
        { name: "Batman", age: 41 },
        { name: "Superman", age: 28 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
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
