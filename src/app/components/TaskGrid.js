import Task from './Task';
import 'bulma/css/bulma.min.css';


export default function TaskGrid({ plantArray }) {
    let rows = [];
    if (plantArray) {
        plantArray.forEach((plant) => {
            rows.push(
                <Task
                    key={plant.plantTasks[0]._id}
                    plant={plant}
                    taskArray={plant.plantTasks}
                />
            );
        });
    }
    return (
        <div className="scrollable-content" style={{ maxHeight: '250px', overflow: 'auto', whiteSpace: 'nowrap', textOverflow: 'ellipsis', }}>
            {rows}
        </div >

    );
}