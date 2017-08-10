import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SongItem from '../songs/song_item';
import Modal from 'react-modal';

const stylin = {
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
    width           : '290px',
    height          : '300px',
    border          : '1px solid #ccc',
    padding         : '20px',
    zIndex          : 11,
    backgroundColor : '#e2e2e2'
  }
};

class UserView extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isOpen: false,
      username: this.props.currentUser.username,
      image: null
    };

    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.getUser(this.props.match.params.user_id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.user_id
       !== this.props.match.params.user_id &&
    Boolean(nextProps.match.params.user_id)) {
      this.props.getUser(nextProps.match.params.user_id);
    }

    this.closeForm();
  }

  openForm() {
    this.setState({isOpen: true});
  }

  closeForm() {
    this.setState({isOpen: false});
  }

  handleSubmit() {
    var formData = new FormData();
    const data = this.state;

	  Object.keys(data).forEach(key => {
			if (data[key] !== null && key !== "isOpen") {
				formData.append(`user[${key}]`, data[key]);
			}
    });

    this.props.edit(formData, this.props.currentUser.id);
  }

  update(field){
    if (field === "image") {
      return e => {
        var fileReader = new FileReader();
        const file = e.currentTarget.files[0];
        fileReader.onloadend = () => {
          this.setState({[field]: file});
        };

        if (file) { fileReader.readAsDataURL(file); }
      };
    } else {
      return e => this.setState({[field]: e.currentTarget.value });
    }	}

  render() {
    const { id, username, image, songs } = this.props.users;

    if (Object.keys(this.props.users).length === 0 ||
      Array.isArray(this.props.users)) { return null; }

    return (
      <div className="user-view">
        <div className="header">
          <img
            src={image}
            className="large-avatar" />
          {id === this.props.currentUser.id ?
            <div className="edit-icon">
            <i className="fa fa-pencil-square"
              aria-hidden="true"
              onClick={this.openForm}>
              <div className="update-text">
                Edit User Info
              </div>
            </i>
          </div> : null}
          <ul className="user-details">
            <li key={`user-${id}`}>{username}</li>
          </ul>
        </div>
        <Modal
          isOpen={this.state.isOpen}
          contentLabel="form"
          onRequestClose={this.closeForm}
          style={stylin}
        >
          <div className="login-form">
            <p className="form-title">
              ChillCloud
            </p>
            <br />
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"/>
            <label className="form-text"> Username
            </label>
            <br />
            <label className="custom-music-upload form-text">
              <i className="fa fa-cloud-upload"></i> Profile Pic
                <input
                  type="file"
                  onChange={this.update('image')}
                  className="login-input"/>
              </label>
            <br />
            <br />
            <button
              onClick={this.handleSubmit}>
              Update!
            </button>
          </div>
        </Modal>
        <section>
          <ul className="user-view-body">
            <ul className="stream-list">
              {songs.map((song, i) => (
                <li key={`song-${i}`}>
                  <SongItem
                    song={song}
                    play={this.props.play}
                    queue={this.props.queue}
                  />
                </li>
              ))}
              {
                (songs.length === 0) ? (
                  <div className="blank-message">
                    <li>It's too quiet here...</li>
                    <li>Let's upload something!</li>
                  </div>
                ) : null
              }
            </ul>
            <ul className="user-view-assoc">
              <ul>
                <li>
                  <i className="fa fa-users" aria-hidden="true"></i>
                  Following
                  <i className="fa fa-users" aria-hidden="true"></i>
                </li>
                <div></div>
                <li>Nobody</li>
              </ul>
              <br />
              <ul>
                <li>
                  <i className="fa fa-gratipay" aria-hidden="true"></i>
                    Liked Songs
                  <i className="fa fa-gratipay" aria-hidden="true"></i>
                </li>
                <div></div>
                <li>Nothing</li>
                <li>(Features to be added)</li>
              </ul>
            </ul>
          </ul>
        </section>
      </div>
    );
  }
}

export default withRouter(UserView);
