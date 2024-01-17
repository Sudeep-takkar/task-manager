import React from 'react';

import Task from './ClassBasedComponentExample';

const Tasks = ({taskList}) => {
    // console.log(taskList)
    return (
      <ul>
            {taskList.map(task => <Task taskDetail={task} />)}
      </ul>  
    );
}

export default Tasks;