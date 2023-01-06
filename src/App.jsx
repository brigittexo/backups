import Hello from "./Practical 2/Hello";
import TitleLi from "./Practical 4/TitleLi";
import HobbyList from "./Practical 4/HobbyList";
import Age from "./Practical 9/Age";
import MovieList from "./Practical 4/extra/MovieList";
import Hobby from "./Practical 3/Hobby";

const hobbies = [
  { title: "Gaming", emoji: "🎮" },
  { title: "Chill", emoji: "" },
  { title: "Slacking", emoji: "🎉" },
];

function App(props) {
  return (
    <div>
      <Hello />
      <ol>
        <TitleLi title="Name" text="Brigitte Chan" />
        <Age value={99} />
        <li>
          <strong>Hobbies:</strong>
        </li>
        <ol>
          <HobbyList
            hobbies={[
              { title: "Gaming", emoji: "🎮" },
              { title: "Chill", emoji: "" },
              { title: "Slacking", emoji: "🎉" },
            ]}
          />
        </ol>
        <ol>
          <li>
            <strong>Hobbies (Using Map):</strong>
            {hobbies.map(function (hobby) {
              return <Hobby title={hobby.title} emoji={hobby.emoji} />;
            })}
          </li>
        </ol>
        <li>
          <b>Movies:</b>

          <ol>
            <MovieList
              movies={[
                {
                  url: "https://www.rottentomatoes.com/m/black_adam",
                  title: "Black Adam",
                  rating: 40,
                },
                {
                  url: "https://www.rottentomatoes.com/m/enola_holmes_2",
                  title: "Enola Holmes 2",
                  rating: 95,
                },
                {
                  url: "https://www.rottentomatoes.com/m/my_policeman",
                  title: "My Policeman",
                  rating: 41,
                },
              ]}
            />
          </ol>
        </li>
      </ol>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
