import React from 'react';
import SongItem from './song_item';
import UploadFormContainer from '../upload_forms/upload_form_container';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';
import AudioPlayerContainer from '../audio_player/audio_player_container';

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
    width           : '70vh',
    height          : '65vh',
    border          : '1px solid #ccc',
    padding         : '20px',
    zIndex          : 11,
    backgroundColor : '#e2e2e2'
  }
};

class SongView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.delete = this.delete.bind(this);
    // this.props.getSong = this.props.getSong.bind(this);
  }

  openForm () {
    this.setState({isOpen: true});
  }

  closeForm () {
    this.setState({isOpen: false});
  }

  componentWillUnmount() {
    this.closeForm();
  }

  componentWillMount() {
    this.props.getSong(this.props.match.params.song_id);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.songs.redirect) { this.closeForm(); }
  }

  componentDidUpdate() {
    if (this.props.songs.redirect === "stream") {
      this.props.history.push(`/stream`);
    } else if (this.props.songs.redirect === "success") {
      this.closeForm();
      this.props.getSong(this.props.match.params.song_id);
    }
    //  else {
    //   this.closeForm();
    // }
  }


  delete() {
    this.props.deleteSong(this.props.match.params.song_id);
  }

  render () {
    const {songs, currentUser} = this.props;
    const buttons = (
      <div>
        <button onClick={this.openForm}>
          <span>
            Update!
          </span>
        </button>
        <button onClick={this.delete}>
          <span>
            Delete!
          </span>
        </button>
      </div>
    );

    return Object.keys(songs).length !== 0 ? (
      <main className="song-view-main">
        <div className="song-view">
          <AudioPlayerContainer />
          <SongItem song={songs} currentUser={currentUser} />
        </div>
        <Modal
          isOpen={this.state.isOpen}
          contentLabel="form"
          onRequestClose={this.closeForm}
          style={modalUploadStyle}
        >
          <UploadFormContainer
            closeModal={this.closeForm}
            type="update" />
        </Modal>
        {currentUser.id === songs.user_id ? buttons : null}
        <ul>
          Comments!
        </ul>
      </main>
    ) : null;
  }
}

export default withRouter(SongView);
