import Image from "next/image"

export default function GenImage({ srcarr = ["/land/5.jpg"] }) {
  return (
    <>
      <div className={`grid grid-cols-${srcarr.length <= 4 ? srcarr.length : 4} gap-3`}>
        {srcarr.map((src, i) => (
          <div key={i} className="grad p-[1px] rounded-md">
            <div className="overflow-hidden rounded-md aspect-square">
              <Image
                src={src}
                alt={`Image ${i + 1}`}
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}