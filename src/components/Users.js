import React, { Component } from 'react'
import User from "./User";


class Users extends Component {
  
  render() {

    const {users} = this.props; 

    return (
      <div className = "card">

      <div className="card-body">
            
        {
            
            users.map(user => {
                return <User key = {user.id} user = {user} deleteUser = {this.props.deleteUser} />
            })
    
        }
      </div>
       
      </div>
    )
  }
}
export default Users;
