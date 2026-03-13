function AbilityDescription({ index, image, ability }) {
  const background = {
    backgroundImage: `url(${image})`,
  };

  return (
    <>
      <div
        style={background}
        className="h-56 w-full bg-cover bg-center md:h-90"
      >
        <div className="hidden h-full w-full bg-black/30 text-white"></div>
      </div>
      <div className="flex min-h-80 flex-col gap-2 bg-black/90 px-8 pt-6 pb-10 text-white">
        <div className="flex gap-1 font-bold">
          <span className="text-3xl">0{index}</span>
          <span className="h-fit border-b-4 text-yellow-500/80">03</span>
        </div>
        <p className="text-xs text-yellow-500/80">POWER + ABILITIES</p>
        <h2 className="mb-4 text-3xl font-semibold">{ability.name}</h2>
        <p className="">{ability.description}</p>
      </div>
    </>
  );
}

export default AbilityDescription;
