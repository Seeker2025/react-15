import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component{
    state ={

    }

    componentDidMount(){
        window.addEventListener('keydown', this.handlePressEsc)
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.handlePressEsc)
    }

    handlePressEsc =(e)=>{
        if(e.code === 'Escape') this.props.closeModal();
    }

    render(){
        const{ closeModal, children } = this.props;

        return(

        <div className={css.modal}>
            <div>
                <h4>Modal</h4>

                <button
                    type = "button"
                    className = {css.btnClose}
                    arial-label = "close"
                    onClick = {closeModal}
                >  
                &#10006;  
                </button>
                <div>{children}</div>

            </div>
        </div>
        )
    }
}