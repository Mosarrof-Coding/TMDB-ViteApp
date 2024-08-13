/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import PeopleCard from "./PeopleCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function PopularPeople() {
  const apiKey = `&api_key=629353605eab6723aee2f62b54183d48`;
  const baseUrl = "https://api.themoviedb.org/3/person/popular";
  const imgUrl = `https://image.tmdb.org/t/p/original/`;

  const [people, setPeople] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPeople = async (page) => {
    const response = await fetch(
      `${baseUrl}?language=en-US&page=${page}${apiKey}`
    );
    const data = await response.json();
    setPeople(data.results);
    setTotalPages(data.total_pages);
  };

  useEffect(() => {
    fetchPeople(currentPage);
  }, [currentPage]);

  const handleSpanClick = (pageNumber) => {
    setActiveIndex(pageNumber - 1);
    setCurrentPage(pageNumber);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setActiveIndex(activeIndex - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setActiveIndex(activeIndex + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  // Generate the array of pagination numbers
  const paginationNumbers = [];
  const startPage = Math.max(1, currentPage - 6);
  const endPage = Math.min(totalPages, startPage + 6);
  for (let i = startPage; i <= endPage; i++) {
    paginationNumbers.push(i);
  }

  return (
    <>
      <div className="contizer">
        <div className="people py-8">
          <h2 className="text-black font-bold text-2xl pb-2">Popular People</h2>
          <div className="peopleWrap myGrid">
            {people.map((people) => (
              <PeopleCard key={people.id} people={people} imgUrl={imgUrl} />
            ))}
          </div>
          <div className="pagination flex justify-center items-center gap-3 py-6 text-black">
            <span
              className={`inline-block cursor-pointer p-2 rounded-full`}
              onClick={handlePrevClick}
            >
              <FaChevronLeft color="black" />
            </span>
            <div className="flex items-center gap-4">
              {paginationNumbers.map((number) => (
                <span
                  key={number}
                  className={`inline-block cursor-pointer ${
                    currentPage === number ? "bg-gray-200" : ""
                  } p-1 rounded-full`}
                  onClick={() => handleSpanClick(number)}
                >
                  {number}
                </span>
              ))}
            </div>
            <span
              className={`inline-block cursor-pointer p-2 rounded-full`}
              onClick={handleNextClick}
            >
              <FaChevronRight color="black" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularPeople;
