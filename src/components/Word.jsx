import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/Word";
import Meanings from "./Meanings";
import Sources from "./Sources";

const Word = () => {
  const { result } = useAppContext();
  let audio;
  result?.phonetics?.forEach((item) => {
    if (item.audio) {
      audio = item.audio;
    }
  });
  return (
    <Wrapper>
      {result && (
        <div className="word-info">
          <div className="name">
            <h1>{result?.word}</h1>
            <h2>{result?.phonetic}</h2>
          </div>
          <svg
            onClick={(e) => e.currentTarget.nextElementSibling.play()}
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
          >
            <g fill="#A445ED" fillRule="evenodd">
              <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
              <path d="M29 27v21l21-10.5z" />
            </g>
          </svg>
          <audio src={audio}></audio>
        </div>
      )}
      <Meanings meanings={result?.meanings} />
      <Sources sources={result?.sourceUrls} />
    </Wrapper>
  );
};
export default Word;
