import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import User from "@models/user";
export const GET = async (request, { params }) => {
    try {
      await connectToDB();
  
      // Find the user by ID
      const user = await User.findById(params.id);
      if (!user) {
        return new Response("User not found", { status: 404 });
      }
  
      // Get the list of liked post IDs from the user's likes array
      const userLikedPrompts = user.likes;
      const likedPrompts = await Prompt.find({ _id: { $in: userLikedPrompts } }).populate('creator');
      // Find the liked posts in the 'Prompt' collection using Mongoose
      // Return the list of liked posts as a response
      return new Response(JSON.stringify(likedPrompts), { status: 200 });
    } catch (error) {
      console.error(error);
      return new Response("Failed to fetch liked posts", { status: 500 });
    }
  };