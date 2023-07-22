import Task from './Task';
import 'bulma/css/bulma.min.css';


export default function TaskGrid({ plantArray }) {
    let rows = [];
    let tasks = [];
    if (plantArray) {
        plantArray.forEach((plant) => {
            // filter for pending tasks and add them to the tasks array
            const pendingTasks = plant.plantTasks.filter(task => task.status === 'pending');
            pendingTasks.forEach(task => tasks.push({ plant, task }));
        });

        // Sort tasks by date (ascending)
        tasks.sort((a, b) => new Date(a.task.date) - new Date(b.task.date));

        // Limit to top 10 tasks
        tasks = tasks.slice(0, 15);

        tasks.forEach(({ plant, task }) => {
            rows.push(
                <Task
                    key={task._id}
                    plant={plant}
                    taskArray={[task]}
                />
            );
        });
    }
    return (
        <div className="scrollable-content" style={{ maxHeight: '150px', overflow: 'auto', whiteSpace: 'nowrap', textOverflow: 'ellipsis', }}>
            {rows}
        </div>
    );
}
