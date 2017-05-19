import React from 'react';

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
      <ul>Hi!
        {Object.keys(songs).map((key) => (
          <li key={`song-${key}`}>{songs[key].title}</li>
        ))}
      </ul>
    );
  }
}

export default SongDetailList;
