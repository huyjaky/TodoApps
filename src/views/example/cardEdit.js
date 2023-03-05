import React from 'react';
import PropTypes from 'prop-types';

class cardEdit extends React.Component {
  render() {
    return (
      <>
        <span>
          {this.props.index + 1} -- {this.props.item.Todo}{' '}
        </span>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.props.handleEditTodo(this.props.item)}
          style={{ marginRight: '10px' }}
        >
          Edit
        </button>
      </>
    );
  }
}

cardEdit.propTypes = {
  handleEditTodo: PropTypes.func,
  index: PropTypes.number,
  item: PropTypes.shape({
    id: PropTypes.number,
    Todo: PropTypes.string
  })
};

export default cardEdit;
