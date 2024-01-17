import React, { Component } from 'react';

export default class Task extends Component {
    render() {
        console.log(this.props)
        const task = this.props.taskDetail.task
    return (
      <li>
        {task}
      </li>
    );
  }
}