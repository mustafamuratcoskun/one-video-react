import React, { Component } from 'react';
import './App.css';
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import axios from "axios";
class App extends Component {
  state = {
    users: [
     
    ]
  }
  
  componentDidMount = async() => {

     const res = await axios.get("https://jsonplaceholder.typicode.com/users");
     
     
     this.setState({
       users: res.data  
     });
  }
  addUser = async (newUser) => {
    const {data} = await axios.post("https://jsonplaceholder.typicode.com/users",newUser);

    console.log(data);
    this.setState({
      users: [data,...this.state.users]
    })
  }
  deleteUser = async (id) => {
    
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    this.setState({
      users: this.state.users.filter(user => user.id !== id)
    })
  } 
  render() {

    const {users} = this.state;
    
    return (
      <div className="App">
        <div className="container">
            <h4 className ="display-4">Users App</h4>
            <hr/>
            <AddUser addUser = {this.addUser}/>
            <Users  deleteUser = {this.deleteUser} users = {users} />
            
        </div>
        <div style= {{marginBottom:"500px"}}></div>


      </div>
    );
  }
}

export default App;
