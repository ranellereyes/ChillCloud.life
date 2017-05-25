import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SongItem from '../songs/song_item';

class UserView extends React.Component {
  constructor (props) {
    super(props);
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
  }

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
            <i className="fa fa-pencil-square" aria-hidden="true"></i>
          </div> : null}
        </div>
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
