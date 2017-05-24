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

  render() {
    const { username, image, songs } = this.props.users;

    if (Object.keys(this.props.users).length === 0 ||
      Array.isArray(this.props.users)) { return null; }

    return (
      <div className="user-view">
        <div className="header">
          <img
            src={image}
            className="large-avatar" />
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
