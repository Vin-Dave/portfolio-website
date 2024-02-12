import React from "react";

import image from "../../assets/no-projects.png";
import Button from "../Button/Button";

export const NoneSelectedProject = ({ onclick }) => {
  return (
    <div className="mt-2 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={image}
        alt="logo-project"
      ></img>
      <h2 className="text-2xl font-bold text-stone-950 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-500 mb-5">Select project or create a new one</p>
      <p className="">
        <Button onClick={onclick}> Create new Project</Button>
      </p>
    </div>
  );
};
