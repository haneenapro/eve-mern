const movie = {
  Title: "Avatar",
  Year: "2009",
  Rated: "PG-13",
  Released: "18 Dec 2009",
  Runtime: "162 min",
  Genre: "Action, Adventure, Fantasy",
  Director: "James Cameron",
  Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
  Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
  Language: "English, Spanish",
  Country: "USA, UK",
  Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
  Poster:
    "https://images.unsplash.com/photo-1513436539083-9d2127e742f1?q=80&w=1463&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const App = () => {
  const personName = " haneena";
  const age = 90;
  const address = "ktm";

  return (
    <>
      {/* <div>
        <h1>
          Hi {personName}, i am {age} years old. I live in {address}
          {`My name is ${personName}. i am ${age}`}
        </h1>
      </div> */}
      <div className="w-[300px]  border-solid border-2 rounded-xl	m-10 ">
        <img src={movie.Poster} className=" bg-contain bg-center rounded-xl" />
        <div className="p-[20px]">
          <h1 className="text-xl font-bold">{movie.Title}</h1>
          <p>Release Date: {movie.Released}</p>
          <p>Director: {movie.Director}</p>
          <button className="py-[10px] px-[15px] mt-[20px] bg-blue-700 rounded-xl text-white size-full">
            Watch Movie
          </button>
        </div>
      </div>
    </>
  );
};
export default App;
