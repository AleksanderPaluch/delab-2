

const LazyVideo = () => {
  return (
    <iframe
      width={window.innerWidth < 768 ? "355" : "550"}
      height={window.innerWidth < 768 ? "200" : "310"}
      src="https://www.youtube.com/embed/i6ssUfaSbg4?si=QOsNeCMv918VAy9w"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default LazyVideo;
