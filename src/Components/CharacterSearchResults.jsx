import SearchResult from "./SearchResult";

function CharacterSearchResults({ characters }) {
  return (
    <div className="relative top-50 mx-5 mt-8">
      {characters.map((character, index) => {
        return <SearchResult key={index} character={character} />
      })}
    </div>
  );
}

export default CharacterSearchResults;
