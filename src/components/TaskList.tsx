import React, { useState } from 'react';

// Define the types for TaskListProps
type TaskListProps = {
  category: {
    title: string;
    tasks: string[];
    id: number;
  };
  addTask: (categoryId: number, newTask: string) => void;
  deleteTask: (categoryId: number, taskIndex: number) => void;
};

const TaskList: React.FC<TaskListProps> = ({ category, addTask, deleteTask }) => {
  const [newTask, setNewTask] = useState<string>(''); // Specify the type for newTask

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTask(category.id, newTask);
      setNewTask('');
    }
  };

  const handleDeleteTask = (taskIndex: number) => {
    deleteTask(category.id, taskIndex);
  };

  return (
    <div>
      <h2>{category.title}</h2>
      <ul>
        {category.tasks.map((task, index) => (
          <li key={index}>
            {task}{' '}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="New task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TaskList;
