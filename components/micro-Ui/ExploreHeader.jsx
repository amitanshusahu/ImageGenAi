import TrendIcon from "@/assets/TrendIcon"

export default function ExploreHeader() {
  return (
    <div className="m-6 flex gap-3">
      <button className="flex gap-2 btn glass">
        <TrendIcon className="w-4"/>
        <h3 className="text-sm">Trending</h3>
      </button>
      <button className="flex gap-2 btn glass">
        <TrendIcon className="w-4"/>
        <h3 className="text-sm">Trending</h3>
      </button>
      <button className="flex gap-2 btn glass">
        <TrendIcon className="w-4"/>
        <h3 className="text-sm">Trending</h3>
      </button>
      <button className="flex gap-2 btn glass">
        <TrendIcon className="w-4"/>
        <h3 className="text-sm">Trending</h3>
      </button>
      <button className="flex gap-2 btn glass">
        <TrendIcon className="w-4"/>
        <h3 className="text-sm">Trending</h3>
      </button>
    </div>
  )
}