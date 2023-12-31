"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!session) {
      router.push('/');
      return;
    }

    const fetchPost = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/post`);
      const data = await response.json();
      setPosts(data);
    };

    if (session?.user.id) {
      fetchPost();
      console.log(session?.user.id)
    }
  }, [session?.user.id, router, session]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this prompt");
    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });
        const filteredPost = posts.filter((p) => p._id !== post._id);
        setPosts(filteredPost);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name={session?.user.name}
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
