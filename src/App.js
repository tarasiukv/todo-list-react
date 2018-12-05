import React, { Component } from 'react';
import './App.css';

import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todoItems: []
        };

        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.changeCompletedStatus = this.changeCompletedStatus.bind(this);
    }
    handleSubmitForm (itemData) {
        const todoList = [...this.state.todoItems,  {...itemData, _id: new Date().getTime()}];
        this.setState({
            todoItems: todoList
        });
        localStorage.todoList =  JSON.stringify(todoList);
    }

    deleteItem (itemData) {
        const todoList = this.state.todoItems.filter(
            item => (item._id !== itemData._id)
        );
        this.setState({
            todoItems: todoList
        });
        localStorage.todoList = JSON.stringify(todoList);
    }

    changeCompletedStatus( itemId ) {
        const newList = this.state.todoItems.map(
            item => {
                if(item._id === itemId) {
                    return { ...item, isCompleted: !item.isCompleted}
                }
                return item;
            }
        );

        this.setState({
            todoItems: newList
        });
        localStorage.todoList =  JSON.stringify(newList);
    }

    componentDidMount () {
        let localList = localStorage.getItem('todoList');
        if(localList) {
            const todoList = JSON.parse(localList);
            this.setState({
                todoItems: todoList
            });
        }
    }



  render() {
        const { todoItems } = this.state;
    return (
       <div className="ui container">
           <div className="ui centered grid">
               <div className="main wide column">
                   <h1 className="ui header center aligned" style={{marginTop: '1em'}}>Todo List</h1>
           <TodoForm
               submit={this.handleSubmitForm}
           />
                   <div className="ui inverted segment">
                   <h4 className="ui horizontal inverted divider">
                       List of Items
                   </h4>
                   </div>
           <TodoList
                items={todoItems}
                deleteItem={this.deleteItem}
                changeCompletedStatus={this.changeCompletedStatus}
           />
           </div>
           </div>
      </div>
    );
  }
}

export default App;
