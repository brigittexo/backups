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
  return /*#__PURE__*/React.createElement("div", {
    className: "item movie-card",
    key: props.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "movie-card-header"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.image
  })), /*#__PURE__*/React.createElement("div", {
    className: "movie-card-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      backgroundColor: getColor()
    }
    /*style={{
        "backgroundColor": props.genre === "horror" ? "red" : "yellow",
      }
      }*/
  }, (props.genre ? "" : "") + props.genre), " ", "", emoji, props.rating, "/10"), /*#__PURE__*/React.createElement("p", {
    className: "movieTitle"
  }, props.title, " (", props.year, ")"), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("p", null, props.description), /*#__PURE__*/React.createElement("button", {
    onClick: props.onClick,
    className: "deleteButton"
  }, "Delete This"), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: `customCheck1-${props.name}`,
    checked: props.checked,
    onChange: props.checkDelete
  })));
}