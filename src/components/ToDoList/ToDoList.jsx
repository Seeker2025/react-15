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
        isCreate: false,
    }

    componentDidMount(){
        const arr = localStorage.getItem('todo01');
        console.log(arr);
        
        if(arr){
            this.setState({
                todoList: JSON.parse(localStorage.getItem('todo01')),
            })
        }else{
            this.setState({
                todoList: todo,
            })
        }
    }

    addToDo = (value) =>{
        this.setState((prev)=>{
            console.log('Прошлое состояние:', prev.todoList);
            
                const todoList = [
                    ...prev.todoList,
                    { id: nanoid(), title: value, completed: false }
                ]
                console.log('Новое состояние:', todoList);

                return  {
                    todoList,
                }
        })
    }

    handleDelete =(id)=>{
        this.setState((prev)=>({
            todoList: prev.todoList.filter((todo)=>todo.id !== id)
        }))
    }

    componentDidUpdate(_, prevState){
        if(prevState.todoList.length > this.state.todoList.length){
            localStorage.setItem('todo01', JSON.stringify(this.state.todoList))
        this.setState({isDelete: true})
            setTimeout(()=>{
                this.setState({isDelete: false})
            }, 1500)
        }

        if(prevState.todoList.length < this.state.todoList.length){
            localStorage.setItem('todo01', JSON.stringify(this.state.todoList))
            this.setState({
                isCreate: true,
            })

            setTimeout(()=>{
                this.setState({isCreate: false})
            }, 1500)
        }
    }

    handleCheckCompleted =(id)=>{
        this.setState((prevState)=>{
            return{
                todoList: prevState.todoList.map((todo)=>{
                    console.log(todo);
                    return todo.id === id
                    ?{...todo, completed: !todo.completed}
                    :todo
                })
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
                    {console.log('delete')}
                </div>
            }

            {
                this.state.isCreate && 
                <div class="alert alert-success" role="alert">
                    Create to-do successfully
                    {console.log('successfully')}
                </div>
            }
                <FormToDo addToDo={this.addToDo}/>

{
    this.state.todoList && (<ul className={css.listGroup}>
        {this.state.todoList.map((todo)=>(
            <ToDo
            key={todo.id}
            todo={todo}
            handleCheckCompleted={this.handleCheckCompleted}
            handleDelete={this.handleDelete}
             />
        ))}



    </ul>)
}
          </>  
        );
    }
}