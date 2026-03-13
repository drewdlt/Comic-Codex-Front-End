function InfoSection({ refObj, title, text, logos = [] }) {
  return (
    <section
      ref={refObj}
      className="flex flex-col bg-gray-200 px-10 py-20 lg:px-20 lg:py-28"
    >
      <h1 className="mb-6 text-3xl font-bold lg:text-4xl">{title}</h1>
      <p className="lg:text-lg">{text}</p>
      <div className="mt-3 flex w-full justify-between md:w-fit md:gap-5 lg:gap-10">
        {logos.map((logoUrl, index) => (
          <img
            className="h-8 w-auto lg:h-12"
            key={index}
            src={`${logoUrl}.svg`}
            alt={`${logoUrl} logo`}
          />
        ))}
      </div>
    </section>
  );
}

export default InfoSection;
