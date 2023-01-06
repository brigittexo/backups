export default function GenreButtons(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "sortButtons"
  }, /*#__PURE__*/React.createElement("h1", null, "Search by Genre"), /*#__PURE__*/React.createElement("button", {
    onClick: props.OnClickViewAll
  }, props.viewAll), /*#__PURE__*/React.createElement("button", {
    onClick: props.OnClickHorror
  }, props.horror), /*#__PURE__*/React.createElement("button", {
    onClick: props.OnClickComedy
  }, props.comedy), /*#__PURE__*/React.createElement("button", {
    onClick: props.OnClickAction
  }, props.action), /*#__PURE__*/React.createElement("button", {
    onClick: props.OnClickFantasy
  }, props.fantasy), /*#__PURE__*/React.createElement("button", {
    onClick: props.OnClickDrama
  }, props.drama), /*#__PURE__*/React.createElement("button", {
    onClick: props.OnClickAnimation
  }, props.animation), /*#__PURE__*/React.createElement("button", {
    onClick: props.OnClickCrime
  }, props.crime)), /*#__PURE__*/React.createElement("div", {
    className: "sortButtons"
  }, /*#__PURE__*/React.createElement("h1", null, "Search by Movie Status"), /*#__PURE__*/React.createElement("button", {
    onClick: props.OnClickViewAll
  }, props.viewAll), /*#__PURE__*/React.createElement("button", {
    onClick: props.OnClickNowShowing
  }, props.nowShowing), /*#__PURE__*/React.createElement("button", {
    onClick: props.OnClickNotShowing
  }, props.notShowing)));
}