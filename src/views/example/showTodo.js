import React from 'react';
import PropTypes from 'prop-types';

class showTodo extends React.Component {
  handleDelete2 = () => {
    this.props.handleDelete();
  };

  render() {
    return (
      <>
        {this.props.arrTodo.map((item, index) => {
          return (
            <>
              <div key={index} style={{ marginBottom: '10px' }}>
                {index + 1} -- {item}{' '}
                <button type="button" className="btn btn-primary" style={{ marginRight: '10px' }}>
                  Delete
                </button>
                <button type="button" className="btn btn-primary">
                  Edit
                </button>
              </div>
            </>
          );
        })}
        <hr></hr>
      </>
    );
  }
}

showTodo.propTypes = {
  arrTodo: PropTypes.array
};

export default showTodo;
