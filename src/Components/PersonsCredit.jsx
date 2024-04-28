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
        <div className="wrp flex gap-4 overflow-x-auto pt-6">
          {credits.length > 0 ? (
            credits.map((credit) => (
              <div
                key={credit.id}
                className="max-w-[140px] min-w-[140px] mb-4 border rounded hover:shadow-md transition-all overflow-hidden"
              >
                <div>
                  <Link to={`/Detailpage/${credit.id}`}>
                    {credit.backdrop_path ? (
                      <div className="h-[210px] overflow-hidden">
                        <img
                          src={imgUrl + credit.poster_path}
                          alt={credit.title || "No title found"}
                        />
                      </div>
                    ) : (
                      <div className="">
                        <img
                          src="https://placehold.co/140x210"
                          alt="Placeholder"
                        />
                      </div>
                    )}
                  </Link>
                </div>
                <div>
                  <h4 className="text-black text-sm break-all text-center leading-none pb-2 mt-2">
                    {credit.title
                      ? credit.title.slice(0, 12)
                      : "No title found"}
                  </h4>
                </div>
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
