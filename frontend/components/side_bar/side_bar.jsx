import React from 'react';
import {withRouter} from 'react-router-dom';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render () {
    const users = this.props.users;

    if (users.length === 0) { return null; }

    return (
      <ul className="side-bar-list">Check out these feature artists!
        {users.map((user, i) => (
          <li key={`user-${i}`}>
            <Link to={`/users/${user.id}`}>
              user.username
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default withRouter(SideBar);
