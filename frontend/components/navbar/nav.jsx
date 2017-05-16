import React from 'react';
import SessionFormContainer from '../session_forms/session_form_container';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const leftNav = (
      <div className="left-nav-btns">
        <Link to="/">
          <button>
            Home
          </button>
        </Link>
        <Link to="/stream">
          <button>
            Collection
          </button>
        </Link>
      </div>
    );

    const loginNav = (
      <div className="right-nav-btns">
        <SessionFormContainer />
      </div>
    );

    const logoutNav = (
      <div>
        <Link to="/upload">
          <button>Upload</button>
        </Link>
        <button onClick={this.props.logout}>
          Logout
        </button>
      </div>
    );

    return (
      <div>
        {leftNav}
        {this.props.currentUser ? logoutNav : loginNav}
      </div>
    );
  }
}

export default Nav;
