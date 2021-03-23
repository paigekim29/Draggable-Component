import React, { useState } from "react";
import Box from "./Box";
import "../css/Draggable.css";

interface handleSetTasksProps {
  tasks: {
    id: number;
    task: string;
  }[];
}

const Draggable: React.FC = () => {
  const [tasks, setTasks] = useState({
    tasks: [
      { id: 0, task: "Brush your teeth" },
      { id: 1, task: "Wash your face" },
      { id: 2, task: "Change your clothes" },
      { id: 3, task: "Vacuum your room" },
      { id: 4, task: "Take a shower" },
    ],
  });
  const handleSetTasks = (task: handleSetTasksProps): void => {
    setTasks(task);
  };

  const [draggingIndex, setDraggingIndex] = useState(0);

  const handleDragStart = (index: number) => {
    setDraggingIndex(index);
  };

  return (
    <div id="borderBox">
      <div id="taskTitle">To Do</div>
      <>
        {tasks.tasks.map((task, index) => (
          <Box
            key={task.id}
            task={task}
            handleSetTasks={handleSetTasks}
            tasks={tasks.tasks}
            index={index}
            draggingIndex={draggingIndex}
            handleDragStart={handleDragStart}
          />
        ))}
      </>
    </div>
  );
};

export default Draggable;
