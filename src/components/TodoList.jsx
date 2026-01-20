import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import RemoveTask from "./RemoveTask";
import RealTime from "./RealTime";

const TodoList = () => {
  const [task, setTask] = useState("");

  const [allTasks, setAllTasks] = useState([]);

  const [time, setTime] = useState(new Date());

  const hour = time.getHours();

  let greeting = `Good Night`;
  if (hour >= 5 && hour < 12) {
    greeting = `Good Morning`;
  } else if (hour >= 12 && hour < 17) {
    greeting = `Good Afternoon`;
  } else if (hour >= 17 && hour < 21) {
    greeting = `Good Evening`;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const oldUser = [...allTasks];
    oldUser.push(task);

    setAllTasks(oldUser);
    setTask("");
  };

  const removeTask = (idx) => {
    const remove = [...allTasks];
    remove.splice(idx, 1);

    setAllTasks(remove);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <RealTime time={time} greeting={greeting} />
      <AddTask submitHandler={submitHandler} task={task} setTask={setTask} />
      <div className="mt-10">
        {allTasks.map((elem, idx) => {
          return <RemoveTask removeTask={removeTask} idx={idx} elem={elem} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
