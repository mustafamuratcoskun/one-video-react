import React, { Component } from 'react'

export default class AddUser extends Component {
    state = {
        name : "",
        email : "",
        username:""
    }
  
    onChange = (e) => {
      
       this.setState({
           [e.target.name] : e.target.value
       })

   } 
   onAddUser = (e) => {
       e.preventDefault();
       const {name,email,username} = this.state;
       const {addUser} = this.props;

       const newUser = {
           name,
           email,
           username
       };
       addUser(newUser);

       this.setState({
           name : "",
           username:"",
           email:""
       })
      

   }
  render() {
    const {name,email,username } = this.state;

    return (
    <div className="card mb-4">
        <div className="card-header">Add User</div>
        <div className="card-body">
            <form onSubmit = {this.onAddUser}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder = "Name" 
                    id ="name" 
                    name ="name"
                    value = {name}
                    onChange = {this.onChange}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                     type="text" 
                     className="form-control" 
                     placeholder = "Email" 
                     id ="email" 
                     name ="email"
                     value = {email}
                     onChange = {this.onChange}
                     />
                </div>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder = "username" 
                    id ="username" 
                    name ="username"
                    value = {username} 
                    onChange = {this.onChange}
                    />
                </div>

                <button type="submit" className ="btn btn-danger btn-block"> Add User</button>
            </form>
        </div>
    </div>
     
    )
  }
}
