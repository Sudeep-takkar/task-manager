import React, { Component } from 'react';

class Form extends Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.state = {item: ""};
  }

  handleChange(e) {
    // this.setState({ task: e.target.value });
    this.task = e.target.value
  }

  handleSubmit(e) {
    e.preventDefault();

    alert(this.state.task);
  }

  render() {
    // console.log(this)
		return (
      <div className="well">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="task">Task</label>
            <input type="text" id="task" className="form-control" placeholder="Task"
                onChange={this.handleChange}/>
          </div>
          <button className="btn btn-primary" type="submit">Create</button>
        </form>
      </div>
		
    );
	}
}

export default Form;