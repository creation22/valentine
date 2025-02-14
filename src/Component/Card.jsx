import React, { useState } from "react";
import catgif from "./assets/cat.gif";
import catheart from "./assets/cat-heart.gif";

function Card() {
  const [display, setDisplay] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [yesButtonSize, setYesButtonSize] = useState(1); 

  return (
    <div className="bg-pink-400 h-screen w-screen flex flex-col justify-center items-center">
      <img src={catgif} alt="cat" className="h-96 w-auto" />
      <h1 className="text-5xl font-bold text-white mb-10 text-center">
        Will You Be My Valentine? ❤️
      </h1>

      {showButtons && (
        <div className="flex gap-5">
          <button
            className="bg-pink-800 text-white text-2xl p-5 rounded-lg italic hover:bg-red-400 transition-all"
            style={{ transform: `scale(${yesButtonSize})` }}
            onClick={() => {
              setDisplay(true);
              setShowButtons(false); // Hide buttons when "Yes" is clicked
            }}
          >
            Yes
          </button>

          <button
            className="bg-pink-800 text-white text-2xl p-5 rounded-lg italic hover:bg-gray-400 transition-all"
            onClick={() => setYesButtonSize((prevSize) => prevSize * 1.3)} // Increase size
          >
            No
          </button>
        </div>
      )}

      {display && (
        <div className="text-center mt-5">
          <img src={catheart} alt="cat-heart" className="h-96 w-auto mx-auto" />
          <p className="text-white text-3xl mt-5">I love you to the moon and back! 🌙❤️</p>
        </div>
      )}
    </div>
  );
}

export default Card;
