import React from 'react';

const AudioPlayer = ({currentSong}) => {
  return (
    currentSong.song ? (
      <audio
        src={`${currentSong.song.song_details.source}`}
        controls
        autoPlay/>
    ) : null
  );
};

export default AudioPlayer;
