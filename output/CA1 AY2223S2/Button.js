export default function Button({
  categories,
  handleClick
}) {
  const buttons = categories.map((category, index) => {
    return /*#__PURE__*/React.createElement("div", {
      className: "button-container",
      key: index
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => handleClick(category)
    }, category.toUpperCase()));
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "all-buttons"
  }, buttons);
}