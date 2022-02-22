import { useGlobalContext } from "../context";

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext();

  if (isLoading) {
    return <div className="hloading"></div>;
  }
  return (
    <section className="hstories">
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story;
        return (
          <article key={objectID} className="hstory">
            <h4 className="htitle">{title}</h4>
            <p className="hinfo">
              {points} points by <span>{author} | </span> {num_comments}{" "}
              comments
            </p>
            <div>
              <a
                href={url}
                className="hread-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                read more
              </a>
              <button
                className="hremove-btn"
                onClick={() => removeStory(objectID)}
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
