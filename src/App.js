import "./App.css";
import GithubUserInfo from "./components/main/githubUserInfo";
import Search from "./components/main/Search";
import Navbar from "./components/navbar/Navbar";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
    };
  }
  addName = (name) => {
    this.setState((st) => ({
      names: [...st.names, name],
    }));
  };
  render() {
    const id = this.state.names.map((name) => {
      return <GithubUserInfo username={name.name}></GithubUserInfo>;
    });
    return (
      <div>
        <Navbar title={"Github User Fetch"}></Navbar>
        <Search addName={this.addName}></Search>
        {id}
      </div>
    );
  }
}
