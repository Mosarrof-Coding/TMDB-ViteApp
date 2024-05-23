/* eslint-disable react/prop-types */
function Backdrops({ backdrop, imgUrl }) {
  const { index, file_path } = backdrop;
  return (
    <>
      <div className="max-w-[420px] min-w-[420px] relative" key={index}>
        {backdrop.file_path ? (
          <div>
            <img src={imgUrl + file_path} alt="" />
          </div>
        ) : (
          <div>
            <img src={"https://placehold.co/600x400"} alt="" />
          </div>
        )}
        <div className="absolute left-0 top-0 right-0 bottom-0 touch-none pointer-events-none bg-gradient-to-r from-[#00000000] via-[#341c8b00] 20% to-[#ffffff7c]"></div>
      </div>
    </>
  );
}

export default Backdrops;
