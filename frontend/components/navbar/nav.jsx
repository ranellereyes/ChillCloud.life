import React from 'react';
import SessionFormContainer from '../session_forms/session_form_container';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const modalStyle = {
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
    width           : '280px',
    height          : '280px',
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
      modalIsOpen: false,
      action: ''
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(action) {
    return () => {
      this.setState({modalIsOpen: true, action});
    };
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render () {
    const user = this.props.currentUser || null;

    const loggedInNav = (
      <div className="nav-par">
        <div className="left-nav-btns">
          <div className="title">ChillCloud</div>
          <Link to="/upload">
            <button>
              <span>
                Upload
              </span>
            </button>
          </Link>
          <Link to="/stream">
            <button>
              <span>
                Collection
              </span>
            </button>
          </Link>
        </div>
        <div className="right-nav-btns">
          <p
            className="form-text">
              Hi {user ? user.username : ''}
          </p>
          <button onClick={this.props.logout}>
            <span>
              Logout
            </span>
          </button>
        </div>
    </div>
    );

    const loginNav = (
      <div className="nav-par">
        <div className="title">
          ChillCloud
        </div>
        <div className="right-nav-btns">
          <Modal
            isOpen={this.state.modalIsOpen}
            contentLabel="form"
            onRequestClose={this.closeModal}
            style={modalStyle}
          >
            <SessionFormContainer
              type={this.state.action}
              closeModal={this.closeModal} />
          </Modal>
          <button
            onClick={this.openModal('login')}
          >
            <span>
              Log In
            </span>
          </button>
          <button
            onClick={this.openModal('signup')}
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
