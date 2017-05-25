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
    height          : '200px',
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
              onClick={this.openForm}></i>
          </div> : null}
        </div>
        <Modal
          isOpen={this.state.isOpen}
          contentLabel="form"
          onRequestClose={this.closeForm}
          style={stylin}
        >
          <input
            type="text"
            value={this.state.username}
            onChange={this.update('username')}/>
          <input
            type="file"
            onChange={this.update('image')}/>
          <button
            onClick={this.handleSubmit}>
            Update!
          </button>
        </Modal>
        <section>
          <ul>
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
            </ul>
          </ul>
        </section>
      </div>
    );
  }
}

export default withRouter(UserView);
