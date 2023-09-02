"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const Page = () => {
  const router=useRouter()
  const {data:session} =useSession()
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  const formattedTags = post.tag.replace(/\s+/g, '').split(',');
  const createPrompt = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);


      const response = await fetch("/api/prompt/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: formattedTags, // Send the array of formatted tags to the backend
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default Page;
