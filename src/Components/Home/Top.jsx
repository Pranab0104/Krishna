import React from "react";
import Video from "./Video";

const Top = () => {
  return (
    <div className="font-[Font1] pt-5 text-center">
      <div className="font-[Font1] flex justify-center items-center text-[9.5vw] uppercase leading-[9vw]">
        "Embark on the
      </div>

      <div className="font-[Font1] flex justify-center items-center text-[9.5vw] overflow-hidden uppercase leading-[9vw]">
        divine
        <div
          className="h-[10vw] w-[20vw] rounded-full border-2 border-cyan-800 overflow-hidden mx-2"
          style={{
            WebkitClipPath: "ellipse(60% 60% at 50% 50%)",
            clipPath: "ellipse(60% 60% at 50% 50%)",
          }}
        >
          <Video />
        </div>
        journey
      </div>

      <div className="font-[Font1] flex justify-center items-center text-[9.5vw] uppercase leading-[9vw]">
        of Lord Krishna"
      </div>
    </div>
  );
};

export default Top;
