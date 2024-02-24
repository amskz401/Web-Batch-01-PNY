import React from "react";
import { Form } from "react-router-dom";

export default function AddUser() {
  return (
    <>
      <div className="row">
        <center>
          <h1>Add New User</h1>
          <div className="col-md-6">
            <Form method="post">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="first_name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="last_name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          </div>
        </center>
      </div>
    </>
  );
}

export const getFormData = (data) => {
  data.request.formData().then((form) => {
    const formData = Object.fromEntries(form);
    console.log(formData);
  });
  return false;
};
