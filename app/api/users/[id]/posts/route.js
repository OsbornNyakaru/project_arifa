import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

/**
 * @description Fetch all prompts created by a user
 * @param {import('next/api').NextApiRequest} request
 * @param {import('next/api').NextApiRequest['query']} query
 * @returns {Promise<import('next/api').NextApiResponse>}
 * 
 * This is an API endpoint that fetches all prompts created 
 * by a specific user. It takes the user's ID as a parameter, 
 * connects to a database, and returns a JSON response with 
 * the prompts. If successful, it returns a 200 status code; 
 * if it fails, it returns a 500 error code with a 
 * corresponding error message.

    (Note: The JSDoc comment above the function is slightly 
    misleading, as it mentions query as a parameter, but the 
    function actually uses params.)
 */
export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const prompts = await Prompt.find({
            creator: params.id
        }).populate('creator');

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
}