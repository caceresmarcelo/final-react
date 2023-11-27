import '../style/TaskForm.css';
import React, { useState } from 'react';

const TaskForm = ({ onTaskAdd }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      onTaskAdd(taskName);
      setTaskName('');
    }
  };

  return (
    <form className='taskForm' onSubmit={handleSubmit}>
      <input className='inputForm'
        type="text"
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
      />
      <button className='buttonForm'
        type="submit"
        disabled={taskName.trim().length > 0 ? '' : 'disabled'}>AGREGAR TAREA</button>
    </form>
  );
};

export default TaskForm;
