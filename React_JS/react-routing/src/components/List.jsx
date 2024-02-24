import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaEye } from "react-icons/fa";

export default function List() {
  const myData = async () => {
    return await useLoaderData();
  };

  let userData = {};
  myData().then((data) => {
    userData = data;
    console.log(userData);
  });

  return (
    <>
      <div className="row">
        <center>
          <div className="col-md-8">
            <h1 className="mt-5 border-bottom ">Users List</h1>
          </div>
          <div className="col-md-8">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {data.map((d) => {
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <Link to="/user/1" className="btn btn-primary ">
                        <FaEye />
                      </Link>
                    </td>
                  </tr>;
                })} */}
              </tbody>
            </table>
          </div>
        </center>
      </div>
    </>
  );
}
