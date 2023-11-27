import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskComplete, onTaskDelete }) => {
  return (
    <ul className='taskList'>
      {tasks.map(task => (        
        <TaskItem
          key={task.id}
          task={task}
          onTaskComplete={onTaskComplete}
          onTaskDelete={onTaskDelete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
