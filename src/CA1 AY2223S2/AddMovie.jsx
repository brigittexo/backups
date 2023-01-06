export default function AddMovie(props) {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <label>Image</label>
        <br />
        <input
          value={props.image}
          onChange={(e) => props.onChangeImage(e.target.value)}
        />
        <label>Title</label>
        <br />
        <input
          value={props.title}
          onChange={(e) => props.onChangeTitle(e.target.value)}
        />
        <br /> <label>Status</label>
        <br />{" "}
        <select
          value={props.cinema}
          onChange={(e) => props.onChangeCinema(e.target.value)}
        >
          <option value="notShowing">Past Movies</option>
          <option value="isShowing">Now Showing</option>
        </select>
        <br />
        <label>Year</label>
        <br />
        <input
          type="number"
          value={props.year}
          onChange={(e) => props.onChangeYear(e.target.value)}
        />
        <br />
        <label>Genre</label>
        <br />
        <select
          value={props.genre}
          onChange={(e) => props.onChangeGenre(e.target.value)}
        >
          <option value="horror">Horror</option>
          <option value="comedy">Comedy</option>
          <option value="action">Action</option>
          <option value="fantasy">Fantasy</option>
          <option value="animation">Animation</option>
          <option value="drama">Drama</option>
          <option value="crime">Crime</option>
        </select>
        <br /> <label>Rating</label>
        <br />
        <input
          type="number"
          step="0.01"
          value={props.rating}
          onChange={(e) => props.onChangeRating(e.target.value)}
        />
        <br />
        <button className="submitButton" onClick={props.onClick}>
          Add New Movie
        </button>
      </form>
    </>
  );
}
