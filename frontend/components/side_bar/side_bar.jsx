import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render () {
    const users = this.props.users;
    if (Object.keys(users).length === 0) { return null; }

    return (
      <ul className="side-bar-list">
        <label>Check out these featured artists!</label>
        {users.map((user, i) => (
          <li key={`user-${i}`}>
            <Link to={`/users/${user.id}`}>
              <img src={`${user.image}`} className="avatar"/>
              <p>
                {user.username}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default withRouter(SideBar);
