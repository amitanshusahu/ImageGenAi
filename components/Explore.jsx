import ExploreHeader from "./micro-Ui/ExploreHeader"
import ImageGrid from "./micro-Ui/ImageGrid"

export default function Explore() {
  const imageUrls = [
    '/pot/1.jpg',
    '/pot/2.jpg',
    '/pot/3.jpg',
    '/pot/4.jpg',
    '/pot/5.jpg',
    '/pot/7.jpg',
    '/pot/8.jpg',
    '/pot/9.jpg',
    '/pot/10.jpg',
    '/pot/6.jpg',
    '/pot/11.jpg',
    '/land/2.jpg',
    '/land/3.jpg',
    '/land/4.jpg',
    '/land/5.jpg',
    '/land/6.jpg',
    '/land/7.jpg',
    '/land/8.jpg',
    '/land/9.jpg',
    '/land/10.jpg',
  ];

  return (
    <div className="border-2 rounded-md overflow-hidden">
      <ExploreHeader />
      <div className="w-full h-full overflow-x-hidden overflow-y-auto pb-24">
        <ImageGrid images={imageUrls} />
      </div>
    </div>
  )
}