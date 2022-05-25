const Home = (props) => {
  return (
    <div className="form">
      <form onSubmit={props.handleSubmit}>
        <div className="row">
          <div className="col s12 m8 l8">
            <input type="text" name="busqueda" requiered placeholder="Search your image Ej: cafe" />
          </div>
          <div className="col s12 m4 l4">
            <button className="btn amber">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
