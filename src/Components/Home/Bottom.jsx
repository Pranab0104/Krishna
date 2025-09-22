import React from "react";
import { Link } from "react-router-dom";

const Bottom = () => {
  return (
    <div className="font-[Font2] flex items-center justify-center gap-3">
      <div className="border-4 h-28 flex items-center px-14 border-rose-800 rounded-full uppercase hover:border-amber-100 hover:bg-[#104344] hover:text-amber-100">
        <Link className="text-[6vw] mt-2" to="/Chapter1">
          Chapter1
        </Link>
      </div>
      <div className="border-4 h-28 flex items-center px-14 border-rose-800 rounded-full uppercase hover:border-amber-100 hover:bg-[#104344] hover:text-amber-100">
        <Link className="text-[6vw] mt-2" to="/Chapter2">
          Chapter2
        </Link>
      </div>
    </div>
  );
};

export default Bottom;
