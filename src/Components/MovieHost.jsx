import { useEffect, useState } from "react";

function MovieHost() {
  // tv host
  const [hosts, setHosts] = useState([]);
  const hostingFetch = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/196?api_key=629353605eab6723aee2f62b54183d48`
    );
    const data = await res.json();
    // console.log("data:", data);
    setHosts(data);
  };
  useEffect(() => {
    hostingFetch();
  }, []);

  return (
    <>
      <li className="w-[180px] flex flex-col">
        <span className="hoster font-bold">Hosted by:</span>
        <span className="">Mosarrof</span>
      </li>
      <li className="w-[180px] flex flex-col">
        <span className="hoster font-bold">Preshow Hosts:</span>
        <span className="">Lorem ipsum dolor sit.</span>
      </li>
      <li className="w-[180px] flex flex-col">
        <span className="hoster font-bold">Produced By:</span>
        <span className="">Raj Kapoor, Katy Mullan</span>
      </li>
      <li className="w-[180px] flex flex-col">
        <span className="hoster font-bold">Directed By:</span>
        <span className="">Hamish Hamilton</span>
      </li>
      <li className="w-[180px] flex flex-col">
        <span className="hoster font-bold">Network:</span>
        {hosts.networks?.map((network) => (
          <div key={network.id}>
            <span className="">{network.name}</span>
          </div>
        ))}
      </li>
      <li className="w-[180px] flex flex-col">
        <span className="hoster font-bold">Location:</span>
        <span className="">Dolby Theatre Los Angeles, California</span>
      </li>
      <li className="w-[180px] flex flex-col">
        <span className="hoster font-bold">Runtime :</span>
        <span className="">3h 23m</span>
      </li>
    </>
  );
}

export default MovieHost;
