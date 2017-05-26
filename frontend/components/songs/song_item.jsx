import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export const SongItem = ({match, song, currentUser, play, queue, history}) => {
  let button;

  const playSong = (e) => {
    e.stopPropagation();
    e.preventDefault();
    play(song);
  };

  const queueSong = (e) => {
    e.stopPropagation();
    e.preventDefault();
    queue(song);
  };

  const reroute = (e) => {
    e.stopPropagation();
    history.push(`/songs/${song.id}`);
  };

  return (
    <div className="song-detail-comp"
      onClick={reroute}>
      <img src={song.image_url} />
      <div className="second-col">
        <section>
          <div className="buttons">
            <button
              className="play-button"
              onClick={playSong}
              />
            <button
              className="queue-button"
              onClick={queueSong}>
              +
              <div className="queue-text">
                Add to queue
              </div>
            </button>
          </div>
          <ul className="details">
            <li key={`title-${song.id}`}>{song.title}</li>
            <li key={`artist-${song.id}`}>{song.artist}</li>
          </ul>
        </section>
      </div>
      <div className="genre-label">{song.genre ? `#${song.genre}` : null}</div>
      <p>
        {song.comments.length}
        <i className="fa fa-comments" aria-hidden="true"></i>
      </p>
    </div>
  );
};

export default withRouter(SongItem);
