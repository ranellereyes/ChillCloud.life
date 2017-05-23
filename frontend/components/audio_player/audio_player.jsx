import React from 'react';
import ReactDOM from 'react-dom';

const AudioPlayer = ({playlist}) => {
  return playlist.length > 0 ?
  (
    <footer>
      <marquee>
        {`Currently Playing - ${playlist[0].name} by: ${playlist[0].artist}`}
      </marquee>
      <img
        src={playlist[0].img}
        className="small-player"/>
      <div>
        <audio
          src={playlist[0].src}
          id="Audio"
          controls
          autoPlay/>
      </div>
    </footer>
  ) : null;
};
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

export default AudioPlayer;


// <img
//   src={playlist[0].img}
//   className="small-player"/>
