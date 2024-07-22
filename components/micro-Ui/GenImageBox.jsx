import GenerateIcon from "@/assets/GenerateIcon"
import RefreshIcon from "@/assets/RefreshIcon"
import GenImage from "./GenImage"
import { useEffect } from "react"


export default function GenImageBox({res}) {
  
  useEffect(() => {
    console.log(res);
  }, [])

  return (
    res ?
    <div className="m-6 flex flex-col gap-5">

      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="grad p-1 rounded-md"><GenerateIcon color="white" width="24" height="24" /></div>
            <h3 className="text-sm font-semibold">Filter, StableDiffion, {`${res.count} X ${res.ratio}`}</h3>
          </div>
          <div>
            <RefreshIcon color="gray" />
          </div>
        </div>
        <p className="text-sm text-gray-600">
          {res.prompt}
        </p>
      </div>
      <GenImage srcarr={res?.images} ratio={res.ratio} />
    </div>
    :null 
  )
}