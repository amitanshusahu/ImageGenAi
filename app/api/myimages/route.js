import {NextResponse} from 'next/server'
import { getServerSession } from "next-auth/next";
import { kv } from '@vercel/kv';
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  // Authorization
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(JSON.stringify({ message: 'Unauthorized', status: false }), { status: 401 });
  }

  const uid = session.user.id;
  const key = `history_${uid}`;

  const images = await kv.get(key);

  return NextResponse.json({images: images, status: true})
}