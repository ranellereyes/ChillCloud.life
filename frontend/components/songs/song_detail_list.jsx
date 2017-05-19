import React from 'react';
import SongItem from './song_item';

class SongDetailList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllSongs();
  }

  render () {
    const songs = this.props.songs;

    return (
      <ul className="stream-list">Hi!
        {Object.keys(songs).map((key) => (
          <SongItem song={songs[key]} />
        ))}
      </ul>
    );
  }
}

export default SongDetailList;
