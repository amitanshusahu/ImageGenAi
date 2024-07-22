import Image from "next/image"

export default function TopNav({toggle}) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <Image
          src="vercel.svg"
          alt="icon"
          width={90}
          height={50}
          className="invert m-3"
        />
        <div>
          <button className="btn glass" onClick={toggle}> --- </button>
        </div>
      </div>
    </div>
  )
}