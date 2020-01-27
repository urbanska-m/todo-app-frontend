import React from 'react';
import Sidebar from './Sidebar';
import AddNewTask from './AddNewTask';
import TaskArea from './TaskArea';
import uuidv4 from 'uuid/v4';

class App extends React.Component {

  state = {
    tasks: [
      { id: uuidv4(), description: "Buy groceries", completed: false },
      { id: uuidv4(), description: "Iron shirts", completed: false },
      { id: uuidv4(), description: "Tidy room", completed: false }
    ],

    completedTasks: [
      { id: uuidv4(), description: "Walk the dog", completed: true },
      { id: uuidv4(), description: "Water plants", completed: true }
    ]
  };

 
  addTask = (taskDescription) => {

    // Firstly define the task being added
    const taskToAdd = {
      id: uuidv4(),
      description: taskDescription,
      completed: false
    };
    // Get the current list of tasks from state
    const currentTasks = this.state.tasks;
    // Add the 'taskToAdd' to the array of tasks in state
    currentTasks.push(taskToAdd);
    // Update the state
    this.setState({
      tasks: currentTasks
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
  }




  render() {
    return (
      
        <div className="container-fluid">
          <div className="row">
            <Sidebar counterOutstanding={this.state.tasks.length} counterDone={this.state.completedTasks.length} />
            <div className="col-11 col-md-7">
              <div className="mainBody">
                <AddNewTask addTaskFunc={this.addTask} />
              <TaskArea
                jobs={this.state.tasks}
                doneJobs={this.state.completedTasks}
                deleteTaskFunc={this.deleteTask}
                completedTaskFunc={this.completedTask} />
              </div>
            </div>
          </div>
        </div>
      
    );
  }
}

export default App;
