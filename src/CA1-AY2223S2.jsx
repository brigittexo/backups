import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";
import Movie from "./CA1 AY2223S2/Movie";
import { data } from "./CA1 AY2223S2/Data";
import AddMovie from "./CA1 AY2223S2/AddMovie";
import GenreButtons from "./CA1 AY2223S2/GenreButtons";

function CA1AY2223S2(props) {
  const [elementToDisplay, setElementToDisplay] = React.useState("viewAll");

  const [title, setTitle] = React.useState("");
  const [year, setYear] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [cinema, setCinema] = React.useState("");
  const [image, setImage] = React.useState([]);
  const [movieItem, setMovieItem] = React.useState(data || []);

  const handleChange = (id) => {
    const copyMovies = [...movieItem];
    const modifiedMovies = copyMovies.map((item) => {
      if (id === item.id) {
        item.checked = !item.checked;
      }

      return item;
    });

    setMovieItem(modifiedMovies);
  };

  const handleRemove = () => {
    const copyMovies = [...movieItem];
    const modifiedMovies = copyMovies.filter((item) => item.checked !== true);
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
        image: image,
      },
      // Items after the insertion point:
      ...movieItem.slice(insertAt),
    ];
    setMovieItem(newMovie);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const handleRemoveItem = (id) => {
    setMovieItem(movieItem.filter((item) => item.id !== id));
  };

  //Display by Genre
  function DisplayMoviesOfGenre(props) {
    const movList = props.movieListFull;
    const listElement = movList
      .filter((movList) => movList.genre === props.genre)
      .map((item) => (
        <Movie
          {...item}
          onClick={() => handleRemoveItem(item.id)}
          checkDelete={() => handleChange(item.id)}
        />
      ));
    return <div>{listElement}</div>;
  }

  //Display by Status
  function DisplayMoviesOfStatus(props) {
    const movList = props.movieListFull;
    const listElement = movList
      .filter((movList) => movList.cinema === props.cinema)
      .map((item) => (
        <Movie
          {...item}
          onClick={() => handleRemoveItem(item.id)}
          checkDelete={() => handleChange(item.id)}
        />
      ));
    return <div>{listElement}</div>;
  }

  function DisplayMovieShowAll(props) {
    //conditions met
    const movList = props.movieListFull;
    const listElement = movList.map((item) => (
      <Movie
        {...item}
        onClick={() => handleRemoveItem(item.id)}
        checkDelete={() => handleChange(item.id)}
      />
    ));
    return <div>{listElement}</div>;
  }

  return (
    <div className="container">
      <AddMovie
        onSubmit={submitHandler}
        onClick={handleAddMovie}
        onChangeImage={setImage}
        onChangeTitle={setTitle}
        onChangeCinema={setCinema}
        onChangeYear={setYear}
        onChangeGenre={setGenre}
        onChangeRating={setRating}
        image={image}
      />

      <GenreButtons
        OnClickViewAll={() => setElementToDisplay("viewAll")}
        viewAll={"View All"}
        OnClickHorror={() => setElementToDisplay("horror")}
        horror={"Horror"}
        OnClickComedy={() => setElementToDisplay("comedy")}
        comedy={"Comedy"}
        OnClickAction={() => setElementToDisplay("action")}
        action={"Action"}
        OnClickFantasy={() => setElementToDisplay("fantasy")}
        fantasy={"Fantasy"}
        OnClickDrama={() => setElementToDisplay("drama")}
        drama={"Drama"}
        OnClickAnimation={() => setElementToDisplay("animation")}
        animation={"Animation"}
        OnClickCrime={() => setElementToDisplay("crime")}
        crime={"Crime"}
        OnClickNowShowing={() => setElementToDisplay("nowShowing")}
        nowShowing={"In Cinema"}
        OnClickNotShowing={() => setElementToDisplay("notShowing")}
        notShowing={"Not Showing"}
      />

      <div className="bulkDeleteButton buttonNav">
        <div className="buttonNav">
          <button type="button" onClick={() => handleRemove()}>
            Bulk Delete Movies ❌
          </button>
        </div>
      </div>

      <div className="item-container">
        {
          {
            viewAll: <DisplayMovieShowAll movieListFull={movieItem} />,
          }[elementToDisplay]
        }
        <DisplayMoviesOfGenre
          movieListFull={movieItem}
          genre={elementToDisplay}
        />{" "}
        <DisplayMoviesOfStatus
          movieListFull={movieItem}
          cinema={elementToDisplay}
        />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CA1AY2223S2 />);
