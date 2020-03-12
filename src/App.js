import React, { useState } from "react";
import { Card } from "./components/Card/Card";
import { useFetch } from "./utils/hooks/useFetch";
import { Loader } from "./components/Loader/Loader";

function App() {
  const { response, isLoading } = useFetch(
    "https://www.reddit.com/r/funny.json?limit=100"
  );

  const [minCommentsCount, setMinCommentsCount] = useState(0);

  const { data: { children } = {} } = response || {};
  const items =
    children &&
    children
      .filter(item => item.data.num_comments >= minCommentsCount)
      .sort((a, b) => b.data.num_comments - a.data.num_comments);

  return (
    <div className="container">
      <h1 className="title">Top commented</h1>
      <p>Min comments count: {minCommentsCount}</p>
      <input
        type="range"
        min={0}
        max={1000}
        value={minCommentsCount}
        onChange={e => {
          console.log(minCommentsCount);

          setMinCommentsCount(e.target.value);
        }}
      />
      {isLoading && <Loader />}
      {items && !!items.length && (
        <div className="gridWrapper">
          {items.map(
            ({ data: { id, thumbnail, title, num_comments, permalink } }) => (
              <div key={id} className="item">
                <Card
                  image={thumbnail}
                  title={title}
                  numberOfComments={num_comments}
                  link={permalink}
                />
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default App;
