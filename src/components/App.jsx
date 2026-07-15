import { Component } from 'react';
import { Header } from './Header/Header';
import { Modal }  from './Modal/Modal';

export class App extends Component{

  state ={
    isShowModal: false,
  }

  showModal = () => {
    this.setState({ isShowModal: true});
  }
  closeModal = () => {
    this.setState({ isShowModal: false})
  }

  render(){
  return (
    <div>
      {this.state.isShowModal &&
        <Modal closeModal = {this.closeModal}>
              This is Modal
        </Modal>
      }

      <Header showModal={this.showModal}/>

     
    </div>
  );
}
};
