import GenerateIcon from "@/assets/GenerateIcon"
import RefreshIcon from "@/assets/RefreshIcon"
import GenImage from "./GenImage"


export default function GenImageBox() {
  return (
    <div className="m-6 flex flex-col gap-5">

      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="grad p-1 rounded-md"><GenerateIcon color="white" width="24" height="24" /></div>
            <h3 className="text-sm font-semibold">Filter, StableDiffion xl</h3>
          </div>
          <div>
            <RefreshIcon color="gray" />
          </div>
        </div>
        <p className="text-sm text-gray-600">
          a promt to make a amazion image from the wonderland of
          amazing land , geen forest of witches and over the ice of madaghaskar and victry of queen eliziabeth and napolean bonapad
        </p>
      </div>
      <GenImage srcarr={["/land/5.jpg", "/land/6.jpg", "/land/5.jpg", "/land/6.jpg", "/land/5.jpg", "/land/6.jpg"]} />
    </div>
  )
}