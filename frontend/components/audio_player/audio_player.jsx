import React from 'react';
import ReactDOM from 'react-dom';
import Audio from 'react-audioplayer';

const AudioPlayer = ({playlist}) => {
  window.playlist = playlist;

  // const player = document.getByElementId("audio-player");

  return (
    (playlist.length > 0) ? (
      <footer>
        <img
          src={playlist[0].img}
          className="small-player"/>
        <Audio
          id="audio-player"
          fullPlayer={true}
          width={240}
          autoPlay={true}
          playlist={playlist} />
      </footer>
    ) : null
  );
};

export default AudioPlayer;



// return (
//   currentSong.song ? (
//     <audio
//       src={`${currentSong.song.song_details.source}`}
//       controls
//       autoPlay/>
//   ) : null
// );
