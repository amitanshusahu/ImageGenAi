import Image from "next/image"

export default function Navbar(){
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
        <button className="btn font-semibold">Login</button>
        <button className="grad btn font-semibold">Signup</button>
      </div>
    </nav>
  )
}