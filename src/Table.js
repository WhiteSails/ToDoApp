import React, {Component} from 'react';


const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th scope="col">Order</th>
            <th scope="col">Date</th>
            <th scope="col">Task</th>
            <th scope='col'>Update</th>
            <th scope='col'>Delete</th>
        </tr>
        </thead>
    );
};

const TableBody = props => {
    const rows = props.taskData.map((row, index) => {
        return (

            <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{row.date}</td>
                <td>{row.task}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => props.updateTask(index)}>Update</button>
                </td>
                <td>
                    <button className='btn btn-danger' onClick={() => {
                        if (window.confirm("Are you sure?")) props.removeTask(index)
                    }}>Done
                    </button>
                </td>
            </tr>

        );

    });

    return <tbody>{rows}</tbody>;

};


class Table extends Component {
    render() {
        const {taskData, removeTask, updateTask} = this.props;

        return (
            <table className='table table-striped'>
                <TableHeader/>
                <TableBody taskData={taskData}
                           removeTask={removeTask}
                           updateTask={updateTask}
                />
            </table>
        );
    }
}

export default Table;

