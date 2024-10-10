/* eslint-disable react/prop-types */
function Video({ video }) {
  return (
    <iframe
      className="w-full h-full"
      src={`https://www.youtube-nocookie.com/embed/${video}`}
      title={video.name}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

export default Video;
