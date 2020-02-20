import React from 'react';
import Sidebar from './Sidebar';
import AddNewTask from './AddNewTask';
import TaskArea from './TaskArea';
import uuidv4 from 'uuid/v4';

class App extends React.Component {

  state = {
    tasks: [],
    id: uuidv4(),
    description: "",
    completed: false,
    editItem: false,

    completedTasks: [],
  };

  handleChange = (e) => {
    this.setState({
      description: e.target.value
    });
  };


  handleSubmit = (e) => {
    e.preventDefault();

    const taskToAdd = {
      id: uuidv4(),
      description: this.state.description,
      completed: false,
      editItem: false
    }

    const currentTasks = [...this.state.tasks, taskToAdd];

    this.setState({
      tasks: currentTasks,
      description: "",
      editItem: false
    });

  };


  editTask = (taskID) => {
    const tasks = this.state.tasks;
    const filteredTasks = tasks.filter(item => item.id !== taskID);

    const selectedItem = tasks.find(item => item.id === taskID)

    console.log(selectedItem);

    this.setState({
      tasks: filteredTasks,
      description: selectedItem.description,
      id: selectedItem.id,
      editItem: true
    });
  }


  deleteTask = (taskID) => {
    const tasks = this.state.tasks;
    const updatedTasks = tasks.filter(item => item.id !== taskID);
    this.setState({
      tasks: updatedTasks
    });
    const completedTasks = this.state.completedTasks;
    const updatedCompleted = completedTasks.filter(item => item.id !== taskID);
    this.setState({
      completedTasks: updatedCompleted
    });
  }


  completedTask = (taskID) => {
    // First find task that needs to be updated
    const tasksMarkedDone = this.state.tasks; // Array of tasks
    for (let i = 0; i < tasksMarkedDone.length; i++) {
      const task = tasksMarkedDone[i];

      // Update a property on the identified task
      if (task.id === taskID) {
        task.completed = true;
        break;
      }
    }
    // Update state to reflect changes made to the task
    this.setState({
      tasks: tasksMarkedDone
    });
    // Get the list of incomplete tasks from state
    const incompleteTasks = this.state.tasks;
    let completedTask;
    for (let i = 0; i < incompleteTasks.length; i++) {
      // Identify the item that has been marked as complete
      if (incompleteTasks[i].id === taskID) {
        // Remove it from the array of incomplete tasks
        completedTask = incompleteTasks[i];
        incompleteTasks.splice(i, 1);
        break;
      }
    }
    // Add it into the array of COMPLETE tasks
    const doneTaskList = this.state.completedTasks;
    doneTaskList.push(completedTask);
    // Update state 
    this.setState({
      tasks: incompleteTasks,
      completedTasks: doneTaskList
    });
  }

  markIncomplete = (taskID) => {
    const taskUnticked = this.state.completedTasks;
    for (let i = 0; i < taskUnticked.length; i++) {
      const task = taskUnticked[i];

      if (task.id === taskID) {
        task.completed = false;
        break;
      }
    }
    this.setState({
      completedTasks: taskUnticked
    });

    const doneTasks = this.state.completedTasks;
    let untickedTask;
    for (let i = 0; i < doneTasks.length; i++) {
      if (doneTasks[i].id === taskID) {
        untickedTask = doneTasks[i];
        doneTasks.splice(i, 1);
        break;
      }
    }
    const outstandingList = this.state.tasks;
    outstandingList.push(untickedTask);

    this.setState({
      completedTasks: doneTasks,
      tasks: outstandingList
    });
  }



  render() {
    return (

      <div className="container-fluid">
        <div className="row">
          <Sidebar counterOutstanding={this.state.tasks.length} counterDone={this.state.completedTasks.length} />
          <div className="col-11 col-md-7">
            <div className="mainBody">
              <AddNewTask
                item={this.state.description}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem} />
              <TaskArea
                jobs={this.state.tasks}
                doneJobs={this.state.completedTasks}
                deleteTaskFunc={this.deleteTask}
                completedTaskFunc={this.completedTask}
                editTaskFunc={this.editTask}
                markIncompleteFunc={this.markIncomplete}
              />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
