import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ViewUser() {
  const params = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + params.id)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return <div>ViewUser</div>;
}
