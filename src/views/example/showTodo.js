import React from 'react';
import PropTypes from 'prop-types';
import CardEdit from './cardEdit';

class showTodo extends React.Component {
  handleEdit = (event, item) => {
    this.props.handleEdit(event, item);
  };

  handleEnterTodo = () => {
    this.props.handleEnterTodo();
  };

  handleEditTodo = (Todo) => {
    this.props.handleEditTodo(Todo);
  };

  handleDelete = (Todo) => {
    this.props.handleDelete(Todo);
  };

  render() {
    return (
      <>
        {this.props.arrTodo.length > 0 &&
          this.props.arrTodo.map((item, index) => {
            return (
              <div key={item.id} style={{ marginBottom: '10px' }}>
                {this.props.statusEdit === false ? (
                  <CardEdit
                    index={index}
                    item={item}
                    handleEditTodo={this.handleEditTodo}
                  ></CardEdit>
                ) : (
                  <>
                    {item.id === this.props.editTodo.id ? (
                      <>
                        <span>
                          {index + 1}
                          <input
                            style={{ borderRadius: '12px', marginRight: '10px', width: '100%' }}
                            onChange={(event) => this.handleEdit(event, item)}
                            value={this.props.editTodo.Todo}
                          ></input>
                        </span>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => this.handleEnterTodo(item)}
                          style={{ marginRight: '10px' }}
                        >
                          Enter
                        </button>
                      </>
                    ) : (
                      <CardEdit
                        index={index}
                        item={item}
                        handleEditTodo={this.handleEditTodo}
                      ></CardEdit>
                    )}
                  </>
                )}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.handleDelete(item)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        <hr></hr>
      </>
    );
  }
}

showTodo.propTypes = {
  arrTodo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      Todo: PropTypes.string
    })
  ),
  handleDelete: PropTypes.func,
  handleEditTodo: PropTypes.func,
  editTodo: PropTypes.shape({
    id: PropTypes.number,
    Todo: PropTypes.string
  }),
  statusEdit: PropTypes.bool,
  handleEnterTodo: PropTypes.func,
  handleEdit: PropTypes.func
};

export default showTodo;
