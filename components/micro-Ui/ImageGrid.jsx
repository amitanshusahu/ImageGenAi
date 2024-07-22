import Image from "next/image"

export default function ImageGrid({ images }) {
  return (
    <div className="container mx-auto p-6">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div className="grad p-[2px] rounded-md pop">
            <div key={index} className="rounded-md w-full h-80 flex items-center justify-center overflow-hidden">
            <Image
              src={image}
              alt={`Image ${index}`}
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
            />
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}