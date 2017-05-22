import React from 'react';
import ReactDOM from 'react-dom';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player: null
    };
  }

  componentWillReceiveProps(e) {
    if (!this.state.player) {
      const player = document.getElementById('Audio');
      window.player = player;
      this.setState({player});
    }
  }

  render () {
    debugger;
    const playlist = this.props.playlist;

    return (
      playlist.length > 0 ? (
        <footer>
          <img
            src={playlist[0].img}
            className="small-player" />
          <div>
            <audio
              id="Audio"
              src={`${playlist[0].src}`}
              controls
              autoPlay/>
          </div>
        </footer>
      ) : null
    );
  }
}

export default AudioPlayer;


// <img
//   src={playlist[0].img}
//   className="small-player"/>
