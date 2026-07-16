import { Component } from 'react';

export class FormToDo extends Component{
    state = {
        todo: '',
    }

    handleChange = ({ target })=>{
        this.setState = ({ target })=>{
            this.setState({
                [target.name]: target.value
            })
        }
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        this.props.addToDo(this.state.todo);

        this.setState({
            todo: '',
        })
    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <div>

                <label htmlFor="exampleInputEmail">
                    Create to-do
                </label>

                <input
                name = "todo"
                type = "text"
                id = "exampleInputEmail"
                onChange = {this.handleChange}
                value = {this.state.email}
                />

                </div>

                <button
                    type = "submit"
                >Add to-do</button>

            </form>
        )
    }










}