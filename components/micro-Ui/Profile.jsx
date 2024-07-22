import Image from "next/image"
import { useSession } from "next-auth/react";


export default function Profile() {
  const { data: session } = useSession();
  return (
    <>
      <div className="flex gap-2 lg:hidden md:flex mob">
        <div className="img-container rounded-full overflow-hidden w-8 h-8 mb-6 ">
          <img
            src={session ? session?.user?.image : "/pot/3.jpg"}
            alt="icon"
            width={200}
            height={200}
            className="object-cover w-[inherit] h-[inherit]"
          />
        </div>
        <div>
          <h2 className="text-xs">{session ? session?.user?.name : "the great user"}</h2>
        </div>
      </div>
      <div className="p-[1px] rounded-md md:hidden sm:hidden lg:block lappro mob">
        <div className="bg-black glass flex rounded-lg flex-col p-3 gap-4">
          <div className="flex items-center justify-center">
            <div className="img-container rounded-full overflow-hidden w-10 h-10 mr-3">
              <img
                src={session ? session?.user?.image : "/pot/3.jpg"}
                alt="icon"
                width={200}
                height={200}
                className="object-cover w-[inherit] h-[inherit]"
              />
            </div>
            <div>
              <h2 className="name text-sm">{session ? session?.user?.name : "the great user"}</h2>
              <h2 className="text-xs text-gray-600">model 2024</h2>
            </div>
          </div>

          <button className="btn glass text-xs py-2"> Upgrade To Pro </button>
        </div>
      </div>
    </>
  )
}