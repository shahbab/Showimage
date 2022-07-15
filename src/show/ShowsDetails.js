function Details(props) {
  return (
    <div className="container mt-4">
      <div onClick={props.removeDetail}> {"<"} Back</div>
      <div className="card">
        <img
          className="card-img-top"
          src={props.showDetail.show.image.original}
          alt="Card image cap"
        />
        <div className="card-body">
          <p className="card-text" _>
            {props.showDetail.show.name}
          </p>
          <p className="card-text"> </p>
          <p
            className="card-text"
            dangerouslySetInnerHTML={{ __html: props.showDetail.show.summary }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default Details;
