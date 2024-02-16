import { useReducer, useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

const mangerStates = (taskList, action) => {
  if (action.type == "add") {
    const newTask = {
      id: Math.ceil(Math.random() * 100),
      task: action.value,
    };
    taskList.addTask.push(newTask);
  }

  if (action.type == "complete") {
    const filteredTask = taskList.addTask.find((t) => t.id == action.value);
    taskList.compTask.push(filteredTask);
  }
  console.log(taskList);
  return { ...taskList };
};

function App() {
  const initialValue = {
    addTask: [],
    compTask: [],
    delTask: [],
  };

  const [taskList, dispatchTask] = useReducer(mangerStates, initialValue);

  const getValue = (inputValue) => {
    const task = {
      type: "add",
      value: inputValue,
    };
    dispatchTask(task);
  };

  const moveToComplete = (id) => {
    const move = {
      type: "complete",
      value: id,
    };
    dispatchTask(move);
  };
  return (
    <>
      <div className="container">
        <AddTask fromChild={getValue} />
        <p>&nbsp;</p>
        <div className="row">
          <TaskList
            title="New Task List"
            taskList={taskList.addTask}
            moveToComplete={moveToComplete}
          />
          <TaskList title="Completed Task List" taskList={taskList.compTask} />
          <TaskList title="Deleted Task" taskList={taskList.delTask} />
        </div>
      </div>
    </>
  );
}

export default App;
