import './style/App.css';
import { useState, useEffect } from 'react';
import TaskList from './componentes/TaskList';
import TaskForm from './componentes/TaskForm';

const LOCALKEY = 'listApp.items';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const getPrevStore = async () => {
    const getlocalStore = await JSON.parse(localStorage.getItem(LOCALKEY));
    if (getlocalStore.length > 0) {
      setTasks(getlocalStore);
    }
    else {
      return;
    }
  };

  useEffect(() => {
    // Cargar desde localStorage al montar la aplicación
    getPrevStore();
  }, []);

  useEffect(() => {
    // Efecto de Actualización
    console.log('Tasks updated:', tasks);
    // Guardar en localStorage al actualizar las tareas
    localStorage.setItem(LOCALKEY, JSON.stringify(tasks));
  }, [tasks]);

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
      <h1>ADMINISTRADOR DE TAREAS</h1>
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
