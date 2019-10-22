import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Name.css";
import store, { UPDATE_NAME, UPDATE_CATEGORY } from "../../store";

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: store.getState().name,
      category: store.getState().category
    };
  }

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({
  //       name: store.getState().name,
  //       category: store.getState().category
  //     });
  //   });
  // }

  handleNameChange(nameVal) {
    this.setState({
      name: nameVal
    });
  }

  handleCategoryChange(catVal) {
    this.setState({
      category: catVal
    });
  }
  saveChanges() {
    // <----THIS IS SETTING UP FIRST VIEW
    let action1 = {
      type: UPDATE_NAME,
      payload: this.state.name
    };
    let action2 = {
      type: UPDATE_CATEGORY,
      payload: this.state.category
    };
    store.dispatch(action1);
    store.dispatch(action2);
  }
  render() {
    return (
      <div className="Name forms">
        <div className="input_container">
          <h2>Recipe Name:</h2>
          <input
            value={this.state.name}
            onChange={e => this.handleNameChange(e.target.value)}
          />
        </div>
        <div className="input_container">
          <h2>Category:</h2>
          <select
            value={this.state.category}
            onChange={e => this.handleCategoryChange(e.target.value)}
          >
            <option value={""}>----</option>
            <option value={"Breakfast"}>Breakfast</option>
            <option value={"Second Breakfast"}>Second Breakfast</option>
            <option value={"Brunch"}>Brunch</option>
            <option value={"Lunch"}>Lunch</option>
            <option value={"Dinner"}>Dinner</option>
            <option value={"Drinks"}>Drinks</option>
            <option value={"Dessert"}>Dessert</option>
          </select>
        </div>
        <Link to="/add/author">
          <button onClick={() => this.saveChanges()} className="right_button">
            Next
          </button>
        </Link>
      </div>
    );
  }
}

export default Name;
