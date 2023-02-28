import React from 'react';
import { toast } from 'react-toastify';
import ShowTodo from './showTodo';

class myexample extends React.Component {
  state = {
    Todo: '',
    arrTodo: [],
    statusTyping: false,
    editTodo: {},
    statusEdit: false
  };

  handleEdit = (event, Todo) => {
    let arrTodo = this.state['arrTodo'];
    arrTodo = arrTodo.map((item) => {
      if (item.id === Todo.id) {
        item.Todo = event.target.value;
      }
    });
    this.setState({
      arrTodo: arrTodo,
      editTodo: {
        id: Todo.id,
        Todo: event.target.value
      }
    });
  };

  handleEnterTodo = () => {
    this.setState({
      statusEdit: false
    });
  };

  handleEditTodo = (Todo) => {
    this.setState({
      editTodo: Todo,
      statusEdit: true
    });
  };

  handleDelete = (Todo) => {
    let arrTodo = this.state['arrTodo'];
    arrTodo = arrTodo.filter((item) => item.id !== Todo.id);
    this.setState({
      arrTodo: arrTodo
    });
    toast.error('Finish Delete!');
  };

  handleTyping = (event) => {
    if (event.target.value === '') {
      this.setState({
        statusTyping: false
      });
    } else if (event.target.value !== '') {
      this.setState({
        statusTyping: true
      });
    }
    this.setState({
      Todo: event.target.value
    });
  };

  handleSubmit = () => {
    this.setState({
      arrTodo: [
        ...this.state['arrTodo'],
        {
          id: Math.floor(Math.random() * (999 - 10 + 1) + 10),
          Todo: this.state['Todo']
        }
      ]
    });
    toast.success('Success!');
  };

  render() {
    return (
      <>
        <form className="d-flex form_bt">
          <div className="mb-3">
            <label htmlFor="label-email" className="form-label">
              Simple Todo App
            </label>
            <input
              type="text"
              className="form-control w-2"
              onChange={this.handleTyping}
              value={this.state['Todo']}
            />
            <hr size="2"></hr>
            {this.state['statusTyping'] && (
              <>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.handleSubmit()}>
                  Submit
                </button>
                <hr size="2"></hr>
              </>
            )}
            <ShowTodo
              arrTodo={this.state['arrTodo']}
              handleEditTodo={this.handleEditTodo}
              editTodo={this.state['editTodo']}
              handleDelete={this.handleDelete}
              handleEnterTodo={this.handleEnterTodo}
              handleEdit={this.handleEdit}
              statusEdit={this.state['statusEdit']}></ShowTodo>
          </div>
        </form>
      </>
    );
  }
}
export default myexample;
