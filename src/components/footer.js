import React, { Component } from 'react';

class AppFooter extends Component { 
  render() {
    const { selectedFilter, clearList, changeFilter} = this.props;
    return (
      <div className="jumbotron p-4 text-center mb-5">
        <button className={selectedFilter==="all" ? "btn btn-success m-2" : "btn btn-primary m-2"} id="all" onClick={changeFilter}>ALL</button>
        <button className={selectedFilter==="completed" ? "btn btn-success m-2" : "btn btn-primary m-2"} id="completed" onClick={changeFilter}>Completed</button>
        <button className={selectedFilter==="pending" ? "btn btn-success m-2" : "btn btn-primary m-2"} id="pending" onClick={changeFilter}>Pending</button>
        <button className="btn btn-warning m-2" id="clear completed" onClick={changeFilter}>Clear Completed</button>
        <button className="btn btn-danger m-2" id="clear list" onClick={clearList}>Clear List</button>
      </div>
    );
  }
}

export default AppFooter;
