import React, { useRef } from "react";
import { MdAddToPhotos } from "react-icons/md";

export default function ({ fromChild }) {
  const inputValue = useRef();
  return (
    <>
      <div className="row">
        <center>
          <div className="col-md-6">
            <form>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  ref={inputValue}
                />
                <span
                  className="input-group-text btn btn-primary"
                  id="basic-addon2"
                  onClick={() => fromChild(inputValue.current.value)}
                >
                  <MdAddToPhotos></MdAddToPhotos>
                </span>
              </div>
            </form>
          </div>
        </center>
      </div>
    </>
  );
}
