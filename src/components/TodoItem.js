import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle = () =>{
       return{
           backgroundColor: '#f4f4f4',
           padding: '10px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.todo.completed? 'line-through':'none'
       }
    }

    
    
    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange = {this.props.markComplete.bind(this,id)} /> {' '}
                    {title}
                    <button onClick = {this.props.deleteTodo.bind(this,id)} style = {btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding:'5px 9px',
    borderRadius: '50%',
    cursor:'pointer',
    float:'right'
}

export default TodoItem
