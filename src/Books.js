import axios from "axios";
import React, { useEffect, useState } from "react";

function Books() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("Data.json")
      .then((result) => {
        console.log(result.data);
        setPosts(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {posts.map((data) => {
        return (
          <div key={data.id}>
            <h2>{data.id}-
            {data.title} by {data.author}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Books;