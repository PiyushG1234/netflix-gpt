import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import {BACKGROUND_IMAGE} from "../utils/constants";

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img className=""
          src={BACKGROUND_IMAGE}
          alt="logo"
        />
      </div>
    <div className="">
       
       <GptSearchBar />
       <GptMovieSuggestions />
    </div>
  </>
  )
}

export default GptSearch; 