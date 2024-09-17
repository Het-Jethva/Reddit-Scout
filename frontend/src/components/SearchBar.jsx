import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { searchTermState, postsState } from "../state";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);
  const [, setPosts] = useRecoilState(postsState);

  const handleSearch = useCallback(async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the token from local storage
      const response = await fetch(
        `http://localhost:5000/api/reddit/search?query=${searchTerm}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [searchTerm, setPosts]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(); // Trigger search when Enter is pressed
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search Reddit posts"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown} // Add event listener for key presses
        className="input input-bordered input-primary w-full mb-3"
      />
      <button onClick={handleSearch} className="w-full btn btn-primary">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
