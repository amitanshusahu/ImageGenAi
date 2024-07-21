import Image from "next/image"

export default function Profile() {
  return (
    <>
      <div className="flex items-center justify-center lg:hidden md:block">
        <div className="img-container rounded-full overflow-hidden w-12 h-12 mr-3 mb-3">
          <Image
            src="/pot/1.jpg"
            alt="icon"
            width={200}
            height={200}
            className="object-cover w-[inherit] h-[inherit]"
          />
        </div>
        <div>
          <h1>Name Last</h1>
          <h2 className="text-xs text-gray-600">model 2024</h2>
        </div>
      </div>
      <div className="p-[1px] rounded-md md:hidden lg:block">
        <div className="bg-black glass flex rounded-lg flex-col p-4 gap-4">
          <div className="flex items-center">
            <div className="img-container rounded-full overflow-hidden w-12 h-12 mr-4">
              <Image
                src="/pot/1.jpg"
                alt="icon"
                width={200}
                height={200}
                className="object-cover w-[inherit] h-[inherit]"
              />
            </div>
            <div>
              <h1>Name Last</h1>
              <h2 className="text-xs text-gray-600">model 2024</h2>
            </div>
          </div>

          <button className="btn glass text-sm py-3"> Upgrade To Pro </button>
        </div>
      </div>
    </>
  )
}