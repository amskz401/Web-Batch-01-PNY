import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

export default function TaskList({ title, taskList, moveToComplete }) {
  return (
    <>
      <div className="col-md-3">
        <div className="card">
          <div className="card-header">{title}</div>
          <ul className="list-group list-group-flush">
            {taskList.map((task) => (
              <li className="list-group-item" key={task.id}>
                {task.task}{" "}
                <span
                  className="float-right btn btn-success "
                  onClick={() => moveToComplete(task.id)}
                >
                  <FaArrowCircleRight />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
