export default function SingleTask({ task, onComplete }) {
    const handleTaskCompletion = () => {
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/tasks/${task._id}`, { status: 'completed' })
            .then(response => {
                if (response.status === 200) {
                    onComplete(task._id);
                }
            })
            .catch(error => {
                console.error('Error marking task as complete: ', error);
            });
    };

    return (
        <div>
            <h4>{task.taskName}</h4>
            <p>Due Date: {task.date}</p>
            <input type="checkbox" onClick={handleTaskCompletion} />
        </div>
    );
}
