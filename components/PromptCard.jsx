"use client";

import { useState, useEffect ,useCallback } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BsStar, BsStarFill } from "react-icons/bs";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState("");
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState([]);
  const [loadingLike, setLoadingLike] = useState(false); // Track loading state
  const [showAllTags, setShowAllTags] = useState(false);
  const [showAllPrompts, setShowAllPrompts] = useState(false);
  const handleStarHover = () => {
    setIsHovered(true);
  };
  const handleLike = async (post) => {
    // e.preventDefault();
    if (loadingLike) return; // Prevent multiple requests while loading

    setLoadingLike(true);
    try {
      const response = await fetch(`/api/liked/${session?.user.id}/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ promptId: post._id }), // Send the prompt ID
      });

      if (response.ok) {
        // If the response indicates success, toggle the liked state
        if (liked.includes(post._id)) {
          // If post is already liked, remove it from the liked array
          setLiked((prevLiked) => prevLiked.filter((id) => id !== post._id));
        } else {
          // If post is not liked, add it to the liked array
          setLiked((prevLiked) => [...prevLiked, post._id]);
        }
        // Optionally, you can update the number of likes in the UI
        // and perform any other actions you want to take
      } else {
      }
    } catch (error) {
      // Handle network or other errors
    }finally {
      setLoadingLike(false);
    }
  };
  useEffect(() => {
    const checkLikedStatus = async () => {
      try {
        if (session) {
          // Check if you already have the liked data in your local state
          if (liked.length === 0) {
            const response = await fetch(`/api/liked/${session?.user.id}/post`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
  
            if (response.ok) {
              const likedPosts = await response.json();
              const likedPostIds = likedPosts.map((post) => post._id);
              setLiked(likedPostIds);
              console.log(liked);
            } else {
              // Handle error if needed
            }
          }
        }
      } catch (error) {
        // Handle network or other errors
      }
    };
  
    checkLikedStatus(); // Call the function immediately when the component mounts
  
    // You may want to add session as a dependency if it's used within the callback
    // useEffect(() => {
    //   checkLikedStatus();
    // }, [session]);
  
  }, []); 

  const handleStarLeave = () => {
    setIsHovered(false);
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt).then(() => {
      setTimeout(() => {
        setCopied("");
      }, 2000);
    });
  };
  const isPostLiked = liked.includes(post._id);
  const MAX_TAG_LENGTH = 2; // Define the maximum length for tags
  const MAX_PROMPT_LENGTH = 100; // Define the maximum length for prompts

  const toggleShowAllTags = () => {
    setShowAllTags(!showAllTags);
  };
  const toggleShowAllPrompts = () => {
    setShowAllPrompts(!showAllPrompts);
  };
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={50}
            height={50}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-gray-700 font-satoshi">
              {post.creator.userName}
            </h3>
            <p className="font-inter text-sm text-gray-400">
              {post.creator.email}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-600">
        {showAllPrompts ? post.prompt : post.prompt.slice(0, MAX_PROMPT_LENGTH)}
        {post.prompt.length > MAX_PROMPT_LENGTH && (
          <span className="cursor-pointer text-blue-500" onClick={toggleShowAllPrompts}>
            {showAllPrompts ? "Show less..." : "Show more..."}
          </span>
        )}
      </p>
      <div className="flex items-center justify-between">
        {" "}
        {/* Wrap tags and star button */}
        <p className="font-inter text-sm blue_gradient flex flex-col space-y-1">
          {(showAllTags ? post.tag : post.tag.slice(0, MAX_TAG_LENGTH)).map((tag) => (
            <div
              className="mr-2 cursor-pointer"
              key={tag}
              onClick={() => handleTagClick && handleTagClick(tag)}
            >
              #{tag}
            </div>
          ))}
          {post.tag.length > MAX_TAG_LENGTH && (
            <span className="cursor-pointer text-blue-500" onClick={toggleShowAllTags}>
              {showAllTags ? "Show less..." : "Show more..."}
            </span>
          )}
        </p>
        {session?.user ? (
          <div
            onClick={() => handleLike(post)}
            onMouseEnter={handleStarHover}
            onMouseLeave={handleStarLeave}
            className={`ml-5 cursor-pointer ${
              isHovered ? "text-gold-500" : "text-gray-500"
            }`}
          >
            {isPostLiked ? <BsStarFill /> : <BsStar />}{" "}
          </div>
        ) : (
          <></>
        )}
      </div>
      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="flex-center mt-5 border-t border-gray-150 pt-3 gap-8">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm text-red-700 cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
