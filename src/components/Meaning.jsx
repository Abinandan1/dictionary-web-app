import { Wrapper } from "../wrappers/Meaning";

const Meaning = ({ meaning }) => {
  const definitions = meaning?.definitions;
  const synonyms = meaning?.synonyms;
  return (
    <Wrapper>
      <div className="partOfSpeech">
        <h2 className="italic">{meaning?.partOfSpeech}</h2>
        <hr />
      </div>
      {/* DEFINITIONS */}
      <div className="definitions-container">
        <h2>Meaning</h2>
        <ul className="definitions">
          {definitions?.map((definition) => {
            return (
              <div className="definition" key={definition.definition}>
                <span style={{ color: "var(--purple-200)" }} className="bullet">
                  &bull;
                </span>
                <div>
                  <li className="definition-text">{definition?.definition}</li>
                  {definition?.example && <p>"{definition?.example}"</p>}
                </div>
              </div>
            );
          })}
        </ul>
      </div>
      {/* SYNONYMS */}
      {synonyms.length > 0 && (
        <div className="synonyms-container">
          <h2>Synonyms</h2>
          <div className="synonyms">
            {synonyms?.map((synonym) => {
              return (
                <p className="bold" key={synonym}>
                  {synonym}
                </p>
              );
            })}
          </div>
        </div>
      )}
    </Wrapper>
  );
};
export default Meaning;
