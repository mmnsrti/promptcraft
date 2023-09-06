import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import User from "@models/user";

export const POST = async (request, { params }) => {
  const { promptId } = await request.json();
  try {
    await connectToDB();

    // Assuming promptId is sent in the request body

    const user = await User.findById(params.id);
    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    // Check if the user has already liked this prompt
    if (!user.likes) {
      user.likes = []; // Initialize likes array if it doesn't exist
    }
    if (!promptId) {
      return new Response("Prompt not found", { status: 404 })
    }
    const indexOfLikedPrompt = user.likes.indexOf(promptId);

    if (indexOfLikedPrompt !== -1) {
      // The promptId is in the user's likes, so remove it
      user.likes.splice(indexOfLikedPrompt, 1);
    } else {
      // Add the promptId to the user's likes
      user.likes.push(promptId);
    }

    // Save the updated user object to update the likes
    await user.save();
    console.log(promptId);
    console.log(user.likes);
    console.log(user);

    // Return the updated user object as a response
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to like/unlike the prompt", { status: 500 });
  }
};
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the user by ID
    const user = await User.findById(params.id);
    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    // Get the list of liked post IDs from the user's likes array
    const likedPostIds = user.likes || [];

    // Find the liked posts in the 'Prompt' collection using Mongoose
    const likedPosts = await Prompt.find({ _id: { $in: likedPostIds } });

    // Return the list of liked posts as a response
    return new Response(JSON.stringify(likedPosts), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to fetch liked posts", { status: 500 });
  }
};