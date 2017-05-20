import React from 'react';

class SongView extends React.Component {
  constructor(props) {
    super(props);
    // this.props.getSong = this.props.getSong.bind(this);
  }

  componentWillMount() {
    this.props.getSong(this.props.match.params.song_id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.song_id !== nextProps.match.params.song_id) {
      this.props.getSong(nextProps.match.params.song_id);
    }
  }

  render () {
    const song = this.props.songs;
    return Object.keys(song).length !== 0 ? (
      <main>
        <header>
          <ul>
            <li>{song.title}</li>
            <li>{song.artist}</li>
          </ul>
        </header>
      </main>
    ) : null;
  }
}

export default SongView;
