import { Play , Info } from "lucide-react";
const VideoTitle = ( {title  , overview} ) => {
  return (
    <div className=" w-screen aspect-video pt-44 px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
        <div className="flex">
            <button className="bg-white mx-2 text-black p-4 px-12 rounded-lg flex text-xl hover:bg-opacity-80"> <Play className="mt-1 w-10" /> Play </button>
            <button className="bg-gray-500 mx-2 text-white p-4 px-12 rounded-lg flex text-xl bg-opacity-50 "><Info className="mt-1 w-6" />More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;