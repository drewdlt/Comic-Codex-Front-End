import { Link } from "react-router-dom";

function SearchResult({character}) {
    const profileImgStyle = {
        backgroundImage : `url(${character.headerImg})`
    };

    return(
        <Link
            to={`/character?alias=${character.alias}`}
            className="mb-8 flex gap-4 border-b-2 border-gray-300 pb-4 transition-colors duration-200 hover:cursor-pointer hover:text-red-600 hover:opacity-90"
          >
            <div
              style={profileImgStyle}
              className="inline-block h-22 w-22 rounded-full bg-cover bg-center"
            ></div>
            <div className="flex flex-col justify-end pb-2">
              <span className="font-semibold text-black/50">{character.publisher}</span>
              <span className="text-2xl font-bold">
                {character.displayName}
              </span>
              <span className="text-sm italic">{character.realName}</span>
            </div>
        </Link>
    );

}

export default SearchResult;