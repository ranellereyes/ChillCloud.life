import React from 'react';
import SongItem from './song_item';
import UploadFormContainer from '../upload_forms/upload_form_container';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
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
      isOpen: false,
      comment: '',
      rand: `https://s3-us-west-1.amazonaws.com/chillcloud-dev/stock/cover${Math.ceil(8 * Math.random())}.jpg`
    };

    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.delete = this.delete.bind(this);
    this.playSong = this.playSong.bind(this);
    this.queueSong = this.queueSong.bind(this);
    this.comment = this.props.comment.bind(this);
    this.deleteComment = this.props.deleteComment.bind(this);
    this.update = this.update.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.reroute = this.reroute.bind(this);
    this.rerouteSong = this.rerouteSong.bind(this);
    // this.props.getSong = this.props.getSong.bind(this);
  }

  openForm () {
    this.setState({isOpen: true});
  }

  closeForm () {
    this.setState({isOpen: false});
  }

  reroute (e) {
    e.preventDefault();
    this.props.history.push(`/users/${this.props.songs.user_id}`);
  }

  rerouteSong (id) {
    return (e) => {
      e.preventDefault();
      // this.props.history.push(`/songs/${id}`).then(() => (this.props.getSong(id)));
      this.props.getSong(id)
        .then(this.props.history.push(`/songs/${id}`));
    };
  }

  componentWillUnmount() {
    this.closeForm();
  }

  componentDidMount() {
    this.setState({rand: `https://s3-us-west-1.amazonaws.com/chillcloud-dev/stock/cover${Math.ceil(8 * Math.random())}.jpg`});
    this.props.getSong(this.props.match.params.song_id);
  }

  componentWillReceiveProps(nextProps) {
    // if (!nextProps.songs.redirect) {
    //   this.closeForm();
    // } else
    if (nextProps.songs.id !== parseInt(this.props.match.params.song_id) &&
    Boolean(nextProps.songs.id)) {
      this.props.getSong(this.props.match.params.song_id);
    }
  }

  componentDidUpdate() {
    if (this.props.songs.redirect === "stream") {
      this.props.history.push(`/stream`);
    } else if (this.props.songs.redirect === "success") {
      this.closeForm();
    }
  }

  playSong () {
    this.props.play(this.props.songs);
  }

  queueSong () {
    this.props.queue(this.props.songs);
  }

  delete() {
    this.props.deleteSong(this.props.match.params.song_id);
  }

  update(e) {
		this.setState({comment: e.currentTarget.value });
	}

	_handleSubmit() {
    let item = {
      user_id: this.props.currentUser.id,
      song_id: this.props.songs.id,
      body: this.state.comment
    };

    this.setState({comment: ''});
    this.props.comment(item);
	}

	renderErrors(){
		return(
			<ul className='errors'>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  render () {
    const {songs, currentUser} = this.props;
    const buttons = (
      <div className="artist-buttons">
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

    let randStyle = {
      backgroundImage: `url(${this.state.rand})`
    };

    return (!songs.redirect
      && !Array.isArray(songs)
      && Object.keys(songs).length > 0) ? (
      <main className="song-view-main">
        <div
          className="song-view"
          style={randStyle}>
          <img src={songs.image_url} />
          <div className="second-col">
            <section>
              <div className="buttons">
                <button
                  className="play-button"
                  onClick={this.playSong}
                  />
                <button
                  className="queue-button"
                  onClick={this.queueSong}>+</button>
              </div>
              <ul className="details">
                <li key={`title-${songs.id}`}>{songs.title}</li>
                <li
                  key={`artist-${songs.id}`}
                  onClick={this.reroute}
                  className="link">{songs.artist}</li>
              </ul>
            </section>
            {currentUser.id === songs.user_id ? buttons : null}
          </div>
            <p className="genre-label">{songs.genre ? `#${songs.genre}` : null}</p>
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
        <div className="bottom-view">
            <ul className="comments">
              <div className="comment-header">
              <img
                src={currentUser.image}
                className="mini" />
              <input
                type="text"
                value={this.state.comment}
                onChange={this.update}>
              </input>
              {this.renderErrors()}
              <button
                onClick={this._handleSubmit}>
                Comment!
              </button>
              </div>
            {Array.isArray(songs.comments) ? (songs.comments.map((comment, i) => (
              <li
                key={`com-${i}`}
                className="comment-disp">
                <Link to={`/users/${comment.user_id}`}>
                  <img
                    src={comment.avatar}
                    className="mini"/>
              </Link>
                {comment.body}
                {comment.user === currentUser.username ?
                  <button
                    onClick={
                      () => { this.deleteComment(comment.id); }
                    }
                    className="delete-button">X</button> :
                    null}
              </li>
            ))) : null}

            </ul>
          <ul className="artist-similar">
            <p
              className="link"
              onClick={this.reroute}>
              Similar songs from {songs.artist}!
            </p>
            {songs.otherSongs.length === 0 ?
              <li>None D=</li> :
              songs.otherSongs.map((song, i) => (
                <li
                  key={`other-${i}`}
                  className="link"
                  onClick={this.rerouteSong(song.id)}>
                  <img
                    src={`${song.image}`}
                    className="mini"/>
                  {song.title}
                </li>
            ))}
          </ul>
        </div>
      </main>
    ) : null;
  }
}

export default withRouter(SongView);
