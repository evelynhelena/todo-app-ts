import { useState } from "react";
import {AddButton} from "../AddButton";
import "./styles.scss";

interface Tasks {
  id: number;
  taskTitle: string;
  indFinished: boolean;
}

export function Todo() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = () => {
    if (!!taskTitle) {
      const newTask = {
        id: Date.now(),
        taskTitle: taskTitle,
        indFinished: false,
      };
      setTasks((oldTask) => [...oldTask, newTask]);
      setTaskTitle("");

    } else {
      alert("Tarefa não preenchida");
    }
  };

  const handleFinishedTask = (idTask :number) => {
    setTasks(tasks.map((t) => t.id === idTask ? {...t,indFinished:!t.indFinished} : t))
  }

  const handleDeleteTask = (idTask:number) => {
    setTasks(tasks.filter((t) => t.id !== idTask))
  }

  return (
    <main className="container">
      <div className="inputs">
        <input
          type="text"
          placeholder="Tarefa"
          value={taskTitle}
          onChange={({ target }) => setTaskTitle(target.value)}
        />
        <AddButton title="ADD" handleAddTask={handleAddTask}/>
      </div>

      <div className="task-box">
        {tasks.map((task) => (
          <div className="task" key={task.id}>
            <input type="checkbox" onClick={() => handleFinishedTask(task.id)}/>
            <label className={task.indFinished ? "task-finishied" : ""}>{task.taskTitle}</label>
            <span onClick={() => handleDeleteTask(task.id)}>X</span>
          </div>
        ))}
      </div>
    </main>
  );
}
