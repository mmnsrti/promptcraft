"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
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

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPost(data);
    };
    fetchPost();
  }, []);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  }

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
      <PromptCardList data={post} handleTagClick={()=>{}} />
    </section>
  );
};

export default Feed;
