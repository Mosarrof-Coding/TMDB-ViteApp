import { useState } from "react";

/* eslint-disable react/prop-types */
function Video({ video }) {
  const { key } = video;

  // img load
  const [img, setImg] = useState(false);
  const imgLoad = () => {
    setImg(true);
  };
  return (
    <>
      <div className="block min-w-full xl:min-w-[50%] aspect-[16/9] xl:w-auto">
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
            <img
              src="../../public/bigloading.gif"
              className="w-2/3"
              onLoad={imgLoad}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Video;
