export default function Movie(props) {
  const emoji = props.rating >= 4.9 ? "🍿" : props.rating < 10 ? "💩" : "❓";

  const getColor = () => {
    if (props.genre === "horror") return "#ee2c2c";
    if (props.genre === "comedy") return "#0a4859";
    if (props.genre === "action") return "#191970";
    if (props.genre === "fantasy") return "#8463f6";
    if (props.genre === "animation") return "#ff9b00";
    if (props.genre === "crime") return "#1056ED";
    return "black";
  };

  return (
    <div className="item movie-card" key={props.id}>
      <div className="movie-card-header">
        <img src={props.image} />
      </div>
      <div className="movie-card-body">
        <p>
          <span
            className="tag"
            style={{ backgroundColor: getColor() }}
            /*style={{
                "backgroundColor": props.genre === "horror" ? "red" : "yellow",
              }
              }*/
          >
            {(props.genre ? "" : "") + props.genre}
          </span>{" "}
          {""}
          {emoji}
          {props.rating}/10
        </p>
        <p className="movieTitle">
          {props.title} ({props.year})
        </p>
        <p></p>
        <p>{props.description}</p>
        <button onClick={props.onClick} className="deleteButton">
          Delete This
        </button>

        <input
          type="checkbox"
          className="custom-control-input"
          id={`customCheck1-${props.name}`}
          checked={props.checked}
          onChange={props.checkDelete}
        />
      </div>
    </div>
  );
}
