import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://game-it-three.vercel.app/tasks');
            setTasks(response.data);
            console.log(response);
        }
        fetchData();
    }, []);

    const addTask = async () => {
        await axios.post('https://game-it-three.vercel.app/tasks', { text: newTask });
        setNewTask('');
        window.location.reload();
    };

    return (
        <div>
            <h1>Task List Demo</h1>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="New Task"
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>{task.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
