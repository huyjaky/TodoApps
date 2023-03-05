import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import './Style.scss';

class User extends React.Component {
  state = {
    listUser: []
  };

  async componentDidMount() {
    let res = await axios.get('https://reqres.in/api/users?page=1');
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : []
    });
    console.log(this.state['listUser']);
  }

  render() {
    return (
      <div>
        {this.state['listUser'].length > 0 &&
          this.state['listUser'].map((item, index) => {
            return (
              <div key={index} className="listUser-item">
                <Link style={{ textDecoration: 'none', color: 'white' }} to={`/User/${item.id}`}>
                  <span className="detail-user_link">
                    {item.first_name} {item.last_name}
                  </span>
                </Link>
              </div>
            );
          })}
      </div>
    );
  }
}

export default User;
