"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null); // State to hold error

  useEffect(() => {
    const fetchPost = async () => {
      let apiUrl = "/api/prompt"; // Default API URL
      if (searchText.trim() !== "") {
        // Check if the search term is not empty
        apiUrl = `/api/search/${searchText}`; // Use the search API URL
      }

      const response = await fetch(apiUrl);

      if (!response.ok) {
        // Handle non-OK responses (e.g., 404)
        setError("No results found."); // Set error message
        setPost([]); // Clear the post data
        return;
      }

      const data = await response.json();
      setPost(data);
      setError(null); // Clear any previous errors
    };

    fetchPost();
  }, [searchText]); // Trigger the effect when searchText changes

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleTagClick = (tag) => {
    setSearchText(tag);
  };

  return (
    <section className="feed">
    <form className="relative w-full flex-center">
      <input
        type="text"
        className="w-full rounded-full border-2 border-gray-300 p-2 peer"
        placeholder="What's on your mind?"
        value={searchText}
        onChange={handleSearchTextChange}
      />
    </form>
    {error ? (
      <p className="text-red-500">{error}</p> // Display error message if there's an error
    ) : post.length === 0 ? (
      <p className="text-gray-500">Be the first to post.</p> // Display a message when there are no posts
    ) : (
      <PromptCardList data={post} handleTagClick={handleTagClick} />
    )}
  </section>
  );
};

export default Feed;
