import React from "react";
import "../css/Box.css";

interface handleSetTasksProps {
  tasks: {
    id: number;
    task: string;
  }[];
}

interface boxInterface {
  task: {
    id: number;
    task: string;
  };
  handleSetTasks: (task: handleSetTasksProps) => void;
  tasks: {
    id: number;
    task: string;
  }[];
  index: number;
  draggingIndex: number;
  handleDragStart: (index: number) => void;
}

const Box: React.FC<boxInterface> = (props: boxInterface) => {
  const handleDrop = (index: number) => {
    console.log(props.draggingIndex, index);
    const updatedOrder = [...props.tasks];
    const draggedBox = updatedOrder[props.draggingIndex];
    updatedOrder.splice(props.draggingIndex, 1);
    updatedOrder.splice(index, 0, draggedBox);
    props.handleSetTasks({ tasks: updatedOrder });
  };

  return (
    <div
      id="box"
      draggable="true"
      onDragStart={() => props.handleDragStart(props.index)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => handleDrop(props.index)}
    >
      {`${props.index + 1}. ${props.task.task}`}
    </div>
  );
};

export default Box;
