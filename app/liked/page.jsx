"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import PromptCard from "@components/PromptCard";
const Page = () => {
  const { data: session } = useSession();
  const [likedPrompts, setLikedPrompts] = useState([]);

  useEffect(() => {
    // Fetch liked prompts when the session is available
    if (session) {
      fetchLikedPrompts();
    }
  }, [session]);

  const fetchLikedPrompts = async () => {
    try {
      const response = await fetch(`/api/liked/${session?.user.id}/prompts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const likedPromptsData = await response.json();
        setLikedPrompts(likedPromptsData);
      } else {
        // Handle error if needed
        console.error("Error fetching liked prompts");
      }
    } catch (error) {
      // Handle network or other errors
      console.log("Error fetching liked prompts")
    }
  };

  return (
    <div>
    <h1>Liked Prompts</h1>
    <div className="mt-16 prompt_layout">
      {likedPrompts.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          // Pass any other props or event handlers if needed
        />
      ))}
    </div>
  </div>
  );
};

export default Page;
