import React from 'react';
import SongItem from './song_item';

class SongDetailList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllSongs();
  }

  render () {
    const songs = this.props.songs;

    if (Object.keys(songs)[0] === "id") { return null; }

    return (
      <ul className="stream-list">Hi!
        {Object.keys(songs).map((key) => (
          <li key={`song-${key}`}>
            <SongItem song={songs[key]} />
          </li>
        ))}
      </ul>
    );
  }
}

export default SongDetailList;
