/* eslint-disable react/prop-types */
function Poster({ poster }) {
  const imgUrl = `https://image.tmdb.org/t/p/original/`;
  const { file_path } = poster;
  return (
    <>
      <div className="max-w-[360px] min-w-[360px]">
        {file_path ? (
          <div>
            <img src={imgUrl + file_path} alt="" />
          </div>
        ) : (
          <div>
            <img src={"https://placehold.co/600x400"} alt="" />
          </div>
        )}
      </div>
    </>
  );
}

export default Poster;
