/* eslint-disable react/prop-types */
import loader from "../assets/bigloading.gif";

function Video({ video, img, imgLoad }) {
  const { key } = video;

  return (
    <>
      {img ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="w-full grid place-items-center">
          <img src={loader} className="w-2/3" onLoad={imgLoad} />
        </div>
      )}
    </>
  );
}

export default Video;
