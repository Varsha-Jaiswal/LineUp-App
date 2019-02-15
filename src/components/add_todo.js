import React, { Component } from 'react';

class AddToDo extends Component {
  render() {
  const {todo, handleChange, handleSubmit} = this.props;
    return (
      <div className="card card-body">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" className="form-control" value={todo} onChange={handleChange} placeholder="Add task"/> &nbsp;&nbsp;
          </div>
        </form> 
      </div>  
    );
  }
}

export default AddToDo;
