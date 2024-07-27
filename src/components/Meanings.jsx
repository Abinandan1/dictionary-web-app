import { Wrapper } from "../wrappers/Meanings";
import Meaning from "./Meaning";

const Meanings = ({ meanings }) => {
  return (
    <Wrapper>
      {meanings?.map((meaning) => {
        return <Meaning key={meaning?.partOfSpeech} meaning={meaning} />;
      })}
    </Wrapper>
  );
};
export default Meanings;
