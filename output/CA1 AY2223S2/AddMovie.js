export default function AddMovie(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: props.onSubmit
  }, /*#__PURE__*/React.createElement("label", null, "Image"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    value: props.image,
    onChange: e => props.onChangeImage(e.target.value)
  }), /*#__PURE__*/React.createElement("label", null, "Title"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    value: props.title,
    onChange: e => props.onChangeTitle(e.target.value)
  }), /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("label", null, "Status"), /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("select", {
    value: props.cinema,
    onChange: e => props.onChangeCinema(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "notShowing"
  }, "Past Movies"), /*#__PURE__*/React.createElement("option", {
    value: "isShowing"
  }, "Now Showing")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Year"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: props.year,
    onChange: e => props.onChangeYear(e.target.value)
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Genre"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
    value: props.genre,
    onChange: e => props.onChangeGenre(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "horror"
  }, "Horror"), /*#__PURE__*/React.createElement("option", {
    value: "comedy"
  }, "Comedy"), /*#__PURE__*/React.createElement("option", {
    value: "action"
  }, "Action"), /*#__PURE__*/React.createElement("option", {
    value: "fantasy"
  }, "Fantasy"), /*#__PURE__*/React.createElement("option", {
    value: "animation"
  }, "Animation"), /*#__PURE__*/React.createElement("option", {
    value: "drama"
  }, "Drama"), /*#__PURE__*/React.createElement("option", {
    value: "crime"
  }, "Crime")), /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("label", null, "Rating"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    value: props.rating,
    onChange: e => props.onChangeRating(e.target.value)
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    className: "submitButton",
    onClick: props.onClick
  }, "Add New Movie")));
}