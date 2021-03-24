import React from "react";
import "../css/Box.css";

interface boxInterface {
  task: {
    id: number;
    task: string;
  };
  index: number;
}

const Box: React.FC<boxInterface> = (props: boxInterface) => {
  return <div id="box">{`${props.index + 1}. ${props.task.task}`}</div>;
};

export default Box;
