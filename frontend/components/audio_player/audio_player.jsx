import React from 'react';

const AudioPlayer = ({song, isPlaying}) => (
  song ? (
    <audio controls src={`${song.song_details.source}`} />
  ) : null
);

export default AudioPlayer;
