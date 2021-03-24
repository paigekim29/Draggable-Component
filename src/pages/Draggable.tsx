import React, { useState } from "react";
import Box from "./Box";
import "../css/Draggable.css";

const Draggable: React.FC = () => {
  const [tasks] = useState({
    tasks: [
      { id: 0, task: "Brush your teeth" },
      { id: 1, task: "Wash your face" },
      { id: 2, task: "Change your clothes" },
      { id: 3, task: "Vacuum your room" },
      { id: 4, task: "Take a shower" },
    ],
  });

  const [draggingPosition, setDraggingPosition] = useState({ x: 0, y: 0 });
  const handleDraggingPosition = (x: number, y: number) => {
    console.log(x, y);
    setDraggingPosition({ x, y });
  };

  return (
    <div
      id="borderBox"
      draggable="true"
      onDragOver={(e) => e.preventDefault()}
      onDrag={(e) => handleDraggingPosition(e.clientX, e.clientY)}
      style={{
        transform: `translate(${draggingPosition.x}px, ${draggingPosition.y}px)`,
      }}
    >
      <div id="taskTitle">To Do</div>
      <>
        {tasks.tasks.map((task, index) => (
          <Box key={task.id} task={task} index={index} />
        ))}
      </>
    </div>
  );
};

export default Draggable;
