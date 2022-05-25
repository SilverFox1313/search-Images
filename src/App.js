import React, { useState } from "react";
import Home from "./Home";

function App() {
  const [termino, setTermino] = useState("cafe");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTermino(e.target.busqueda.value);

    //connect to the pixabay api
    fetch(
      `https://pixabay.com/api/?key=15714589-4e7dd297e33af6182c0cdfc9d&q=${termino}`
    )
      .then((response) => response.json())
      .then((data) => setData(data.hits));
  };

  console.log(data)

  return (
    <div className="App container">
      <Home handleSubmit={handleSubmit} />
      <div className="row">
        {data.map((data) => (
          <div className="col s12 m3 l3" key={data.id}>
            <div className="card-image">
              <img alt="previe" src={data.previewURL} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
