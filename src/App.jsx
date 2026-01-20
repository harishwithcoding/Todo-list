import React from "react";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="bg-black h-screen w-screen text-white relative overflow-hidden">
      <div className="absolute flex justify-center mt-30 w-full h-screen ">
        <TodoList />
      </div>
    </div>
  );
};

export default App;
