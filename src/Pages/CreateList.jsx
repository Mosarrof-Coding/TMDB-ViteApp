import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function CreateList() {
  const [inputValue, setInputValue] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState("yes");
  const [submittedValues, setSubmittedValues] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePublicChange = (e) => {
    setIsPublic(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add new value to the local list
    setSubmittedValues([...submittedValues, inputValue]);

    // Call the function to create the list in TMDB
    await addPlayList();

    // Clear the input fields
    setInputValue("");
    setDescription("");
  };

  // Function to create the playlist and store it on TMDB
  const addPlayList = async () => {
    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/list`,
        {
          name: inputValue,
          description: description,
          public: isPublic === "yes",
          language: "en",
          session_id: "6cb9342a31c4dc0a918437b34f7c252074185c12",
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjkzNTM2MDVlYWI2NzIzYWVlMmY2MmI1NDE4M2Q0OCIsIm5iZiI6MTcyODMwMTc0MC4xMTA0NTgsInN1YiI6IjY1NmY1N2Q4ODgwNTUxMDEzYTRhMDQyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nmlzqvsh3ZCVZLMU9orbON6pZByAt0BW0t6AXPHoLL8",
          },
        }
      );

      console.log("API Response:", response.data); // Debugging line

      if (response.data && response.data.status_code === 1) {
        toast.success("Playlist created successfully!");
      } else {
        toast.error(
          "Failed to create the playlist: " +
            (response.data?.status_message || "Unknown error")
        );
      }
    } catch (error) {
      console.error("Error creating playlist:", error); // Debugging line
      toast.error("Failed to create the playlist.");
    }
  };

  return (
    <section className="py-4 lg:py-8">
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          duration: 5000,
          style: {
            background: "#111800",
            color: "#fff",
            boxShadow: "none",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <div className="contizer">
        <div className="step-1 text-black flex flex-col md:flex-row gap-4 lg:gap-8">
          <div className="steplist w-full h-fit md:basis-1/4 md:min-w-[240px] rounded lg:rounded lg:rounded lg:rounded-lg border overflow-hidden shadow-lg">
            <h4 className="text-lg lg:text-xl text-white font-bold py-3 lg:py-6 px-2 lg:px-4 bg-[#01B4E4]">
              Edit
            </h4>
            <ul className="">
              <li className="px-2 lg:px-4 text-base lg:text-lg text-black hover:text-blue-600 font-medium py-1.5 lg:py-3 hover:bg-gray-200 transition-all duration-300">
                Step 1: List Details
              </li>
              <li className="px-2 lg:px-4 text-base lg:text-lg text-black hover:text-blue-600 font-medium py-1.5 lg:py-3 hover:bg-gray-200 transition-all duration-300">
                Step 2: Add Items
              </li>
              <li className="px-2 lg:px-4 text-base lg:text-lg text-black hover:text-blue-600 font-medium py-1.5 lg:py-3 hover:bg-gray-200 transition-all duration-300">
                Step 3: Choose Image
              </li>
            </ul>
          </div>

          <div className="formlist w-full md:basis-3/4 border rounded lg:rounded lg:rounded lg:rounded-lg overflow-hidden shadow-lg">
            <h4 className="text-base lg:text-xl font-bold text-white p-2 bg-[#01B4E4]">
              Create New List: Step 1
            </h4>
            <form
              className="flex flex-col gap-4 lg:gap-6 p-2 lg:p-4"
              onSubmit={handleSubmit}
            >
              <div className="formGroup">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="playList name"
                  required
                  className="w-full p-1 lg:p-2 text-sm lg:text-base focus:outline-none font-light rounded border"
                  onChange={handleInputChange}
                  value={inputValue}
                />
              </div>
              <div className="thisGroup">
                <h5>Description</h5>
                <textarea
                  rows={2}
                  className="w-full p-1 lg:p-2 text-sm lg:text-base focus:outline-none font-light rounded border"
                  onChange={handleDescriptionChange}
                  value={description}
                ></textarea>
              </div>
              <div className="thisGroup">
                <h5>Public List?</h5>
                <select
                  className="w-full p-1 lg:p-2 text-sm lg:text-base focus:outline-none font-light rounded border"
                  onChange={handlePublicChange}
                  value={isPublic}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="flex justify-between items-center gap-2 lg:gap-4">
                <Button
                  type="submit"
                  className="w-fit py-0.5 lg:py-1 px-4 lg:px-6 text-base lg:text-xl font-semibold rounded bg-black hover:bg-blue-600 text-white cursor-pointer transition-all duration-300"
                >
                  Create List
                </Button>
                <Button
                  type="button"
                  className="w-fit py-0.5 lg:py-1 px-4 lg:px-6 text-base lg:text-xl font-semibold rounded hover:bg-rose-400 bg-blue-600 text-white cursor-pointer transition-all duration-300"
                >
                  <Link to={"/"}>Go ~ Movie</Link>
                </Button>
              </div>
            </form>

            {/* Display list of submitted values */}
            {submittedValues.length > 0 && (
              <div className="p-4">
                <h5 className="font-semibold">Submitted Lists:</h5>
                <ul className="list-disc pl-4 text-gray-800">
                  {submittedValues.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
