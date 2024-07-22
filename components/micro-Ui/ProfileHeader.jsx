"use client"
import { useSession } from "next-auth/react";

export default function ProfileHeader() {
  const { data: session } = useSession();
  return (
    <div className="container my-6">
      <div className="flex justify-center items-center">
        <div className="flex my-6 flex-col justify-center items-center gap-6">
          <div className="img-container rounded-full overflow-hidden w-32 h-32">
            <img
              src={session ? session?.user?.image : "/pot/3.jpg"}
              alt="icon"
              className="object-cover w-[inherit] h-[inherit]"
            />
          </div>
          <h1 className="text-2xl">{session ? session?.user?.name : "Harry Potter"}</h1>
        </div>
      </div>
    </div>
  )
}