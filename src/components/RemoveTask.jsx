import React from "react";

const RemoveTask = ({ removeTask, idx, elem }) => {
  return (
    <div
      key={idx}
      className="flex justify-between w-[600px] gap-10 px-4 py-2 mt-5 bg-gray-800 rounded flex items-center "
    >
      <li className="list-none text-xl w-[80%]">{elem}</li>
      <i
        onClick={() => removeTask(idx)}
        className="ri-close-fill text-2xl bg-red-700 px-1 rounded cursor-pointer h-[30px] "
      ></i>
    </div>
  );
};

export default RemoveTask;
