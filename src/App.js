import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css'
import Table from './Table';
import Form from './Form';
import Welcome from './Welcome';
import Counter from "./Counter";

class App extends Component {

    state = {
        tasks: [
            {
                task: 'todo',
                id: 1,
                date: ''
            }
        ]

    };


    removeTask = index => {
        const {tasks} = this.state;

        this.setState({
            tasks: tasks.filter((task, i) => {
                return i !== index;
            })
        });
    };

    updateTask() {

            console.log('edited');
    };



    handleSubmit = newTask => {
        console.log(newTask);

        this.setState({tasks: [...this.state.tasks, newTask]});
    };

    render() {
        const {tasks} = this.state;
        return (

            <div className="container">
                <Welcome />
                <Counter tasksCounter={tasks.length}/>
                <Table taskData={tasks} removeTask={this.removeTask} updateTask={this.updateTask}
                />
                <Form handleSubmit={this.handleSubmit}/>


            </div>

        );

    }
}

export default App;
