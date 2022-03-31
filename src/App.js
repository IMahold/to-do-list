import { Component } from "react";
import  {Button, InputGroup, FormControl, ListGroup}  from "react-bootstrap";
import {MdDoneOutline} from "react-icons/md"

import "./App.css";

 class App extends Component {

  state = {
    input: "",
    task:[],
    
   
  }

  handleInput = (e) =>{
    this.setState({input: e.target.value})
  }

  handleClick = () => {
    if(this.state.input === "") return
    const newTasks = [...this.state.task]
    newTasks.push({
      name: this.state.input,
      done: false
      
    })

    this.setState({
      input: "",
      task:[...newTasks]
    })

    // console.log("testing");

  }

  handleDelete = (id) => {
    const newTasks = [...this.state.task]
    newTasks.splice(id, 1)

    this.setState({
      task: [...newTasks]
    })
  }

  handleDone = (id) => {
    const newTasks = [...this.state.task]
    newTasks[id].done = true
    
  

    this.setState({
      task: [...newTasks]
  
     

    })

  }

   render(){
     console.log("this state task is",this.state.task);


    return (
      <div className="App">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Define your task</InputGroup.Text>
        <FormControl value={this.state.input} onChange={this.handleInput} placeholder="" aria-label="" aria-describedby="basic-addon1" />
        <Button onClick={this.handleClick} variant="outline-primary">Add a task</Button>
      </InputGroup>
  
      <ListGroup as="ol" numbered>

      
      {this.state.task.map((item,idx) => (
        <ListGroup.Item key={idx} as="li" className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
        <div className="fw-bold">{item.name}{item.done?  <MdDoneOutline  show={item.done}  className="icon" /> : null} </div>

        </div>
        <Button className="button" variant="danger" onClick={() => this.handleDelete(idx)}>Delete task</Button>
        <Button className="button" variant="warning" onClick={() => this.handleDone(idx)}>Set to done</Button>
       </ListGroup.Item>
        ))}
      </ListGroup>
    
      </div>
    );

   }
}

export default App;
