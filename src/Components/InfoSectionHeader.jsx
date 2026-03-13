function InfoSectionHeader({ publisher, alias }) {
  return (
    <div>
      <p className="text-xs font-semibold text-black/50">ORIGIN</p>
      <div>
        <span className="text-2xl font-semibold">{alias}</span>
        <span className="mx-2 text-3xl font-extralight">|</span>
        <span className="text-2xl font-semibold">{publisher}</span>
      </div>
    </div>
  );
}

export default InfoSectionHeader;
