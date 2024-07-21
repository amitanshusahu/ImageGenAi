export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center lg:mt-32 md:mt-24">
      <h1 className="text-8xl text-center">GENERATE YOUR
        <span className="grad-text"> IDEAS </span>
        INTO STUNNING <span className="grad-text">VISUALS</span></h1>
      <div className="flex gap-4 m-12"> 
        <button className="btn-lg grad text-xl font-bold">Get Started</button>
        <div className="grad rounded-2xl">
          <button className="btn-lg bg-black m-[1px] text-xl font-bold">Watch Demo</button>
        </div>
      </div>
    </div>
  )
}