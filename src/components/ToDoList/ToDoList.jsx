import React, { Component } from "react";
import todo from '../../todo.json';
import css from './ToDoList.module.css';
import { nanoid } from 'nanoid';
import { FormToDo } from '../FormToDo/FormToDo';
import { ToDo } from '../ToDo/ToDo';

export class ToDoList extends Component{
    state = {
        todoList: todo,
        isDelete: false,
        isCreare: false,
    }

    componentDidMount(){

    }

    addToDo = (value) =>{
        this.setState((prev)=>{
            console.log('Прошлое состояние:', prev.todoList);
            
                const todoList = [
                    ...prev.todoList,
                    { id: nanoid(), title: value, complete: false }
                ]
                console.log('Новое состояние:', todoList);

                return  {
                    todoList,
                }
        })
    }

    render(){
        return(
          <>
            <h2>My To Do List</h2>
            {
                this.state.isDelete && 
                <div class="alert alert-danger">
                    To-do delete successfully
                </div>
            }

            {
                this.state.isCreare && 
                <div class="alert alert-success" role="alert">
                    Create to-do successfully
                </div>
            }
                <FormToDo addToDo={this.addToDo}/>

{
    this.state.todoList && (<ul className={css.listGroup}>
        {this.state.todoList.map((map)=>(
            <ToDo/>
        ))}



    </ul>)
}
          </>  
        );
    }
}