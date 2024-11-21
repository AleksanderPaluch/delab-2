import css from "./GenAI.module.css";

const LazyVideo = () => {
  return (
    <>
      <div className={css.smallVideo}>
        <iframe
          width={355}
          height={200}
          src="https://www.youtube.com/embed/i6ssUfaSbg4?si=QOsNeCMv918VAy9w"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className={css.largeVideo}>
        <iframe
          width={550}
          height={310}
          src="https://www.youtube.com/embed/i6ssUfaSbg4?si=QOsNeCMv918VAy9w"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default LazyVideo;
