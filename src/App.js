import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


class App extends React.Component { 
  
  //Todo list object array
  state = {
    
      todos: []
    }

      componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?').then(res => this.setState({todos:res.data}))
      }
      //Adding a new todo Item
      addTodo = (title) =>{
          
        const newTodo = {
          id: uuidv4(),
          title:title,
          completed:false
        }
        this.setState({todos: [...this.state.todos,newTodo ]})
      }
     
      //Mark Todo Item has completed toggle
      markComplete =(id) =>{

        this.setState({
          todos: this.state.todos.map(todo=> {
            if(todo.id === id){
              todo.completed = !todo.completed
            }
            return todo;
          })
        })
        }

        //Delete todo
        deleteTodo = (id) => {
          this.setState({
            todos: [...this.state.todos.filter(todo => todo.id!==id)]
          })
        }
        render(){
        //console.log(this.state.todos);
        return (

          //React Router for creating different pages
          <Router>
             <div className="App">
            <div className="container">
              <Header/>
              
              
              <Route exact path="/" render ={props => (
                <React.Fragment>
                   <AddTodo addTodo= {this.addTodo}/>
              <Todos todos = {this.state.todos} markComplete = {this.markComplete}
              deleteTodo = {this.deleteTodo}/>
                </React.Fragment>
              )}/>


              <Route path="/about" component = {About}/>
              
              </div>

             </div>
          </Router>
         
        );
        }
}

export default App;
