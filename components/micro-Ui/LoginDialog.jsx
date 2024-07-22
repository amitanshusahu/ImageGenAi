import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { signIn } from "next-auth/react"

export default function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="btn font-semibold mob600">Login</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:min-w-[700px] lg:h-[600px]">

        <div className="grid grid-cols-2">
          <div className="p-[2px] rounded-md grad">
            <div className="overflow-hidden rounded-md w-full h-full">
              <Image
                src="/pot/5.jpg"
                alt="image"
                width={1000}
                height={1000}
                className="object-cover w-full h-full grid-cols-3"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-10">
            <h1 className="text-2xl font-bold">Welcome Back! 😘</h1>
            <button className="btn grad py-2 font-semibold flex justify-center items-center gap-2" onClick={async () => {
              await signIn("google")
            }}>
              <span className="text-green-200 font-bold text-3xl"> G </span>
                Google Sign in
            </button>
          </div>
        </div>

      </DialogContent>
    </Dialog>
  )
}