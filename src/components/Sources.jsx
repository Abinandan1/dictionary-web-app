import { Wrapper } from "../wrappers/Sources";
import redirect from "/assets/images/icon-new-window.svg";
const Sources = ({ sources }) => {
  return (
    <Wrapper>
      {sources?.length > 0 && (
        <>
          <hr />
          <div className="sources-container">
            <small>Source</small>
            <div className="sources">
              {sources?.map((url) => {
                return (
                  <a key={url} href={url} className="source">
                    {url}
                    <img src={redirect} alt="" />
                  </a>
                );
              })}
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
};
export default Sources;
