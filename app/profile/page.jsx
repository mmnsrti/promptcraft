"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const MyProfile = () => {
  const router= useRouter()
  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`)

  };
  const handleDelete = async(post) => {
    const hasConfirmed = confirm('Are you sure you want to delete this prompt')
    if (hasConfirmed) {
      try {
        await fetch (`/api/prompt/${post._id.toString()}`,{
          method: 'DELETE'

        })
      const filteredPost=posts.filter((p)=>p._id!== post._id)
        setPosts(filteredPost)
      } catch (error) {
        console.log(error)
        
      }
    }
  };
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/post`);
      const data = await response.json();
      setPosts(data);
    };
    if (session?.user.id) {
        fetchPost()
    }
    ;
  }, []);
  return (
    <Profile
      name="My"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
