"use client"

import Image from "next/image"
import LoginDialog from "./micro-Ui/LoginDialog"
import SignupDialog from "./micro-Ui/SignupDialog"
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Navbar(){

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/home');
    }
  }, [session, router]);

  return (
    <nav className="flex items-center justify-between p-3 grad-black mt-12 rounded-full">
      <div>
        <Image
          src="vercel.svg"
          alt="Picture of the author"
          width={70}
          height={50}
          className="invert mx-5"
        />
        </div>
      <div className="flex gap-4">
        <a className="text-white" href=""> Home</a>
        <a href=""> About</a>
        <a href=""> Explore</a>
        <a href=""> Pricing</a>
      </div>
      <div className="flex gap-4 justify-center items-center">
        {!session ? <LoginDialog /> : null}
        {!session ? <SignupDialog /> : null}
      </div>
    </nav>
  )
}