import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {

  handleDeleteUser = (user) => {
    console.log(user);
    this.props.DeleteUserRedux(user);
  }

  render() {
    return (
      <div>
        Welcome to my website! (author: Duck jajajajau)
        <div>
          Account List:
          {this.props.dataRedux.map((item, index) => {
            return (
              <div key={index}>
                {index + 1}{'/ '}{item.UserName}{"     "}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.handleDeleteUser(item)}
                >
                  Remove
                </button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
}

const mapDispatchToProps = (dispatch) => {
  return { DeleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete}) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
