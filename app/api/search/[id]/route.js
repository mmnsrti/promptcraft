import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const searchText = params.id;
    const regex = new RegExp(searchText, "i");

    // Combine the queries into a single request
    const results = await Prompt.find({
      $or: [
        { tag: regex },
        { prompt: regex }
      ]
    }).populate("creator");

    if (results.length === 0) {
      return new Response(
        JSON.stringify({
          message: "No prompts or users found matching the search term.",
        }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts", { status: 500 });
  }
};
