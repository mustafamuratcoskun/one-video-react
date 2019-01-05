import React, { Component } from 'react'

class User extends Component {
  state = {
      "isVisible" : false
  }
  onDelete = (id) => {
      const {deleteUser} = this.props;

      deleteUser(id);
      
  }
  onShow = ()=>{
    this.setState({
        isVisible : !this.state.isVisible
    })
  }
  render() {
    
    const {id,name,email,username} = this.props.user;
    const {isVisible} = this.state;
    return (
      <div className ="mb-4">
        <div>  
            <div className="d-flex justify-content-between">
            <h4 className="d-inline" onClick = {this.onShow}>{name} </h4>
            <i className="fas fa-trash-alt"  onClick = {this.onDelete.bind(this,id)} style = {{color :"purple",cursor:"pointer"}}></i>
            </div>
            
           
            {isVisible ? <div className="card">
            <div className="card-body">
             <p className = "card-text">Email : {email}</p>
             <p className = "card-text">Username : {username}</p>
            </div>
        </div> : null}
            
        </div>
        
        
    </div>
    
    )
  }
}
export default User;

