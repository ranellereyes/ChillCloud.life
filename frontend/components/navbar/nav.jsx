import React from 'react';
import ReactDOM from 'react-dom';
import SessionFormContainer from '../session_forms/session_form_container';
import UploadFormContainer from '../upload_forms/upload_form_container';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


const modalSplashStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.75)',
    zIndex          : 10
  },
  content : {
    position        : 'fixed',
    margin          : 'auto',
    width           : '330px',
    height          : '400px',
    border          : '1px solid #ccc',
    padding         : '20px',
    zIndex          : 11,
    backgroundColor : '#e2e2e2'
  }
};

const modalUploadStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.75)',
    zIndex          : 10
  },
  content : {
    position        : 'fixed',
    margin          : 'auto',
    width           : '330px',
    height          : '460px',
    border          : '1px solid #ccc',
    padding         : '20px',
    zIndex          : 11,
    backgroundColor : '#e2e2e2'
  }
};

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userFormIsOpen: false,
      uploadFormIsOpen: false,
      action: ''
    };

    this.clearField = this.clearField.bind(this);
    this.update = this.update.bind(this);
    this.openUserForm = this.openUserForm.bind(this);
    this.closeUserForm = this.closeUserForm.bind(this);
    this.openUploadForm = this.openUploadForm.bind(this);
    this.closeUploadForm = this.closeUploadForm.bind(this);
  }

  openUploadForm () {
    this.setState({uploadFormIsOpen: true});
  }

  closeUploadForm () {
    this.setState({uploadFormIsOpen: false});
  }

  openUserForm(action) {
    return () => {
      this.setState({userFormIsOpen: true, action});
    };
  }

  closeUserForm() {
    this.setState({userFormIsOpen: false});
  }

  update(e) {
    this.setState({query: e.currentTarget.value});
    e.currentTarget.value === "" ?
      this.props.clearSearch :
      this.props.query(e.currentTarget.value);
  }

  clearField(e) {
    e.currentTarget.value = "";
    setTimeout(this.props.clearSearch, 250);
  }

  componentWillUnmount() {
    this.setState({
      userFormIsOpen: false,
      uploadFormIsOpen: false
    });
  }

  render () {
    const user = this.props.currentUser || null;

    const loggedInNav = user ? (
      <div className="nav-par">
        <div className="left-nav-btns">
          <div className="title">
            <Link to="/stream">
              ChillCloud
            </Link>
          </div>
          <Link to="/stream">
            <button>
              <span>
                Home
              </span>
            </button>
          </Link>
        </div>
        <div className="search-container">
          <input type="text"
            className="search-bar"
            placeholder="Search Artists and Songs"
            onChange={this.update}
            onBlur={this.clearField} />
            <ul
              className="search-results">
              {(this.props.search) ? (
                this.props.search.map((entry, i) => (
                <Link key={`link-${i}`}
                  to={entry.username ?
                    `/users/${entry.id}` :
                    `/songs/${entry.id}`}
                  onClick={this.props.clearSearch}>
                  <li key={`entry-${i}`}>
                    <img
                      src={`${entry.image || entry.image_url}`}
                      className="mini"/>
                    <p>{entry.username || entry.title}</p>
                  </li>
                </Link>
              ))) : null }
            </ul>
          </div>
        <div className="right-nav-btns">
          <Modal
            isOpen={this.state.uploadFormIsOpen}
            contentLabel="form"
            onRequestClose={this.closeUploadForm}
            style={modalUploadStyle}
          >
            <UploadFormContainer
              closeModal={this.closeUploadForm}
              type="upload" />
          </Modal>
          <button onClick={this.openUploadForm}>
            <span>
              Upload
            </span>
          </button>
          <Link to={`/users/${user.id}`}>
            <img
              src={`${user ? user.image : ''}`}
              className="mini" />
          </Link>
          <Link to={`/users/${user.id}`}>
            <p
              className="greet-text">
                Hi {user ? user.username : ''}
            </p>
          </Link>

          <button onClick={this.props.logout}>
            <span>
              Logout
            </span>
          </button>
        </div>
      </div>
    ) : null;

    const loginNav = (
      <div className="nav-par">
        <div className="nav-title">
          ChillCloud
        </div>
        <div className="right-nav-btns">
          <Modal
            isOpen={this.state.userFormIsOpen}
            contentLabel="form"
            onRequestClose={this.closeUserForm}
            style={modalSplashStyle}
          >
            <SessionFormContainer
              type={this.state.action}
              closeModal={this.closeUserForm} />
          </Modal>
          <button
            onClick={this.openUserForm('login')}
          >
            <span>
              Log In
            </span>
          </button>
          <button
            onClick={this.openUserForm('signup')}
          >
            <span>
              Sign Up
            </span>
          </button>
        </div>
      </div>
    );

    return (
      <nav>
        {this.props.currentUser ? loggedInNav : loginNav}
      </nav>
    );
  }
}

export default Nav;
