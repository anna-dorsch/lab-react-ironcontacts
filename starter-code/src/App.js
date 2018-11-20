import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts";

let fiveContacts = contacts.splice(0, 5);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { actors: fiveContacts };
  }

  handleAdd = () => {
    let randomContact = Math.floor(Math.random() * 195 + 5);
    const { actors } = this.state;
    console.log("const actors", actors);
    let newArray = actors.push(contacts[randomContact]);
    this.setState({
      newArray
    });
  };

  handleSortPopularity = () => {
    let sortedArrayPopularity = this.state.actors.sort(
      (a, b) => b.popularity - a.popularity
    );
    this.setState({
      sortedArrayPopularity
    });
  };

  handleSortName = () => {
    let sortedArrayName = this.state.actors.sort((a, b) =>
      a.name > b.name ? 1 : a.name < b.name ? -1 : 0
    );
    console.log("sorting", sortedArrayName);
    this.setState({
      sortedArrayName
    });
  };

  render() {
    console.log(this.state.actors);
    return (
      <div className="App">
        <button onClick={this.handleAdd}>Add a new Actor</button>
        <button onClick={this.handleSortPopularity}>Sort by Popularity</button>
        <button onClick={this.handleSortName}>Sort by Name</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>
            {this.state.actors.map(contact => (
              <tr>
                <td>
                  <img src={contact.pictureUrl} style={{ height: 50 }} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
