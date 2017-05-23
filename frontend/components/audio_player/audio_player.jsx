import React from 'react';
import ReactDOM from 'react-dom';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playlist: this.props.playlist,
      player: document.getElementById("Audio")
    };

    // this.playNext = this.playNext.bind(this);
    window.playlist = this.state.playlist;
  }

  // playNext() {
  //   let newPlaylist = this.props.playlist.slice(1);
  //   this.setState({playlist: newPlaylist});
  // }

  render() {
    const { playlist } = this.props;

    return (playlist.length > 0) ? (
      <footer>
        <marquee>
          {`Currently Playing: "${playlist[0].name}" - ${playlist[0].artist}`}
        </marquee>
        <img
          src={playlist[0].img}
          className="small-player"/>
        <div>
          <audio
            src={playlist[0].src}
            id="Audio"
            controls
            onEnded={this.props.next}
            autoPlay/>
        </div>
      </footer>
    ) : (
      <footer>
        <marquee className="empty-queue">
          Nothing in queue D=
        </marquee>
      </footer>
    );
  }
}

export default AudioPlayer;


// <img
//   src={playlist[0].img}
//   className="small-player"/>

// class AudioPlayer extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       player: null,
//       isPlaying: undefined
//     };
//   }
//
//   componentDidMount() {
//     debugger;
//     if (!this.state.player) {
//       debugger;
//       const player = this.refs.audioPlayer;
//       if (player) {
//         debugger;
//         window.player = player;
//         const isPlaying = player.playing;
//         this.setState({player, isPlaying});
//       }
//     }
//   }
//
//   render () {
//     const {playlist} = this.props;
//     debugger;
//     return (
//         <footer>
//           <img
//             src={playlist[0].img}
//             className="small-player" />
//           <div>
//             <audio
//               ref="audioPlayer"
//               id="Audio"
//               src={`${playlist[0].src}`}
//               controls
//               autoPlay/>
//           </div>
//         </footer>
//     );
//   }
// }
