import React from 'react';
import ShowTodo from './showTodo';

class myexample extends React.Component {
  state = {
    arrTodo: [],
    statusTyping: false,
    count: 1
  };

  handleDelete = () => {
    let arrTodo = this.state['arrTodo'];
    console.log(arrTodo[0]);
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
      arrTodo: [...this.state['arrTodo'], this.state['Todo']]
    });
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
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.handleTyping}
              value={this.state['Todo']}
            />
            <hr size="2"></hr>
            {this.state['statusTyping'] && (
              <>
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>
                  Submit
                </button>
                <hr size="2"></hr>
              </>
            )}
            <ShowTodo arrTodo={this.state['arrTodo']} handleDelete={this.handleDelete}></ShowTodo>
          </div>
        </form>
      </>
    );
  }
}
export default myexample;
