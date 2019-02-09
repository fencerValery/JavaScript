import React, { Component } from 'react';
import './ToDoList.css';
import Title from './title.js';
import InputTask from './inputTask.js';
import NonDoneTask from './folderForTask/nonDoneTask.js';
import DoneTask from './folderForTask/doneTask.js';
import Task from './classTask.js';
import ToDoListFooter from './toDoLiistFooter';


class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allTask: [],
            quantity: ''
        };
        this.createNewTask = this.createNewTask.bind(this);
        this.takeTasksFromServer();
    }


    takeTasksFromServer() {
        var copyArr = this.state.allTask;
        fetch("https://repetitora.net/api/JS/Tasks?widgetId=1967&count=30", {
            method: "GET",
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'accept': 'application/json'
            },
            node: 'cors'
        })
            .then(result => result.json())
            .then(tasksFromServer => {
                tasksFromServer.forEach((item) => {
                    var newTask = new Task(item.title, item.id);
                    newTask.isDone = item.done;
                    newTask.checkboxChange = item.done;
                    copyArr.unshift(newTask);
                });
                this.setState({
                    allTask: copyArr,
                    quantity: ''
                });
            });

    }

    createNewTask(e) {
        var copyArr = this.state.allTask;
        if (e.key === 'Enter') {
            var name = e.currentTarget.value;
            const data = new URLSearchParams();
            data.append('widgetId', 1967);
            data.append('title', name);
            e.currentTarget.value = '';
            fetch("https://repetitora.net/api/JS/Tasks", {
                method: "POST",
                body: data,
                headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'accept': 'application/json'
                },
                node: 'cors'
            })
                .then(result => result.json())
                .then(data => {
                    var newTask = new Task(data.task.title, data.task.id);
                    newTask.isDone = data.task.done;
                    newTask.checkboxChange = data.task.done;
                    copyArr.unshift(newTask);
                    this.setState({
                        allTask: copyArr,
                        quantity: ''
                    });
                });
        }
    }

    deleteTask = (task) => {

        const data = new URLSearchParams();
        data.append('widgetId', 1967);
        data.append('taskid', task.id);
        fetch("https://repetitora.net/api/JS/Tasks", {
            method: "DELETE",
            body: data,
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'accept': 'application/json'
            },
            node: 'cors'
        })
            .then(result => result.json())
            .then(data => {
                console.log(data);
                this.setState({
                    allTask: this.state.allTask.filter((t) => {
                        return t !== task
                    }),
                    quantity: ''
                });
            });
    }

    warning = (task) => {
        alert('Warning!!! Did not comply task')
    }

    changeBox = (task) => {

        if (task.isDone) {
            const data = new URLSearchParams();
            data.append('widgetId', 1967);
            data.append('title', task.title);
            data.append('taskid', task.id);
            data.append('done', task.isDone);
            fetch("https://repetitora.net/api/JS/Tasks", {
                method: "PUT",
                body: data,
                headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'accept': 'application/json'
                },
                node: 'cors'
            })
                .then(result => result.json())
                .then(data => {
                    console.log(data);
                    task.isDone = false;
                    this.setState({
                        allTask: this.state.allTask,
                        quantity: ''
                    });

                });

        } else {
            const data = new URLSearchParams();
            data.append('widgetId', 1967);
            data.append('title', task.title);
            data.append('taskid', task.id);
            data.append('done', task.isDone);
            fetch("https://repetitora.net/api/JS/Tasks", {
                method: "PUT",
                body: data,
                headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'accept': 'application/json'
                },
                node: 'cors'
            })
                .then(result => result.json())
                .then(data => {
                    console.log(data);
                    task.isDone = true;
                    this.setState({
                        allTask: this.state.allTask,
                        quantity: ''
                    });

                });

        }
    }

    handle = e => {
        if (e.currentTarget.value === 'All') {
            this.setState({
                quantity: this.state.allTask.length + ' All'
            });
        };
        if (e.currentTarget.value === 'Active') {
            let arr = this.state.allTask.filter((t) => {
                return !t.isDone;
            });
            this.setState({
                quantity: arr.length + ' Active'
            });
        };
        if (e.currentTarget.value === 'Complite') {
            let arr = this.state.allTask.filter((t) => {
                return t.isDone;
            });
            this.setState({
                quantity: arr.length + ' Complite'
            });
        };
        if (e.currentTarget.value === 'Clear') {
            var proms = [];
            var prom = null;
            let arr = this.state.allTask.filter((t) => {
                if (t.isDone) {

                    const data = new URLSearchParams();
                    data.append('widgetId', 1967);
                    data.append('taskid', t.id);
                    prom = fetch("https://repetitora.net/api/JS/Tasks", {
                        method: "DELETE",
                        body: data,
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                            'accept': 'application/json'
                        },
                        node: 'cors'
                    });       
                }
                proms.push(prom);  
                return !t.isDone;
            });

            Promise.all(proms)
            .then(value => {
                this.setState({
                    allTask: arr,
                    quantity: ''
                });
            });
            
        };


    }



    render() {
        return (
            <div className='main-div'>
                <Title />
                <div>
                    <ToDoListFooter quantityTasks={this.state.quantity}
                        showAllTask={this.handle.bind(this)}
                        showActiveTask={this.handle.bind(this)}
                        showCompliteTask={this.handle.bind(this)}
                        deleteCompliteTask={this.handle.bind(this)} />
                </div>

                <InputTask takeNameTask={this.createNewTask} />
                {
                    this.state.allTask.map((task, i) => {
                        if (task.isDone) {
                            return (
                                <div key={i + 'done' + task.id}>
                                    <DoneTask name={task.name} onclick={this.deleteTask.bind(this, task)} changeCheckbox={this.changeBox.bind(this, task)} />
                                </div>
                            )
                        } else {
                            return (
                                <div key={i + 'undone' + task.id}>
                                    <NonDoneTask name={task.name} onclick={this.warning.bind(this)} changeCheckbox={this.changeBox.bind(this, task)} />
                                </div>
                            )
                        }
                    })

                }


            </div>
        );
    }
}

export default ToDoList;