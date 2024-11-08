/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function PersonsCredit() {
  const params = useParams();
  const cdtUrl = `https://api.themoviedb.org/3/person/${params.id}/combined_credits?language=en-US&api_key=629353605eab6723aee2f62b54183d48`;
  const imgUrl = `https://image.tmdb.org/t/p/original/`;

  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);

  const creditsOf = async () => {
    try {
      const res = await fetch(cdtUrl);
      const data = await res.json();
      // Filter out entries with duplicate poster_path
      const uniqueCredits = data.cast.filter(
        (credit, index, self) =>
          index === self.findIndex((c) => c.poster_path === credit.poster_path)
      );
      setCredits(uniqueCredits);
    } catch (error) {
      console.error("Error fetching credits:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    creditsOf();
  }, [params.id]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="min-w-max flex gap-2 lg:gap-4 pt-2 sm:pt-4 lg:pt-6">
          {credits.length > 0 ? (
            credits.map((credit) => (
              <div
                key={credit.id}
                className="w-28 lg:w-36 mb-4 border rounded hover:shadow-md transition-all overflow-hidden"
              >
                <Link to={`/Detailpage/${credit.id}`}>
                  {credit.backdrop_path ? (
                    <img
                      src={imgUrl + credit.poster_path}
                      alt={credit.title || "No title found"}
                      className="w-full"
                    />
                  ) : (
                    <img
                      src="https://placehold.co/140x210"
                      alt="Placeholder"
                      className="w-full"
                    />
                  )}
                </Link>
                <h4 className="text-black text-sm break-all text-center leading-none pb-2 mt-2">
                  {credit.title ? credit.title.slice(0, 12) : "No title found"}
                </h4>
              </div>
            ))
          ) : (
            <span className="text-red-600 -mt-6">No credits found</span>
          )}
        </div>
      )}
    </>
  );
}

export default PersonsCredit;
