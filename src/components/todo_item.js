import React, { Component } from "react";

class TodoItem extends Component {
    render() {
        const {name, completed, clearTodo, handleCheck} = this.props;
        if(completed === true)
        {        
            return (
                <li className="list-group-item text-capitalize d-flex justify-content-between my-2" style={{textDecoration: "line-through"}}>
                    <input type="checkbox" onChange={handleCheck}/>
                    <h6 className="text-muted">{name}</h6>
                    <div className="todo-icon">
                        <span className="mx-2 text-danger" onClick={clearTodo}>
                            <i className="fas fa-trash"></i>
                        </span>
                    </div> 
            </li>
            )
        }
        else {
            return (
                <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                    <input type="checkbox" onChange={handleCheck}/>
                    <h6 className="text-muted">{name}</h6>
                    <div className="todo-icon">
                        <span className="mx-2 text-danger" onClick={clearTodo}>
                            <i className="fas fa-trash"></i>
                        </span>
                    </div> 
            </li>
            )
        }
    }
}

export default TodoItem;