import "../App.css";

function CharacterSearchBar({ handleInput }) {
  const handleKeyPress = (e) => {
    // console.log(e.target.value);
    handleInput(e.target.value);
  };

  return (
    <div className="relative top-45 mx-auto w-3/4">
      <input
        onChange={handleKeyPress}
        type="text"
        placeholder="SEARCH"
        className="w-full border-b-2 px-7 py-1 text-lg font-semibold focus:border-b-blue-600 focus:outline-0"
      />
      <img
        src="SearchIcon.svg"
        alt="search icon"
        className="absolute bottom-2"
      />
    </div>
  );
}

export default CharacterSearchBar;
