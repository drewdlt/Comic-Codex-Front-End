import InfoSectionHeader from "./InfoSectionHeader";

function CharacterInfoSection({ publisher, alias, longBio, bioImgUrl }) {

  return (
    <div className="mx-8 py-15 flex flex-col gap-10 tracking-wider md:gap-15">
      <InfoSectionHeader publisher={publisher} alias={alias}/>
      <img src={`${bioImgUrl}`} alt="" className="h-140 mx-auto"/>
      <p>{longBio}</p>
    </div>
  );
}

export default CharacterInfoSection;
