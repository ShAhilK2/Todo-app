import { useState } from "react"

export function Todo(){

    const [tasks,setTasks] = useState(["Eat Breakfast","Take a Shower","Walk a Dog"]);
    const [newTask,setNewTask] =useState("");
    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
          setTasks(prevTasks => [...prevTasks, newTask]); // Use a function in setTasks to access the previous state
          setNewTask(""); // Clear the input field after adding the task
        }
      }

    function deleteTask(index){

        const updateTasks =tasks.filter((_,i)=> i !== index);
        setTasks(updateTasks);

    }

    function moveTaskUp(index) {
        if (index > 0) {
          const updatedTasks = [...tasks];
          const temp = updatedTasks[index];
          updatedTasks[index] = updatedTasks[index - 1];
          updatedTasks[index - 1] = temp;
          setTasks(updatedTasks);
        }
      }
      
      function moveTaskDown(index) {
        if (index < tasks.length - 1) {
          const updatedTasks = [...tasks];
          const temp = updatedTasks[index];
          updatedTasks[index] = updatedTasks[index + 1];
          updatedTasks[index + 1] = temp;
          setTasks(updatedTasks);
        }
      }
      
    return (
      
          <div className="to-do-list">
            <h1>To-Do-List</h1>
            <input
              type="text"
              placeholder="Enter a task"
              value={newTask}
              onChange={handleInputChange}
            />
            <button className="add-button" onClick={addTask}>
              Add
            </button>
        
          <ol>
            {tasks.map((task, index) => (
              <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={() => deleteTask(index)}>
                  Delete
                </button>
                <button className="move-button" onClick={() => moveTaskUp(index)}>
                  👆🏻
                </button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>
                  👇🏻
                </button>
              </li>
            ))}
          </ol>
        </div>
      );
    }