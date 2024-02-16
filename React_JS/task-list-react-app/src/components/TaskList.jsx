import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

export default function TaskList({ title, taskList, moveToComplete }) {
  return (
    <>
      <div className="col-md-4">
        <div class="card">
          <div class="card-header">{title}</div>
          <ul class="list-group list-group-flush">
            {taskList.map((task) => (
              <li>
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
