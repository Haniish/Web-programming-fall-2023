import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import './App.css';


type Category = {
  title: string;
  tasks: string[];
  id: number;
};

const App: React.FC = () => {
  const [tasklist, setTasklist] = useState<Category[]>([
    {
      title: 'Humber',
      tasks: ['Task 1', 'Task 2', 'Task 3'],
      id: 1,
    },
    {
      title: 'MERN',
      tasks: ['Lab', 'Project', 'Quiz'],
      id: 2,
    },
    {
      title: 'Java',
      tasks: ['Group Discussion', 'Exam', 'Assignment'],
      id: 3,
    },
  ]);

  const addTask = (categoryId: number, newTask: string) => {
    setTasklist((prevTasklist) =>
      prevTasklist.map((category) =>
        category.id === categoryId
          ? { ...category, tasks: [...category.tasks, newTask] }
          : category
      )
    );
  };

  const deleteTask = (categoryId: number, taskIndex: number) => {
    setTasklist((prevTasklist) =>
      prevTasklist.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              tasks: category.tasks.filter((_, index) => index !== taskIndex),
            }
          : category
      )
    );
  };

  const totalTasks = tasklist.reduce(
    (total, category) => total + category.tasks.length,
    0
  );

  return (
    <div className="container">
      <Header title="My Task List" totalTasks={totalTasks} />
      {tasklist.map((category) => (
        <TaskList
          key={category.id}
          category={category}
          addTask={addTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default App;
