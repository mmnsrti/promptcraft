"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((post) => (
        <PromptCard key={post.id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};
const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [post, setPost] = useState([])
  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };
  useEffect(() => {
   const fetchPost = async()=>{
    const response =await fetch('/api/prompt')
    const data = await response.json()
    setPost(data)
   }
   fetchPost()
  }, []);
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          className="w-full rounded-full border-2 border-gray-300 p-2 peer"
          placeholder="What's on your mind?"
          value={searchText}
          onChange={handleSearchChange}
        />
      </form>
      <PromptCardList data={post} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
