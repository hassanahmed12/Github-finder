import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Users from "./Users";
import axios from "axios";
import Search from "./components/Search";
import Alert from "./Alert"
export default class App extends Component {
  state = {
    users: [],
    lodaing: false,
    alert:null
  };
  
  SearchUsers = async (text) => {
    
    
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({ users: res.data.items, lodaing: false });
    console.log(text);
  };
  clearUsers = () => {
    console.log("chal raha hani");
    this.setState({
      users: [],
      lodaing: false,
      
    });
    window.location.reload();
  };
  setAlert=(msg)=>{
   this.setState({
     alert:{msg}
   });
   setTimeout(() => {
     this.setState({
       alert:null
     })
   }, 2000);
  }

  render() {
    return (
      <div>
        <Navbar title="Github-Finder" icon="fab fa-github"></Navbar>
        <Alert alert={this.state.alert}></Alert>
        <Search
          SearchUsers={this.SearchUsers}
          clearUsers={this.clearUsers}
          setAlert={this.setAlert}
        ></Search>
        <Users lodaing={this.state.lodaing} users={this.state.users}></Users>
      </div>
    );
  }
}
