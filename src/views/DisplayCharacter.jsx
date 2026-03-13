import CharacterHeroSection from "../Components/CharacterHeroSection";
import CharacterInfoSection from "../Components/CharacterInfoSection";
import Nav from "../Components/Nav";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AbilitySection from "../Components/AbilitySection";

function DisplayCharacter() {
  const { search } = useLocation();
  const alias = new URLSearchParams(search).get("alias");

  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/characters/alias=${alias}`)
      .then((response) => {
        setCharacter(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [alias]);

  if (loading) return <div>Loading character...</div>;

  return (
    <div className="bg-gray-100 tracking-wide">
      <Nav showDarkNav={true} />
      <div className="mt-18 pb-10">
        {character ? (
          <div>
            <CharacterHeroSection
              image={character.headerImgUrl}
              alias={character.displayName}
              realName={character.realName}
              shortBio={character.shortBio}
            />
            <CharacterInfoSection
              publisher={character.publisher}
              alias={character.displayName}
              longBio={character.longBio}
              bioImgUrl={character.bioImgUrl}
            />
            <AbilitySection
              displayName={character.displayName}
              images={character.images}
              abilities={character.abilities}
            />
          </div>
        ) : (
          <p>No character found.</p>
        )}
      </div>
    </div>
  );
}

export default DisplayCharacter;
