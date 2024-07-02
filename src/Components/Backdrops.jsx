/* eslint-disable react/prop-types */
function Backdrops({ backdrop, imgUrl }) {
  const { file_path } = backdrop;
  return (
    <>
      <div className="myGrid relative" key={backdrop.file_path}>
        {backdrop.file_path ? (
          <img src={imgUrl + file_path} alt="" />
        ) : (
          <img src={"https://placehold.co/600x400"} alt="" />
        )}
        <div className="absolute left-0 top-0 right-0 bottom-0 touch-none pointer-events-none bg-gradient-to-r from-[#00000000] via-[#341c8b00] 20% to-[#ffffff7c]"></div>
      </div>
    </>
  );
}

export default Backdrops;
