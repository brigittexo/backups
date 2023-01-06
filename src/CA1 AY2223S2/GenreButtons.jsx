export default function GenreButtons(props) {
  return (
    <>
      <div className="sortButtons">
        <h1>Search by Genre</h1>
        <button onClick={props.OnClickViewAll}>{props.viewAll}</button>
        <button onClick={props.OnClickHorror}>{props.horror}</button>
        <button onClick={props.OnClickComedy}>{props.comedy}</button>
        <button onClick={props.OnClickAction}>{props.action}</button>
        <button onClick={props.OnClickFantasy}>{props.fantasy}</button>
        <button onClick={props.OnClickDrama}>{props.drama}</button>
        <button onClick={props.OnClickAnimation}>{props.animation}</button>
        <button onClick={props.OnClickCrime}>{props.crime}</button>
      </div>
      <div className="sortButtons">
        <h1>Search by Movie Status</h1>
        <button onClick={props.OnClickViewAll}>{props.viewAll}</button>
        <button onClick={props.OnClickNowShowing}>{props.nowShowing}</button>
        <button onClick={props.OnClickNotShowing}>{props.notShowing}</button>
      </div>
    </>
  );
}
