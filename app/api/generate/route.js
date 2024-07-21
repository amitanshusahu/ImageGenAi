import { getServerSession } from "next-auth/next";
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.fixedWindow(3, '3600 s'),
});

export const config = {
  runtime: 'edge',
};

export async function POST(req) {
  // Authorization
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(JSON.stringify({ message: 'Unauthorized', status: false }), { status: 401 });
  }

  const uid = session.user.id;
  const key = `history_${uid}`;

  // Rate limit
  const { success } = await ratelimit.limit(uid);
  if (!success) {
    return new Response(JSON.stringify({ message: 'Rate limit exceeded', status: false }), { status: 429 });
  }

  // Parse the request payload
  const { ratio, count, prompt } = await req.json();
  console.log(prompt, count, ratio);

  // Generate images based on the given ratio and count
  try {
    const generatedImages = handleGeneration(ratio, count);

    // Store the generated images in Vercel KV
    await kv.set(key, [...generatedImages, ...(await kv.get(key) || [])]);

    return NextResponse.json({ images: generatedImages, prompt: prompt, count, ratio, status: true });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Internal Server Error', status: false }), { status: 500 });
  }
}

function handleGeneration(ratio, count) {
  const landarr = ["/land/1.jpg", "/land/2.jpg", "/land/3.jpg", "/land/4.jpg", "/land/5.jpg", "/land/6.jpg", "/land/7.jpg", "/land/8.jpg"];
  const potarr = ["/pot/1.jpg", "/pot/2.jpg", "/pot/3.jpg", "/pot/4.jpg", "/pot/5.jpg"];

  let sourceArray;

  if (ratio === "1:1") {
    sourceArray = potarr;
  } else if (ratio === "16:9") {
    sourceArray = landarr;
  } else {
    // Handle other ratios if necessary
    return [];
  }

  const result = [];
  const sourceArrayCopy = [...sourceArray]; // Create a copy to avoid modifying the original array

  for (let i = 0; i < count; i++) {
    if (sourceArrayCopy.length === 0) break; // Stop if we run out of images to pick

    const randomIndex = Math.floor(Math.random() * sourceArrayCopy.length);
    const selectedImage = sourceArrayCopy.splice(randomIndex, 1)[0]; // Remove the selected image to avoid duplicates
    result.push(selectedImage);
  }

  return result;
}
