import React from "react";
import { Card } from "./components/Card/Card";
import { useFetch } from "./utils/hooks/useFetch";

function App() {
  const { response, error } = useFetch(
    "https://www.reddit.com/r/reactjs.json?limit=100"
  );

  if (!response) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  const {
    data: { children }
  } = response || {};

  return (
    <>
      <h1>Top commented</h1>
      {children &&
        children.map(
          ({ data: { id, thumbnail, title, num_comments, permalink } }) => (
            <Card
              key={id}
              image={thumbnail}
              title={title}
              numberOfComments={num_comments}
              link={permalink}
            />
          )
        )}
    </>
  );
}

export default App;
