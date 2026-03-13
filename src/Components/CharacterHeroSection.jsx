function CharacterHeroSection({ image, alias, realName, shortBio }) {
  const imgsStyles = {
    backgroundImage: `url(${image})`,
  };

  const containerStyles = {
    clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
  };

  return (
    <div className="flex flex-col">
      <div
        style={imgsStyles}
        className="h-80 w-full bg-cover bg-center md:h-100"
      ></div>
      <div
        style={containerStyles}
        className="bg-black/90 px-8 pt-15 pb-20 text-white md:pt-10 md:pb-15"
      >
        <p className="text-sm font-semibold">{realName.toUpperCase()}</p>
        <h1 className="mt-2 text-3xl font-black">{alias.toUpperCase()}</h1>
        <p className="mt-3 text-sm italic">{shortBio}</p>
      </div>
    </div>
  );
}

export default CharacterHeroSection;
