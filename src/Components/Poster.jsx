/* eslint-disable react/prop-types */
function Poster({ poster, imgUrl, img, imgLoad, loaderGif }) {
  const { file_path } = poster;
  return (
    <>
      {file_path ? (
        img ? (
          <img src={imgUrl + file_path} className="max-h-[300px]" />
        ) : (
          <img
            src={loaderGif}
            alt="loaderGif"
            className="w-3/5 m-auto my-16"
            onLoad={imgLoad}
          />
        )
      ) : (
        <img src="https://placehold.co/320x480" />
      )}
    </>
  );
}

export default Poster;
