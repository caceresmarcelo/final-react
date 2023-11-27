import './style/App.css';
import React, { useState, useEffect } from 'react';
import TaskList from './componentes/TaskList';
import TaskForm from './componentes/TaskForm';
//import TaskItem from './componentes/TaskItem';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Efecto de Actualización
    console.log('Tasks updated:', tasks);
    // Guardar en localStorage al actualizar las tareas
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    // Cargar desde localStorage al montar la aplicación
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleTaskComplete = (taskId, completed) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed } : task
      )
    );
  };

  const handleTaskDelete = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const handleTaskAdd = taskName => {
    const newTask = {
      id: new Date().getTime().toString(),
      name: taskName.toUpperCase(),
      completed: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  return (
    <div>
      <h1>AMINISTRADOR DE TAREAS</h1>
      <TaskForm onTaskAdd={handleTaskAdd} />
      <TaskList
        tasks={tasks}
        onTaskComplete={handleTaskComplete}
        onTaskDelete={handleTaskDelete}
      />
      
    </div>
  );
};

export default App;
