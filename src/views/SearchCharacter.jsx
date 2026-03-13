import { useState } from "react";
import "../App.css";
import axios from "axios";
import CharacterSearchResults from "../Components/CharacterSearchResults";
import Nav from "../Components/Nav";
import CharacterSearchBar from "../Components/CharacterSearchBar";

function SearchCharacter() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleInput = (value) => {
    // console.log(searchTerm);
    setSearchTerm(value);
    axios.get(`/api/characters/search=${searchTerm}`)
    .then((response) => {
      setCharacters(response.data);
      // console.log(response.data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    })
  }

  return (
    <div className="lato bg-gray-200 tracking-wider">
      <Nav showDarkNav={true} />
      <div className="h-screen">
        <CharacterSearchBar handleInput={handleInput} />
        {
          loading ? (
            <div className="relative top-50 text-center">
              Begin Searching...
            </div>
          ) : 
          <CharacterSearchResults characters={characters}/>
        }
      </div>
    </div>
  );
}

export default SearchCharacter;
