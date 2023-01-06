function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";
import Movie from "./CA1 AY2223S2/Movie.js";
import { data } from "./CA1 AY2223S2/Data.js";
import AddMovie from "./CA1 AY2223S2/AddMovie.js";
import GenreButtons from "./CA1 AY2223S2/GenreButtons.js";
function CA1AY2223S2(props) {
  const [elementToDisplay, setElementToDisplay] = React.useState("viewAll");
  const [title, setTitle] = React.useState("");
  const [year, setYear] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [cinema, setCinema] = React.useState("");
  const [image, setImage] = React.useState([]);
  const [movieItem, setMovieItem] = React.useState(data || []);
  const handleChange = id => {
    const copyMovies = [...movieItem];
    const modifiedMovies = copyMovies.map(item => {
      if (id === item.id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setMovieItem(modifiedMovies);
  };
  const handleRemove = () => {
    const copyMovies = [...movieItem];
    const modifiedMovies = copyMovies.filter(item => item.checked !== true);
    setMovieItem(modifiedMovies);
  };
  const handleAddMovie = () => {
    //let nextId = 0;
    const insertAt = 1; // Could be any index
    const newMovie = [
    // Items before the insertion point:
    ...movieItem.slice(0, insertAt),
    // New item:
    {
      //id: nextId++,
      id: nanoid(),
      title: title,
      year: year,
      genre: genre,
      rating: rating,
      cinema: cinema,
      image: image
    },
    // Items after the insertion point:
    ...movieItem.slice(insertAt)];
    setMovieItem(newMovie);
  };
  const submitHandler = e => {
    e.preventDefault();
  };
  const handleRemoveItem = id => {
    setMovieItem(movieItem.filter(item => item.id !== id));
  };

  //Display by Genre
  function DisplayMoviesOfGenre(props) {
    const movList = props.movieListFull;
    const listElement = movList.filter(movList => movList.genre === props.genre).map(item => /*#__PURE__*/React.createElement(Movie, _extends({}, item, {
      onClick: () => handleRemoveItem(item.id),
      checkDelete: () => handleChange(item.id)
    })));
    return /*#__PURE__*/React.createElement("div", null, listElement);
  }

  //Display by Status
  function DisplayMoviesOfStatus(props) {
    const movList = props.movieListFull;
    const listElement = movList.filter(movList => movList.cinema === props.cinema).map(item => /*#__PURE__*/React.createElement(Movie, _extends({}, item, {
      onClick: () => handleRemoveItem(item.id),
      checkDelete: () => handleChange(item.id)
    })));
    return /*#__PURE__*/React.createElement("div", null, listElement);
  }
  function DisplayMovieShowAll(props) {
    //conditions met
    const movList = props.movieListFull;
    const listElement = movList.map(item => /*#__PURE__*/React.createElement(Movie, _extends({}, item, {
      onClick: () => handleRemoveItem(item.id),
      checkDelete: () => handleChange(item.id)
    })));
    return /*#__PURE__*/React.createElement("div", null, listElement);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(AddMovie, {
    onSubmit: submitHandler,
    onClick: handleAddMovie,
    onChangeImage: setImage,
    onChangeTitle: setTitle,
    onChangeCinema: setCinema,
    onChangeYear: setYear,
    onChangeGenre: setGenre,
    onChangeRating: setRating,
    image: image
  }), /*#__PURE__*/React.createElement(GenreButtons, {
    OnClickViewAll: () => setElementToDisplay("viewAll"),
    viewAll: "View All",
    OnClickHorror: () => setElementToDisplay("horror"),
    horror: "Horror",
    OnClickComedy: () => setElementToDisplay("comedy"),
    comedy: "Comedy",
    OnClickAction: () => setElementToDisplay("action"),
    action: "Action",
    OnClickFantasy: () => setElementToDisplay("fantasy"),
    fantasy: "Fantasy",
    OnClickDrama: () => setElementToDisplay("drama"),
    drama: "Drama",
    OnClickAnimation: () => setElementToDisplay("animation"),
    animation: "Animation",
    OnClickCrime: () => setElementToDisplay("crime"),
    crime: "Crime",
    OnClickNowShowing: () => setElementToDisplay("nowShowing"),
    nowShowing: "In Cinema",
    OnClickNotShowing: () => setElementToDisplay("notShowing"),
    notShowing: "Not Showing"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bulkDeleteButton buttonNav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "buttonNav"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => handleRemove()
  }, "Bulk Delete Movies \u274C"))), /*#__PURE__*/React.createElement("div", {
    className: "item-container"
  }, {
    viewAll: /*#__PURE__*/React.createElement(DisplayMovieShowAll, {
      movieListFull: movieItem
    })
  }[elementToDisplay], /*#__PURE__*/React.createElement(DisplayMoviesOfGenre, {
    movieListFull: movieItem,
    genre: elementToDisplay
  }), " ", /*#__PURE__*/React.createElement(DisplayMoviesOfStatus, {
    movieListFull: movieItem,
    cinema: elementToDisplay
  })));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(CA1AY2223S2, null));