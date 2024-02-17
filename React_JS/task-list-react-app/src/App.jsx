import { useReducer, useState, React, useEffect } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import Alert from "./components/Alert";
import Container from "./components/Container";

const mangerStates = (taskList, action) => {
  console.log(action);
  // first action add
  if (action.type == "add") {
    const newTask = {
      id: Math.ceil(Math.random() * 100),
      task: action.value,
    };
    taskList.addTask.push(newTask);
  }

  // 2nd action move to complete
  if (action.type == "complete") {
    const filteredTask = taskList.addTask.find((t) => t.id == action.value);
    taskList.compTask.push(filteredTask);
    const filteredNTask = taskList.addTask.filter((t) => t.id !== action.value);
    taskList.addTask = filteredNTask;
  }

  // 3rd action to delete
  if (action.type == "deleted") {
    const filteredTask = taskList.compTask.find((t) => t.id == action.value);
    taskList.delTask.push(filteredTask);
    const filteredCTask = taskList.compTask.filter(
      (t) => t.id !== action.value
    );
    taskList.compTask = filteredCTask;
  }

  // 4rth action trash
  if (action.type == "trash") {
    const filteredCTask = taskList.delTask.filter((t) => t.id !== action.value);
    taskList.delTask = filteredCTask;
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

  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState("success");

  const getValue = (inputValue) => {
    const task = {
      type: "add",
      value: inputValue,
    };
    dispatchTask(task);
    inputValue = "";
    setAlertType("success");
    setAlertMsg("Task Added To Your List");
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  const moveToComplete = (id) => {
    const move = {
      type: "complete",
      value: id,
    };
    dispatchTask(move);
    setAlertType("success");
    setAlertMsg("Task Moved to Compelted List");
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  const moveToDeleted = (id) => {
    const move = {
      type: "deleted",
      value: id,
    };
    dispatchTask(move);
    setAlertMsg("Task Moved to Deleted List");
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  const moveToTrash = (id) => {
    const move = {
      type: "trash",
      value: id,
    };
    dispatchTask(move);
    setAlertType("danger");
    setAlertMsg("Task Completed & Removed From Task List");
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };
  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, [alertType]);
  return (
    <Container>
      <AddTask fromChild={getValue} />

      {alert && <Alert type={alertType} message={alertMsg} />}
      <p>&nbsp;</p>
      <div className="row">
        <TaskList
          title="New Task List"
          taskList={taskList.addTask}
          moveToComplete={moveToComplete}
        />
        <TaskList
          title="Assigned Task List"
          taskList={taskList.addTask}
          moveToComplete={moveToComplete}
        />
        <TaskList
          title="Completed Task List"
          taskList={taskList.compTask}
          moveToComplete={moveToDeleted}
        />
        <TaskList
          title="Deleted Task"
          taskList={taskList.delTask}
          moveToComplete={moveToTrash}
        />
      </div>
    </Container>
  );
}

export default App;
