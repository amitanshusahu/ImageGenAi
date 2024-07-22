import Image from "next/image";

export default function GridView({ imgarr, val }) {
  let gridCols;

  if (val < 10) {
    gridCols = 'grid-cols-2';
  } else if (val < 20) {
    gridCols = 'grid-cols-3';
  } else if (val < 30) {
    gridCols = 'grid-cols-4';
  } else if (val < 40) {
    gridCols = 'grid-cols-5';
  } else if (val < 50) {
    gridCols = 'grid-cols-6';
  } else if (val < 60) {
    gridCols = 'grid-cols-7';
  } else if (val < 70) {
    gridCols = 'grid-cols-8';
  } else if (val < 80) {
    gridCols = 'grid-cols-9';
  } else if (val < 90) {
    gridCols = 'grid-cols-10';
  }  else {
    gridCols = 'grid-cols-11';
  }

  return (
    <div className={`grid gap-3 ${gridCols}`}>
      {imgarr.map((imgSrc, index) => (
        <div key={index} className="grad p-[1px] rounded-md pop">
          <div className={`overflow-hidden rounded-md aspect-square`}>
            <Image
              key={index}
              src={imgSrc}
              alt={`Image ${index}`}
              width={200} height={200}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}