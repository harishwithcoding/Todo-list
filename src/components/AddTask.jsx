import React from "react";

const AddTask = ({ submitHandler, task, setTask }) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className=" w-[600px] flex justify-between border-1 border-white px-3 py-2 rounded"
      >
        <input
          className="text-2xl w-full outline-none"
          type="text"
          placeholder="Enter Task..."
          value={task}
          required
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button>
          <i className="ri-add-large-line bg-green-600 p-1 rounded text-2xl cursor-pointer"></i>
        </button>
      </form>
    </div>
  );
};

export default AddTask;
