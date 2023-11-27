import '../style/TaskItem.css';
import React, { useState } from 'react';

const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
  const [completed, setCompleted] = useState(task.completed);

  const handleComplete = () => {
    setCompleted(!completed);
    onTaskComplete(task.id, !completed);
  };

  const handleDelete = () => {
    onTaskDelete(task.id);
  };

  return (
    <div className="taskItem" style={{ display: 'flex', alignItems: 'center' }}>
      <span className={completed ? 'completed' :''}>
        {task.name}
      </span>
      <button className='buttonComplete' onClick={handleComplete}>COMPLETADO</button>
      <button className='buttonDelete'onClick={handleDelete}>ELIMINAR</button>
    </div>
  );
};

export default TaskItem;
